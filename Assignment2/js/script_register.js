// File Name: script_register.js
// Purpose: implement form validation for an online register form.
// Project: SweetLife website
// Author: Vuong Khang Minh
// Last Updated: 2023-17-3



// used for form validation for an online register website
function validate() {

  // retrieves the form input fields values
  var user_name = document.getElementById("user_name").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var genf = document.getElementById("genf").checked;
  var genm = document.getElementById("genm").checked;
  var policy = document.getElementById("policy").checked;

  var errMsg = "";
  var result = true;
  var pattern_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var pattern_text = /^[a-zA-Z ]+$/;



  // check if the input is empty 
  if (user_name == "") {
    errMsg += "Username cannot be empty.\n";
  } else if (!user_name.match(pattern_text)) {
    errMsg += "User name cannot contain special characters\n";
  }

  // check if the input is empty 
  if (password == "") {
    errMsg += "Username cannot be empty.\n";
  }

  // check if the input is empty 
  if ((password.length < 9) && (password != "")) {
    errMsg += "Password is at least 9-character long.\n";
  }

  // check if the input is empty 
  if (email == "") {
    errMsg += "Email cannot be empty.\n";
  } else if (!email.match(pattern_email)) {
    errMsg += "You have entered an invalid email address!\n";
  }

  // check if the input is empty 
  if ((genm == "") && (genf == "")) {
    errMsg += "Gender must be selected.\n";
  }

  // check if the input is empty 
  if (policy == "") {
    errMsg += "You must accept the policy.\n"
  }

  // check if the input is empty 
  if (errMsg != "") {
    alert(errMsg);
    result = false;
  } else {
    alert("Sign up successfully");
  }
  return result;
}

/**
 * When the page loads, get the element with the id of register_submit and assign the validate function
 * to its onsubmit event.
 */
function init() {


  var register_submit = document.getElementById("register_submit");
  register_submit.onsubmit = validate;

}
window.onload = init;
