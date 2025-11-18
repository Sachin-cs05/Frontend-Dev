let user = {
  name: "John",
  email: "john@mail.com",
  age: 21
};

function updateUserObject() {
  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('email').value;
  const ageInput = document.getElementById('age').value;
  
  user.name = nameInput;
  user.email = emailInput;
  user.age = parseInt(ageInput);
  
  displayUserDetails();
  
  return false; // Prevent form submission
}

function displayUserDetails() {
  const userDetails = document.getElementById('user-details');
  if (userDetails) {
    userDetails.innerHTML = `
      <h3>Updated User Details:</h3>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Age:</strong> ${user.age}</p>
    `;
  }
}

function populateForm() {
  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;
  document.getElementById('age').value = user.age;
}

/*
<form id="userForm" onsubmit="return updateUserObject()">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" required>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" required>
  </div>
  
  <div>
    <label for="age">Age:</label>
    <input type="number" id="age" required>
  </div>
  
  <button type="submit">Update User</button>
</form>

<div id="user-details"></div>
*/

document.addEventListener('DOMContentLoaded', function() {
  populateForm();
  displayUserDetails();
});