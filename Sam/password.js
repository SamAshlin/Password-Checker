function checkStrength() {
    const password = document.getElementById("password").value;

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecialChar = false;

    if (password.length < 8) {
        document.getElementById("result").innerHTML =
            "Password is Weak: Password must be at least 8 characters long.";
        return;
    }

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        } 
        else if (char >= 'a' && char <= 'z') {
            hasLower = true;
        } 
        else if (char >= '0' && char <= '9') {
            hasDigit = true;
        } 
        else {
            hasSpecialChar = true;
        }
    }

    if (!hasUpper) {
        document.getElementById("result").innerHTML =
            "Password is Weak: Password must contain at least one uppercase letter.";
        return;
    }

    if (!hasLower) {
        document.getElementById("result").innerHTML =
            "Password is Weak: Password must contain at least one lowercase letter.";
        return;
    }

    if (!hasDigit) {
        document.getElementById("result").innerHTML =
            "Password is Weak: Password must contain at least one digit.";
        return;
    }

    if (!hasSpecialChar) {
        document.getElementById("result").innerHTML =
            "Password is Weak: Password must contain at least one special character.";
        return;
    }

    document.getElementById("result").innerHTML =
        "You have successfully created a STRONG PASSWORD";
}


// Function 1: Clear the result message
function clearResult() {
    document.getElementById("result").innerHTML = "";
}


// Function 2: Show the current password length
function showPasswordLength() {
    const password = document.getElementById("password").value;

    document.getElementById("result").innerHTML =
        "Password length: " + password.length;
}
