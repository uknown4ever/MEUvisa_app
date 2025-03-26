import re
from flask import Flask, render_template, request, redirect, url_for, flash, session
import os
from werkzeug.utils import secure_filename
import secrets
from models import db, User, Application

# Create a directory for storing applications if it doesn't exist
if not os.path.exists('applications'):
    os.makedirs('applications')

app = Flask(__name__)
app.secret_key = os.environ.get('FLASK_SECRET_KEY') or secrets.token_hex(16)

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///visa_app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database
db.init_app(app)

# Configure applications folder
UPLOAD_FOLDER = 'applications'
ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg', 'doc', 'docx'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/main.html')
def main():
    return render_template('main.html')

@app.route('/login.html', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        
        user = User.query.filter_by(email=email).first()
        
        if user and user.password == password:  # Note: In production, use proper password hashing
            session['user'] = user.id
            return redirect(url_for('form'))  # Redirect to form page
        else:
            flash('Invalid email or password')
            return render_template('login.html')
    
    return render_template('login.html')

@app.route('/register.html', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        full_name = request.form.get('full-name')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm-password')
        
        # Check if email already exists
        existing_user = User.query.filter_by(email=email).first()
        
        # Check password match first
        if password != confirm_password:
            flash('Passwords do not match', 'danger')
            
            # If email already exists, add that message too
            if existing_user:
                flash('Email already registered', 'danger')
            
            return render_template('register.html')
        
        # Check if email is already registered
        if existing_user:
            flash('Email already registered', 'danger')
            return render_template('register.html')
        
        # Create new user
        new_user = User(full_name=full_name, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        
        flash('Registration successful! Please log in.', 'success')
        return redirect(url_for('login'))
    
    return render_template('register.html')

@app.route('/form.html', methods=['GET', 'POST'])
def form():
    if 'user' not in session:
        flash('Please login first')
        return redirect(url_for('login'))
        
    if request.method == 'POST':
        # Get form data
        full_name = request.form.get('fullName')
        country = request.form.get('country')
        passport = request.form.get('passport')
        visa_type = request.form.get('visaType')
        
         # Server-side validation
        # Full Name Validation
        if not re.match(r'^[A-Za-z\s]{2,50}$', full_name):
            flash('Invalid full name. Use 2-50 letters only.')
            return render_template('form.html')
        
        # Country Validation
        valid_countries = ['morocco', 'spain', 'france', 'portugal', 'algeria', 'libya', 'tunisia', 'mauritania']
        if country not in valid_countries:
            flash('Please select a valid country.')
            return render_template('form.html')
        
        # Passport Validation
        if not re.match(r'^[A-Z0-9]{6,9}$', passport):
            flash('Invalid passport number. Use 6-9 alphanumeric characters.')
            return render_template('form.html')
        
        # Visa Type Validation
        valid_visa_types = ['tourist', 'business', 'student', 'work']
        if visa_type not in valid_visa_types:
            flash('Please select a valid visa type.')
            return render_template('form.html')

        # Handle file upload
        if 'uploadedFile' not in request.files:
            flash('No file part')
            return redirect(request.url)
        
        file = request.files['uploadedFile']
        
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            
            # Create new application
            new_application = Application(
                full_name=full_name,
                country=country,
                passport=passport,
                visa_type=visa_type,
                filename=filename,
                user_id=session['user']
            )
            db.session.add(new_application)
            db.session.commit()
            
            flash('Application submitted successfully!')
            return render_template('form.html')
        else:
            flash('Invalid file type')
    
    return render_template('form.html')


@app.route('/applications')
def view_applications():
    if 'user' not in session:
        flash('Please login first')
        return redirect(url_for('login'))
    
    # Get applications for the current user
    user_applications = Application.query.filter_by(user_id=session['user']).all()
    return render_template('applications.html', applications=user_applications)

# Error handlers
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Create database tables
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
