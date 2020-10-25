// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


var passwordCharacters = [];

var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var lowercaseChar = lowercaseString.split("");

var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseChar =  uppercaseString.split("");

var numberString = "0123456789";
var numberChar = numberString.split("");

var specialString = "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";
var specialChar = specialString.split("");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    function generatePassword() {
       var passwordLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));

       if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
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
            passwordCharacters.push(lowercaseChar);
       }

       if (uppercase) {
            passwordCharacters.push(uppercaseChar); 
       }

       if (numbers) {
            passwordCharacters.push(numberChar);  
       }

       if (special) {
            passwordCharacters.push(specialChar);
       }

    //    var passwordArray = [];

        if (passwordLength >= 8 && passwordLength <= 128) {
            for (i = 0; i <= passwordLength.length; i++) {

                // var characterArray = Math.floor((Math.random() * passwordLength.length));
                // passwordArray.push(passwordCharacters[Math.floor((Math.random() * passwordCharacters.length))][characterArray]);

                var randomCharacter = Math.floor(Math.random() * passwordCharacters.length);
            }
        }
       console.log(randomCharacter);

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
