function validate() {
    var username = document.getElementById('username').value;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;

    if (username.length < 3 || username.length > 10) {
        var err = document.getElementById("username_err");
        err.textContent = "username must be between 3 and 10 characters";
        return false;
    } else {
        document.getElementById("username_err").textContent = "";
    }

    if (!isAlphaNumeric(username)) {
        var err = document.getElementById("username_err");
        err.textContent = "username must contains only letters, numbers or _";
        return false;
    } else {
        document.getElementById("username_err").textContent = "";
    }

    if (pass1 != pass2) {
        var err = document.getElementById("pass_err2");
        err.textContent = "passwords dont match!";
        return false;
    } else {
        document.getElementById("pass_err2").textContent = "";
    }

    if (!(isValidPass(pass1))) {
        var err = document.getElementById("pass_err1");
        err.textContent = "password must contain at least 1 lowercase, 1 uppercase letter and 1 nubmer";
        return false;
    } else {
        document.getElementById("pass_err1").textContent = "";
    }
    return true;
}

function isAlphaNumeric(str) {
    if (str.match(/[^\w]/i)) {
        return false;
    }
    return true;
}

function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajaxTest").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "register.php", true);

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    var username = document.getElementById('username').value;
    var pass1 = document.getElementById('pass1').value;

    xhttp.send(JSON.stringify({
        "username": username,
        "password": pass1
    }));
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
    return containsLowercase && containsUppercase && containsNumber;
}