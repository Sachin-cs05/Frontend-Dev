function validateLoginForm() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  const usernameError = document.getElementById('username-error');
  const passwordError = document.getElementById('password-error');
  
  usernameInput.style.borderColor = '';
  passwordInput.style.borderColor = '';
  
  usernameError.textContent = '';
  passwordError.textContent = '';
  
  let isValid = true;
  
  if (usernameInput.value.length < 5) {
    usernameInput.style.borderColor = 'red';
    usernameError.textContent = 'Username must be at least 5 characters';
    isValid = false;
  } else {
    usernameInput.style.borderColor = 'green';
  }
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.style.borderColor = 'red';
    passwordError.textContent = 'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character';
    isValid = false;
  } else {
    passwordInput.style.borderColor = 'green';
  }
  
  if (isValid) {
    alert('Login successful!');
  }
  
  return isValid;
}

/*
<form id="loginForm">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" required>
    <span id="username-error" style="color: red;"></span>
  </div>
  
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" required>
    <span id="password-error" style="color: red;"></span>
  </div>
  
  <button type="submit">Login</button>
</form>
*/

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      validateLoginForm();
    });
  }
});