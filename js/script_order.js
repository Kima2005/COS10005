

// File Name: script_order.js
// Purpose: implement form validation for an online order form.
// Project: SweetLife website
// Author: Vuong Khang Minh
// Last Updated: 2023-17-3










// used for form validation for an online order website
function validate() {
    // retrieves the form input fields values
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;

    var delivery = document.getElementById("delivery").checked;
    var pickup = document.getElementById("pickup").checked;
    var bil_address = document.getElementById("bil_address").value;
    var del_address = document.getElementById("del_address").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var postcode = document.getElementById("postcode").value;

    var pay_pickup = document.getElementById("pay_pickup").checked;
    var pay_onl = document.getElementById("pay_onl");


    var visa = document.getElementById("visa");
    var american = document.getElementById("american");
    var master = document.getElementById("master");
    var paypal = document.getElementById("paypal");


    var card_number = document.getElementById("card_number").value;
    var expiration_date = document.getElementById("expiration_date").value;
    var CVC = document.getElementById("CVC").value;


    var errMsg = "";
    var result = true;

    // A regular expression that is used to validate the input. 
    var pattern_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var pattern_text = /^[a-zA-Z ]+$/;
    var pattern_digit = /^\d+$/;


    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");



    // check if the input is empty 
    // If it is empty, the error message is updated, and the form1 and form2 elements are positioned on the screen.
    // If the input field is not empty, the else-if statement checks if the input is valid.
    if (first_name == "") {
        errMsg += "First name cannot be empty.\n";          
        form1.style.left = "0";
        form2.style.left = "118%";
    } else if (!first_name.match(pattern_text)) {
        errMsg += "First name cannot contain special characters\n";
        form1.style.left = "0";
        form2.style.left = "118%";
    }
    // check if the input is empty 
    if (last_name == "") {
        errMsg += "Last name cannot be empty.\n";
        form1.style.left = "0";
        form2.style.left = "118%";
    } else if (!last_name.match(pattern_text)) {
        errMsg += "Last name cannot contain special characters\n";
        form1.style.left = "0";
        form2.style.left = "118%";
    }

    // check if the input is empty 
    if (email == "") {
        errMsg += "Email cannot be empty.\n";
    } else if (!email.match(pattern_email)) {
        errMsg += "You have entered an invalid email address!\n";
        form1.style.left = "0";
        form2.style.left = "118%";
    }

    // check if the input is empty 
    if ((delivery != "") && (del_address == "")) {
        errMsg += "Delivery address cannot be empty.\n";
        form1.style.left = "0";
        form2.style.left = "118%";
    }

    // check if the input is empty 
    if ((delivery == "") && (pickup == "")) {
        errMsg += "Delivery service must be selected.\n";
        form1.style.left = "0";
        form2.style.left = "118%";
    }

    // check if the input is empty 
    if (bil_address == "") {
        errMsg += "Billing address cannot be empty.\n";
        form1.style.left = "0";
        form2.style.left = "118%";
    }

    // check if the input is empty 
    if (phonenumber == "") {
        errMsg += "Phone number cannot be empty.\n";
    } else if (!phonenumber.match(pattern_digit)) {
        errMsg += "Phonenumber cannot contain characters\n";
    } else if ((phonenumber.length < 7) || (phonenumber.length > 10)) {
        errMsg += "You have entered an invalid phonenumber !\n";

    }

    // check if the input is empty 
    if (postcode == "") {
        errMsg += "Post code can not be empty.\n";
    } else if (!postcode.match(pattern_digit)) {
        errMsg += "Postcode cannot contain characters\n";
    } else if (postcode.length != 4) {
        errMsg += "Postcode is 4-digit.\n";

    }

    // check if the input is empty 
    if ((pay_onl == "") && (pay_pickup == "")) {
        errMsg += "Delivery service py must be select.\n";
    }


    // check if the input is empty 
    if ((pay_onl.checked == true) && (visa.checked != true) && (american.checked != true) && (paypal.checked != true) && (master.checked != true)) {
        errMsg += "Please choose express checkout options.\n";


    }


/* Checking if the card number is the correct length for the card type. */
    if ((pay_onl.checked == true) && (CVC == "")) {
        errMsg += "CVC cannot be empty.\n";
    }
    if ((pay_onl.checked == true) && (expiration_date == "")) {
        errMsg += "Expiration Date cannot be empty.\n";
    }

    if ((visa.checked == true) && (card_number.length != 16)) {
        errMsg += "Visa must contain 16 digits\n";
    }
    if ((paypal.checked == true) && (card_number.length != 16)) {
        errMsg += "Paypal must contain 16 digits\n";
    }
    if ((master.checked == true) && (card_number.length != 16)) {
        errMsg += "MasterCard must contain 16 digits\n";
    }
    if ((american.checked == true) && (card_number.length != 15)) {
        errMsg += "American Express must contain 15 digits\n";
    }


    // This is a function that is executed when the continue_order button is clicked.
    if (errMsg != "") {
        alert(errMsg);
        result = false;
    } else {
        alert("Order successfully");
    }
    return result;
}



function init() {
    // initializes some variables 
    var form1 = document.getElementById("form1");
    var form2_z = window.getComputedStyle(document.getElementById("form2")).zIndex;
    var form2 = document.getElementById("form2");
    var order_form = document.getElementById("order_form");

    var order_checkbox = document.getElementById("order_checkbox")

    var continue_order = document.getElementById("continue_order");
    var return_order = document.getElementById("return_order");

    var delivery = document.getElementById("delivery");
    var pickup = document.getElementById("pickup");
    var del_address = document.getElementById("del_address");
    var same_address = document.getElementById("same_address");
    var bil_address = document.getElementById("bil_address");

    var pay_pickup = document.getElementById("pay_pickup");
    var pay_onl = document.getElementById("pay_onl");
    var payment = document.getElementById("payment");

 /* A function that is executed when the continue_order button is clicked. */
    continue_order.onclick = function () {
        form1.style.left = "-100%";
        form2.style.left = "18%";
    }

/* A function that is executed when the return_order button is clicked. */
    return_order.onclick = function () {
        form1.style.left = "0";
        form2.style.left = "118%";
    }


/* A function that is executed when the delivery button is clicked. */
    delivery.onclick = function () {
        del_address.style.display = "inline-block";
        order_checkbox.style.display = "flex"

    }

/* This function is executed when the pickup button is clicked. It hides the delivery address and the
order checkbox. */
    pickup.onclick = function () {
        del_address.style.display = "none";
        order_checkbox.style.display = "none"
    }


/* Checking if the checkbox is checked and if it is, it is copying the delivery address to the billing
address. */
    same_address.onclick = function () {
        if (del_address.value == "") {
            alert("Please enter your delivery address first.")
            same_address.checked = false
        }
        else if (same_address.checked == true) {
            bil_address.value = del_address.value
        }
    }

/* Hiding the payment section when the pay_pickup button is clicked. */
    pay_pickup.onclick = function () {
        payment.style.display = "none";

    }

/* Making the payment section visible when the pay_onl button is clicked. */
    pay_onl.onclick = function () {
        payment.style.display = "block";
        pay_onl.checked = true;
    }


/* This is a function that is executed when the continue_order button is clicked. */
    if (form2_z == 1) {
        pay_onl.checked = true;
        payment.style.display = "block";
        form1.style.left = "-100%";
        form2.style.left = "18%";
    }

    order_form.onsubmit = validate;


}

/* execute function init() once the window is loaded*/
window.onload = init;