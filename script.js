var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//character arrays

var digits = "123456789";
var special = "!@#$%^&*<>?~`_-=+";
var lettersLowercase = "abcdefghijklmnopqrstuvwxyz";
var lettersUppercase = "ABCDEFGHIJKLMNOPQRZTUVWXYZ"; 

function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to have?");
  var storePassword = "";
alert(passwordLength);

if (passwordLength > 8 && passwordLength < 180) {
  var addNumber = confirm("Do you want to add numbers?");
  var addSpecial = confirm("Do you want to add special characters?");
  var addUpperCase = confirm("Do you want to add uppercase letters?");
  var addLowerCase = confirm("Do you want to add lowercase letters?");
  var realPassword = ""; 
  if (addNumber) {
    storePassword += digits;
  } if (addSpecial) {
    storePassword += special;  
  } if (addUpperCase) {
    storePassword += lettersUppercase;
  } if (addLowerCase) {
    storePassword += lettersLowercase;
  }

  for (let i = 0; i < passwordLength; i++) {
    realPassword += storePassword [Math.floor(Math.random() * storePassword.length)]
  }

} else {
  alert("Try again please!")
  generatePassword ();
}

console.log(realPassword.length)
return realPassword;
}



