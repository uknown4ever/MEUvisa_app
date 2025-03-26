document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('visaForm');
    const fileUpload = document.getElementById('fileUpload');
    const fileName = document.getElementById('fileName');

    // File upload name display
    fileUpload.addEventListener('change', function () {
        if (this.files.length > 0) {
            fileName.textContent = this.files[0].name;
        } else {
            fileName.textContent = "No files selected";
        }
    });

    // Form Validation
    form.addEventListener('submit', function (event) {
        // Reset previous error messages
        clearErrorMessages();

        // Full Name Validation
        const fullName = document.getElementById('fullName');
        if (!validateFullName(fullName.value)) {
            showError(fullName, 'Please enter a valid full name (2-50 characters, letters only)');
            event.preventDefault();
        }

        // Country Validation
        const country = document.getElementById('country');
        if (country.value === "") {
            showError(country, 'Please select a country');
            event.preventDefault();
        }

        // Passport Validation
        const passport = document.getElementById('passport');
        if (!validatePassport(passport.value)) {
            showError(passport, 'Please enter a valid passport number');
            event.preventDefault();
        }

        // Visa Type Validation
        const visaType = document.getElementById('visaType');
        if (visaType.value === "") {
            showError(visaType, 'Please select a visa type');
            event.preventDefault();
        }

        // File Upload Validation
        if (fileUpload.files.length === 0) {
            showError(fileUpload, 'Please upload a document');
            event.preventDefault();
        }
    });

    // Validation Helper Functions
    function validateFullName(name) {
        // Allow letters, spaces, and ensure 2-50 characters
        const nameRegex = /^[A-Za-z\s]{2,50}$/;
        return nameRegex.test(name);
    }

    function validatePassport(passport) {
        // Basic passport validation - adjust as needed for specific country formats
        const passportRegex = /^[A-Z0-9]{6,9}$/;
        return passportRegex.test(passport);
    }

    function showError(element, message) {
        // Remove any existing error messages
        const existingError = element.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message alert alert-danger';
        errorDiv.textContent = message;

        // Insert error message after the input
        element.parentNode.insertBefore(errorDiv, element.nextSibling);
        
        // Highlight the input
        element.classList.add('input-error');
    }

    function clearErrorMessages() {
        // Remove all error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        // Remove input error highlighting
        const errorInputs = document.querySelectorAll('.input-error');
        errorInputs.forEach(input => input.classList.remove('input-error'));
    }
});