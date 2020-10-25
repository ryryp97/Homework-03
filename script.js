// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


var lowercaseString = "abcdefghijklmnopqrstuvwxyz";

var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numberString = "0123456789";

var specialString = "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";

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
        
        // if (lowercase) {
        //     passwordTest += lowercaseString.charAt(Math.floor(Math.random() * lowercaseString.length));
        // }

        // if (uppercase) {
        //     passwordTest += uppercaseString.charAt(Math.floor(Math.random() * uppercaseString.length));
        // }

        // if (numbers) {
        //     passwordTest += numberString.charAt(Math.floor(Math.random() * numberString.length));
        // }

        // if (special) {
        //     passwordTest += specialString.charAt(Math.floor(Math.random() * specialString.length));
        // }

       var password = " ";

        if (passwordLength >= 8 && passwordLength <= 128) {
            for (i = 0; i <= passwordLength; i++) {

                // passwordTest += lowercaseString.charAt(Math.floor(Math.random() * lowercaseString.length));
                // passwordTest += uppercaseString.charAt(Math.floor(Math.random() * uppercaseString.length));
                // passwordTest += numberString.charAt(Math.floor(Math.random() * numberString.length));
                // passwordTest += specialString.charAt(Math.floor(Math.random() * specialString.length));
                if (lowercase) {
                    password += lowercaseString.charAt(Math.floor(Math.random() * lowercaseString.length));
                }
        
                if (uppercase) {
                    password += uppercaseString.charAt(Math.floor(Math.random() * uppercaseString.length));
                }
        
                if (numbers) {
                    password += numberString.charAt(Math.floor(Math.random() * numberString.length));
                }
        
                if (special) {
                    password += specialString.charAt(Math.floor(Math.random() * specialString.length));
                }
            }
        }
       alert("Your generated password is: " + password);

    };
  passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
