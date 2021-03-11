function validate() {
    var username = document.getElementById('username').value;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;

    if (username.length < 3 || username.length > 10) {
        console.log("length must be between 3-10 characters!");
        return false;
    }

    if (!isAlphaNumeric(username)) {
        console.log("invalid username!");
        return false;
    }

    if (pass1 != pass2) {
        console.log("passwords dont match");
        return false;
    }

    if (!(isValidPass(pass1))) {
        console.log("invalid pass");
        return false;
    }
    return true;
}

function isAlphaNumeric(str) {
    if (str.match(/[^\w]/i)) {
        return false;
    }
    return true;
}

//pass is valid if it is at least 6 characters and contains one uppercase one lowercase and one number. 
function isValidPass(str) {
    if (str.length < 6) {
        return false;
    }

    var containsLowercase = false;
    var containsUppercase = false;
    var containsNumber = false;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
            containsNumber = true;
        }
        if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
            containsLowercase = true;
        }
        if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
            containsUppercase = true;
        }
    }
    return containsLowercase && containsLowercase && containsNumber;
}

