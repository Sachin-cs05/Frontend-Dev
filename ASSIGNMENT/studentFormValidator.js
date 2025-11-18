function validateStudentForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const phoneError = document.getElementById('phone-error');
  const passwordError = document.getElementById('password-error');
  
  nameInput.style.borderColor = '';
  emailInput.style.borderColor = '';
  phoneInput.style.borderColor = '';
  passwordInput.style.borderColor = '';
  
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  
  let isValid = true;
  
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(nameInput.value)) {
    nameInput.style.borderColor = 'red';
    nameError.textContent = 'Name should contain only alphabets';
    isValid = false;
  } else {
    nameInput.style.borderColor = 'green';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.borderColor = 'red';
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailInput.style.borderColor = 'green';
  }
  
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    phoneInput.style.borderColor = 'red';
    phoneError.textContent = 'Phone number should be exactly 10 digits';
    isValid = false;
  } else {
    phoneInput.style.borderColor = 'green';
  }
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.style.borderColor = 'red';
    passwordError.textContent = 'Password must contain at least 1 uppercase letter, 1 number, and 1 special character';
    isValid = false;
  } else {
    passwordInput.style.borderColor = 'green';
  }
  
  return isValid;
}

/*
<form id="studentForm">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" required>
    <span id="name-error" style="color: red;"></span>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" required>
    <span id="email-error" style="color: red;"></span>
  </div>
  
  <div>
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" required>
    <span id="phone-error" style="color: red;"></span>
  </div>
  
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" required>
    <span id="password-error" style="color: red;"></span>
  </div>
  
  <button type="submit">Register</button>
</form>
*/

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('studentForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (validateStudentForm()) {
        alert('Registration successful!');
      }
    });
  }
});