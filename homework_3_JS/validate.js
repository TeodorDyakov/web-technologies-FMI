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

var idToErrorMessage = {
    "username": "Невалидно потребителско име",
    "name": "Невалидно име",
    "family-name": "Невалидно фамилно име",
    "email": "Невалиден e-mail",
    "password": "Невалидна парола",
    "street": "Невалидна улица",
    "city": "Невалиден град",
    "postal-code": "Невалиден пощенски код",
};

function insertParagraphAfter(id, text, element, className){
    var parElement = document.createElement("p");
    parElement.className = className;
    var node = document.createTextNode(text);
    parElement.appendChild(node);
    parElement.id = id;
    element.parentNode.insertBefore(parElement, element.nextSibling);
}

function registerAJAX() {
    
    if(!validate()){
        return;
    }

    const url = "https://jsonplaceholder.typicode.com/users";
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var username = document.getElementById("username").value;
            var jsonArr = JSON.parse(this.responseText);
            if(jsonArr.some(item => item.username === username)){ 
                insertParagraphAfter("username_taken_error", "Потребителското име е заето", document.getElementById("username"), "error");
            }else{
                insertParagraphAfter("success", "Регистрацията е успешна!", document.getElementById("postal-code"), "success");
            }
        }
    };

    xmlhttp.open("GET", url, true);
    // xmlhttp.setRequestHeader("Content-Type", "application/json");
    // const registerInputJSON = getInputAsJSON();
    xmlhttp.send();
}


function validate() {
    username = document.getElementById("username");

    var allValid = true;
    for (let id in idToValidationFunc) {
        allValid &= validateInput(idToValidationFunc[id], id);
    }
    return allValid;
}

function getInputAsJSON(){
    var input = {};
    for (let id in idToValidationFunc) {
        input[id] = document.getElementById(id).value;
    }
    var res = JSON.stringify(input);
    console.log(res);
    return res;
}

function validateInput(validationFunc, elementId) {
    var element = document.getElementById(elementId);

    if (!validationFunc(element.value)) {
        insertParagraphAfter(elementId + "_error", idToErrorMessage[elementId], element, "error");
        return false;
    } else {
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
    if(!str){
        return true;
    }
    const re = /^([0-9]{5}-)?[0-9]{4}$/;
    return re.test(str);
}

function isAlphaNumeric(str) {
    if (str.match(/[^\w]/i)) {
        return false;
    }
    return true;
}
