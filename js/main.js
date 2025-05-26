
//Step 1: ensure emailAdd is valid with regex
//Step 2: ensure emailConfirm is valid with regex
//Step 3: ensure emailOne == emailTwo

// Email Confirmation
function validateEmail() {
  var emailOne = document.getElementById('emailAddress').value;
  var emailTwo  = document.getElementById('emailConfirm').value;
  const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (emailRegEx.test(emailOne)) {
    if (emailOne != emailTwo) {
      alert("Emails do NOT match. Please confirm that the second email matches the first email.");
    }
    else {
      alert("Thank you for your submission.");
    }
  }
  else {
    alert("Please enter a valid email address.");
  }
}

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});





