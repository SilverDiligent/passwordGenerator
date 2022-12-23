// Assignment Code
const charsets = {
  lowerAlphabet:"abcdefghijklmnoporstuvwxyz",
  UpperAlphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Numbers:"0123456789",
  SpecialCharacters:" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
 
}
const generatePassword = function () {
  const PasswordLength = window.prompt("Enter password length from 8 to 128 characters");
  if(PasswordLength <8 || PasswordLength > 128) {
    alert("Password must be between 8 and 128")
    return
  }
  const PasswordNumbers = window.confirm("Would you like Numbers in the password");
  const UpperChars = window.confirm("Would you like upper characters in the password")
  const LowerChars = window.confirm("Would you like  lower case characters")
  const SpecialChars = window.confirm("Would you like to have special characters in the password");
  //Collect input from answers
  var possibleCharacters =""
  if (PasswordNumbers===true) {
    possibleCharacters +=charsets.Numbers
  }
  if (UpperChars===true) {
    possibleCharacters+=charsets.UpperAlphabet
  }
if (LowerChars===true){
  possibleCharacters+=charsets.lowerAlphabet
}
if (SpecialChars===true) {
  possibleCharacters+=charsets.SpecialCharacters
}
console.log(possibleCharacters)


  var finalPassword =""
 for (let i = 0; i < PasswordLength; i++) {
  var random = Math.floor(Math.random()* possibleCharacters.length)
finalPassword +=possibleCharacters.charAt(random)

  
 }

return finalPassword

}



 
//Alerting window

//Asking for confirmation


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
