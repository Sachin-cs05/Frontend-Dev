document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('validationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const successMessage = document.getElementById('successMessage');

        nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

        form.addEventListener('submit', (e) => {
        e.preventDefault();
        
                const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
                if (isNameValid && isEmailValid && isPasswordValid) {
            successMessage.style.display = 'block';
            successMessage.textContent = 'Form Submitted Successfully';

        } else {
            successMessage.style.display = 'none';
        }
    });

        function validateName() {
        const nameValue = nameInput.value.trim();
        const nameError = document.getElementById('nameError');
        
        if (!nameValue) {
            showError(nameInput, nameError, 'Name is required');
            return false;
        } else {
            clearError(nameInput, nameError);
            return true;
        }
    }

        function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailValue) {
            showError(emailInput, emailError, 'Email is required');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, emailError, 'Please enter a valid email');
            return false;
        } else {
            clearError(emailInput, emailError);
            return true;
        }
    }

        function validatePassword() {
        const passwordValue = passwordInput.value;
        const passwordError = document.getElementById('passwordError');
        
        if (!passwordValue) {
            showError(passwordInput, passwordError, 'Password is required');
            return false;
        } else if (passwordValue.length < 6) {
            showError(passwordInput, passwordError, 'Password must be at least 6 characters');
            return false;
        } else {
            clearError(passwordInput, passwordError);
            return true;
        }
    }

        function showError(input, errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.classList.add('invalid');
    }

        function clearError(input, errorElement) {
        errorElement.style.display = 'none';
        errorElement.textContent = '';
        input.classList.remove('invalid');
    }
});