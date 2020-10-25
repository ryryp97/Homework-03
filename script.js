// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
// var lowercaseChar = lowercaseString.split("");

// var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var uppercaseChar =  uppercaseString.split("");

// var numberString = "0123456789";
// var numberChar = numberString.split("");

// var specialString = "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";
// var specialChar = specialString.split("");

var lowercaseCharCodes = arrayFromLowToHigh(65, 90);
var uppercaseCharCodes = arrayFromLowToHigh(97, 122);
var numberCharCodes = arrayFromLowToHigh(48, 57);
var specialCharCodes = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
  ).concat(
    arrayFromLowToHigh(91, 96)
  ).concat(
    arrayFromLowToHigh(123, 126)
  );

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    function generatePassword() {

       var passwordLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));

       if (passwordLength < 8 || passwordLength > 128) {
            alert("Choose a number between 8 and 128!");
       }

       var lowercase = confirm("Would you like to include lowercase letters?");
       var uppercase = confirm("Would you like to include uppercase letters?");
       var numbers = confirm("Would you like to include numbers?");
       var special = confirm("Would you like to include special characters?");

       if (lowercase != true && uppercase != true && numbers != true && special != true) {
            alert("Please select at least one character type.");
       }

       if (lowercase) {
            
       }

       if (uppercase) {
             
       }

       if (numbers) {
              
       }

       if (special) {
            
       }

       if (passwordLength >= 8 && passwordLength <= 128) {
        for (i = 0; i <= passwordLength.length; i++) {

        }
            

       console.log(passwordLength);
       console.log(lowercase);
       console.log(uppercase);
       console.log(numbers);
       console.log(passwordCharacters);
    };
  passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
