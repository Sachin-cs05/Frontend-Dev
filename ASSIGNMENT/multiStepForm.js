document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('multiStepForm');
    const steps = Array.from(form.querySelectorAll('.form-step'));
    const nextButtons = Array.from(form.querySelectorAll('.next-btn'));
    const prevButtons = Array.from(form.querySelectorAll('.prev-btn'));
    const submitButton = document.getElementById('submit-btn');
    const summaryDiv = document.getElementById('summary');
    let currentStep = 0;

        showStep(currentStep);

        nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

        prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    });

        submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
            showSummary();
        }
    });

        function showStep(stepIndex) {
                steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? 'block' : 'none';
        });

                const stepHeaders = Array.from(document.querySelectorAll('.step-header'));
        stepHeaders.forEach((header, index) => {
            if (index === stepIndex) {
                header.classList.add('active');
            } else {
                header.classList.remove('active');
            }
        });
    }

        function validateStep(stepIndex) {
        const currentStepElement = steps[stepIndex];
        const inputs = currentStepElement.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
                        const errorElement = input.parentNode.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = '';
            }

                        if (stepIndex === 0) {
                if (!input.value.trim()) {
                    showError(input, 'Name is required');
                    isValid = false;
                }
            } else if (stepIndex === 1) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!input.value.trim()) {
                    showError(input, 'Email is required');
                    isValid = false;
                } else if (!emailRegex.test(input.value.trim())) {
                    showError(input, 'Please enter a valid email');
                    isValid = false;
                }
            } else if (stepIndex === 2) {
                if (!input.value.trim()) {
                    showError(input, 'Password is required');
                    isValid = false;
                } else if (input.value.length < 6) {
                    showError(input, 'Password must be at least 6 characters');
                    isValid = false;
                }
            }
        });

        return isValid;
    }

        function showError(input, message) {
        let errorElement = input.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error-message');
            input.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
        input.classList.add('invalid');
    }

        function showSummary() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        summaryDiv.innerHTML = `
            <h3>Form Summary</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${'*'.repeat(password.length)}</p>
            <p class="success">Form Submitted Successfully!</p>
        `;

        form.style.display = 'none';
        summaryDiv.style.display = 'block';
    }
});