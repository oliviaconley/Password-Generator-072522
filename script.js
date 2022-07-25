// Assignment Code
// This is selecting the FIRST element that has an ID of "generate"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
// This is selecting the FIRST element that has the ID of "password"
  var passwordText = document.querySelector("#password");
// This is setting the text of the password variable 
  passwordText.value = "password";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//character arrays

var digits = "123456789";
var special = "!@#$%^&*<>?~`_-=+";
var lettersLowercase = "abcdefghijklmnopqrstuvwxyz";
var lettersUppercase = "ABCDEFGHIJKLMNOPQRZTUVWXYZ"; 

//prompts 

// Add prompt window for password length and which characters to include. 
function writePassword() {
  var passwordLength = prompt("How many characters do you want your password to have?");
  alert(passwordLength);
  var addNumber = confirm("Do you want to add numbers?");
  var addSpecial = confirm("Do you want to add special characters?");
  var addLetter = confirm("Do you want to add numbers?");
}

// This is writing out the permutation of characters based on user's selection. 
// So this says if they confirm add number, special or letter.... 

for (let i = 0; i <= passwordLength; i++) {
  
  if (addNumber) {

  } if (addSpecial) {

  } if (addLetter) {

  }
}

function generateFinalPw () {
  console.log()
}


