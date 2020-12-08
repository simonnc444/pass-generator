//define variables

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var pwd = '';

var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;


//function to generate a random password

function generate() {
    var confirmLength = '';
//asking user to input desired character length
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
        if (confirmLength === null) {
            break;
        }
    }
//getting user input for which character types to use for the password
    if (confirmLength) {
        if (confirm("Do you want lowercase characters in your password?") == true) {
            lowerSelection = true
        } 

        if (confirm("Do you want uppercase characters in your password?") == true) {
            upperSelection = true
        }

        if (confirm("Do you want special characters in your password?") == true) {
            specialSelection = true
        }

        if (confirm("Do you want numbers in your passwoerd?") == true) {
            numberSelection = true
        }
//if none of the character types are selected, alerts the user to choose at least one
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected")
        }
    }
//generate random password
    var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialSelection ? special : '');
    characters += (numberSelection ? numbers : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
