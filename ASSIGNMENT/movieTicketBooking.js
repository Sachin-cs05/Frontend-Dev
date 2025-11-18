function validateMovieTicketBooking() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const seatsInput = document.getElementById('seats');
  
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const seatsError = document.getElementById('seats-error');
  
  nameInput.style.borderColor = '';
  emailInput.style.borderColor = '';
  seatsInput.style.borderColor = '';
  
  nameError.textContent = '';
  emailError.textContent = '';
  seatsError.textContent = '';
  
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
  
  const seatsValue = parseInt(seatsInput.value);
  if (isNaN(seatsValue) || seatsValue < 1 || seatsValue > 10) {
    seatsInput.style.borderColor = 'red';
    seatsError.textContent = 'Please enter a number between 1 and 10';
    isValid = false;
  } else {
    seatsInput.style.borderColor = 'green';
  }
  
  if (isValid) {
    const bookingInfo = {
      name: nameInput.value,
      email: emailInput.value,
      seats: seatsValue
    };
    
    displayTicketDetails(bookingInfo);
  }
  
  return isValid;
}

function displayTicketDetails(bookingInfo) {
  const ticketDetails = document.getElementById('ticket-details');
  if (ticketDetails) {
    ticketDetails.innerHTML = `
      <h3>Ticket Details</h3>
      <p><strong>Name:</strong> ${bookingInfo.name}</p>
      <p><strong>Email:</strong> ${bookingInfo.email}</p>
      <p><strong>Seats:</strong> ${bookingInfo.seats}</p>
      <p><strong>Status:</strong> Confirmed</p>
    `;
  }
}

/*
<form id="bookingForm">
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
    <label for="seats">Number of Seats (1-10):</label>
    <input type="number" id="seats" min="1" max="10" required>
    <span id="seats-error" style="color: red;"></span>
  </div>
  
  <button type="submit">Book Tickets</button>
</form>

<div id="ticket-details"></div>
*/

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      validateMovieTicketBooking();
    });
  }
});