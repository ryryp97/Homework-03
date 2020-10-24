// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    function generatePassword() {
       var passwordLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));
       var lowercase = confirm("Would you like to include lowercase letters?");
       var uppercase = confirm("Would you like to include uppercase letters?");
       var numbers = confirm("Would you like to include numbers?");
       var specialChar = confirm("Would you like to include special characters?");

       var passwordCharacters = [

       ]
        
       if (lowercase) {
            passwordCharacters.push("abcdefghijklmnopqrstuvwxyz").split();
       }

    //    if uppercase) {

    //    }

    //    if (numbers) {

    //    }

    //    if (specialChar) {

    //    }

    //    if (passwordLength >= 8 || passwordLength <= 128) {

    //    }

       console.log(passwordLength);
       console.log(lowercase);
       console.log(uppercase);
       console.log(numbers);
       console.log(specialChar);
       console.log(passwordLength + 5);
    };
  passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
