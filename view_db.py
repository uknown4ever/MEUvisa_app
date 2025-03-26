import sqlite3
from tabulate import tabulate

def view_users():
    conn = sqlite3.connect('visa_app.db')
    cursor = conn.cursor()
    
    # Get all users
    cursor.execute('SELECT * FROM user')
    users = cursor.fetchall()
    
    # Get column names
    cursor.execute('PRAGMA table_info(user)')
    columns = [column[1] for column in cursor.fetchall()]
    
    print("\n=== Users ===")
    print(tabulate(users, headers=columns, tablefmt='grid'))
    
    conn.close()

def view_applications():
    conn = sqlite3.connect('visa_app.db')
    cursor = conn.cursor()
    
    # Get all applications
    cursor.execute('SELECT * FROM application')
    applications = cursor.fetchall()
    
    # Get column names
    cursor.execute('PRAGMA table_info(application)')
    columns = [column[1] for column in cursor.fetchall()]
    
    print("\n=== Applications ===")
    print(tabulate(applications, headers=columns, tablefmt='grid'))
    
    conn.close()

if __name__ == '__main__':
    view_users()
    view_applications() 