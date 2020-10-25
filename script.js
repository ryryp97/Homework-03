// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//Setting the values into variables from which the algorithm can generate the password from
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";

var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numberString = "0123456789";

var specialString = "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    function generatePassword() {

        //This allows the user to specify how long they want their password to be and it bars the user from entering a value outside the intended range

        var passwordLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));

        if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
            alert("Choose a number between 8 and 128!");
        } else {

            //Declaring variables here in the form of a prompt allows the user's choice to change the way the code behaves
            var lowercase = confirm("Would you like to include lowercase letters?");
            var uppercase = confirm("Would you like to include uppercase letters?");
            var numbers = confirm("Would you like to include numbers?");
            var special = confirm("Would you like to include special characters?");

            if (lowercase != true && uppercase != true && numbers != true && special != true) {
                alert("Please select at least one character type.");
            }

            //The generated password is added to this string

            var password = " ";

            //This for loop will run until the generated password reaches the user's desired length

            if (passwordLength >= 8 && passwordLength <= 128) {
                for (i = 0; i <= passwordLength; i++) {

                    //These statements add the characters specified by the user to the generated password

                    if (lowercase) {
                        password += lowercaseString.charAt(Math.floor(Math.random() * lowercaseString.length));
                    };

                    if (uppercase) {
                        password += uppercaseString.charAt(Math.floor(Math.random() * uppercaseString.length));
                    };

                    if (numbers) {
                        password += numberString.charAt(Math.floor(Math.random() * numberString.length));
                    };

                    if (special) {
                        password += specialString.charAt(Math.floor(Math.random() * specialString.length));
                    }
                };
            };
            alert("Your generated password is: " + password);

        };
    };
    passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
