
function ajax() {
    const url = "https://jsonplaceholder.typicode.com/users";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajaxTest").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", url, true);

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    var username = document.getElementById('username').value;
    var pass1 = document.getElementById('pass1').value;

    xhttp.send(JSON.stringify({
        "username": username,
        "password": pass1
    }));
}

function validate() {

    var idToValidationFunc = {
        "username": validateUsername,
        "name": validateName,
        "family-name": validateFamilyName,
        "email": validateEmail,
        "password": validatePassword,
        "street": validateStreet,
        "city": validateCity,
        "postal-code": validatePostalCode,
    };

    var allValid = true;
    for (let id in idToValidationFunc) {
        allValid &= validateInput(idToValidationFunc[id], id);
    }
    if (allValid) {
        //success
        //make AJAX
    }
}

function validateInput(validationFunc, elementId) {
    var element = document.getElementById(elementId);
    var errElement = document.getElementById(elementId + "_err");
    if (!validationFunc(element.value)) {
        errElement.style.display = "block";
        return false;
    } else {
        errElement.style.display = "none";
        return true;
    }
}

function validateUsername(username) {
    return username.length >= 3 && username.length <= 10;
}

function validateName(str) {
    return str.length <= 50;
}

function validateFamilyName(str) {
    return str.length <= 50;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePassword(str) {
    return str.length >= 6 &&
        str.length <= 10 &&
        /[a-z]/.test(str) &&
        /[A-Z]/.test(str) &&
        /[0-9]/.test(str);
}

function validateStreet(str) {
    return true;
}

function validateCity(str) {
    return true;
}

function validatePostalCode(str) {
    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    return re.test(str);
}

function isAlphaNumeric(str) {
    if (str.match(/[^\w]/i)) {
        return false;
    }
    return true;
}
