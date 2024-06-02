function validation() {
  var letters = /^[A-Za-z]+$/,
    numbers = /^[0-9]+$/,
    flag = true;

  // Name validation
  var nameInput = document.getElementById("name").value;
  var nameMessage = document.getElementById("nameMessage");
  if (nameInput.length === 0) {
    nameMessage.innerHTML = "<i>Please enter your name!</i>";
    nameMessage.classList.remove("text-success");
    nameMessage.classList.add("text-danger");
    flag = false;
  } else {
    nameMessage.innerHTML = "Sounds Good!";
    nameMessage.classList.remove("text-danger");
    nameMessage.classList.add("text-success");
  }

  // Email validation
  var emailInput = document.getElementById("email").value;
  var emailMessage = document.getElementById("emailMessage");
  if (emailInput.length === 0) {
    emailMessage.innerHTML = "<i>Please enter your email</i>";
    emailMessage.classList.remove("text-success");
    emailMessage.classList.add("text-danger");
    flag = false;
  } else if (emailInput.indexOf("@gmail.com") < 0) {
    emailMessage.innerHTML =
      "<i>Make you are using correct email.'</i>";
    emailMessage.classList.remove("text-success");
    emailMessage.classList.add("text-danger");
    flag = false;
  } else {
    emailMessage.innerHTML = "Sounds Good!";
    emailMessage.classList.remove("text-danger");
    emailMessage.classList.add("text-success");
  }

  // Phone number validation
  var phoneInput = document.getElementById("phone").value;
  var phoneMessage = document.getElementById("phoneMessage");
  if (phoneInput.length !== 10) {
    phoneMessage.innerHTML =
      "<i>Phone number must be exactly 10 digits (including 0, eg: 04xx xxx xxx) </i>";
    phoneMessage.classList.remove("text-success");
    phoneMessage.classList.add("text-danger");
    flag = false;
  } else if (!phoneInput.match(numbers)) {
    var charIndex = phoneInput.search(/\D/g);
    var char = phoneInput.charAt(charIndex);
    phoneMessage.innerHTML =
      "<i>Contains character '" + char + "'. Numbers only!</i>";
    phoneMessage.classList.remove("text-success");
    phoneMessage.classList.add("text-danger");
    flag = false;
  } else {
    phoneMessage.innerHTML = "Sounds Good!";
    phoneMessage.classList.remove("text-danger");
    phoneMessage.classList.add("text-success");
  }

  return flag;
}
