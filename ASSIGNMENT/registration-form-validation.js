$(document).ready(function() {
    // Simulated existing users for email uniqueness check
    const existingUsers = [
        'john.doe@example.com',
        'jane.smith@example.com',
        'admin@company.com'
    ];
    
    // 1. Check Name field → not empty
    $('#name').on('blur', function() {
        validateName();
    });
    
    function validateName() {
        const name = $('#name').val().trim();
        if (name === '') {
            $('#name').removeClass('valid').addClass('invalid');
            $('#nameError').show();
            return false;
        } else {
            $('#name').removeClass('invalid').addClass('valid');
            $('#nameError').hide();
            return true;
        }
    }
    
    // 2. Check Email field → valid format and uniqueness
    $('#email').on('blur', function() {
        validateEmail();
    });
    
    function validateEmail() {
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            $('#email').removeClass('valid').addClass('invalid');
            $('#emailError').show();
            $('#emailUniqueError').hide();
            return false;
        } else if (!emailRegex.test(email)) {
            $('#email').removeClass('valid').addClass('invalid');
            $('#emailError').show();
            $('#emailUniqueError').hide();
            return false;
        } else if (existingUsers.includes(email)) {
            $('#email').removeClass('valid').addClass('invalid');
            $('#emailError').hide();
            $('#emailUniqueError').show();
            return false;
        } else {
            $('#email').removeClass('invalid').addClass('valid');
            $('#emailError').hide();
            $('#emailUniqueError').hide();
            return true;
        }
    }
    
    // 3. Check Password → minimum 8 characters
    $('#password').on('blur', function() {
        validatePassword();
    });
    
    function validatePassword() {
        const password = $('#password').val();
        if (password.length < 8) {
            $('#password').removeClass('valid').addClass('invalid');
            $('#passwordError').show();
            return false;
        } else {
            $('#password').removeClass('invalid').addClass('valid');
            $('#passwordError').hide();
            return true;
        }
    }
    
    // 4. Show success message if all fields valid
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        if (isNameValid && isEmailValid && isPasswordValid) {
            // 5. Highlight invalid fields dynamically with red border using .css()
            // This is handled by the validation functions above
            
            // Show success message
            $('#successMessage').fadeIn();
            
            // Reset form
            $('#registrationForm')[0].reset();
            $('input').removeClass('valid invalid');
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                $('#successMessage').fadeOut();
            }, 5000);
        } else {
            // Scroll to first invalid field
            $('input.invalid:first').focus();
        }
    });
    
    // Real-time validation as user types (optional enhancement)
    $('input').on('input', function() {
        if ($(this).hasClass('invalid')) {
            // Revalidate as user types
            if (this.id === 'name') {
                validateName();
            } else if (this.id === 'email') {
                validateEmail();
            } else if (this.id === 'password') {
                validatePassword();
            }
        }
    });
});