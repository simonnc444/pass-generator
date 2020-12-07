// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt for password length
var confirmLength = prompt("How many characters do you want your password to be? (Pick a number between 8 and 128)")

if ((confirmLenth >= 8)) & & (confirmLength <= 128); {
  let symbols = "!@#$%^&*()_+-=[]\;',./{}|:<>?";
  let numbers = "1234567890";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// character options
let confirmSymbols = confirm("Do you want special characters in your password?");
let confirmNumbers = confirm("Do you want numbers in your password?");
let confirmLowerCase = confirm("Do you want to use lowercase letters in your password?");
let confirmUpperCase = confirm("Do you want to use uppercase letters in your password?");

let newPass = "";

// creating variables for password combinations
var allCharacters = symbols + numbers + lowerCase +upperCase;
var a = symbols + numbers +lowerCase;
var b = symbols + numbers + upperCase;
var c =  symbols + lowerCase + upperCase;
var d = numbers + lowerCase + upperCase;
var e = symbols + numbers;
var f = symbols + lowerCase;
var g = symbols + upperCase;
var h = numbers + lowerCase;
var j = numbers + upperCase;
var k = lowercase + upperCase;

// creating loops to match every password combo
if ((confirmSymbols === true) && (confirmNumbers === true) && (confirmLowerCase === true) && (confirmUpperCase === true)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * allCharacters.length);
      newPass += allCharacters.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === true) && (confirmNumbers === true) && (confirmLowerCase === true) && (confirmUpperCase === false)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * a.length);
      newPass += a.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === true) && (confirmNumbers === true) && (confirmLowerCase === false) && (confirmUpperCase === true)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * b.length);
      newPass += b.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === true) && (confirmNumbers === false) && (confirmLowerCase === true) && (confirmUpperCase === true)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * c.length);
      newPass += c.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === false) && (confirmNumbers === true) && (confirmLowerCase === true) && (confirmUpperCase === true)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * d.length);
      newPass += d.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === true) && (confirmNumbers === true) && (confirmLowerCase === false) && (confirmUpperCase === false)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * e.length);
      newPass += e.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === true) && (confirmNumbers === false) && (confirmLowerCase === true) && (confirmUpperCase === false)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * f.length);
      newPass += f.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === true) && (confirmNumbers === false) && (confirmLowerCase === false) && (confirmUpperCase === true)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * g.length);
      newPass += g.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === false) && (confirmNumbers === true) && (confirmLowerCase === true) && (genUpperCase === false)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * h.length);
      newPass += h.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === false) && (confirmNumbers === true) && (confirmLowerCase === false) && (confirmUpperCase === true)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * j.length);
      newPass += j.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === false) && (confirmNumbers === false) && (confirmLowerCase === true) && (confirmUpperCase === true)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * k.length);
      newPass += k.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === true) && (confirmNumbers === false) && (confirmLowerCase === false) && (confirmUpperCase === false)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * symbols.length);
      newPass += symbols.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === false) && (confirmNumbers === true) && (confirmLowerCase === false) && (confirmUpperCase === false)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * numbers.length);
      newPass += numbers.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === false) && (confirmNumbers === false) && (confirmLowerCase === true) && (confirmUpperCase === false)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * lowerCase.length);
      newPass += lowerCase.charAt(character, character + 1);
  }
}
else if ((confirmSymbols === false) && (confirmNumbers === false) && (confirmLowerCase === false) && (confirmUpperCase === true)) {
  for (i = 0; i < confirmLength; i++) {
      let character = Math.floor(Math.random() * a.length);
      newPass += a.charAt(character, character + 1);
  }
}
// generate password to text box
passwordText.textContent = newPass;

}
