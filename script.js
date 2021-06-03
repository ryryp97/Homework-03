// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//Setting the values into variables from which the algorithm can generate the password from
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";

var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numberString = "0123456789";

var specialString = "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";

function writePassword() {
    
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

            
            //The respective chacter string will be pushed to a characters array depending on the user's response
            var characterArray = [];

            if (lowercase) {
                characterArray.push(lowercaseString)
            };
            if (uppercase) {
                characterArray.push(uppercaseString)
            };
            if (numbers) {
                characterArray.push(numberString)
            };
            if (special) {
                characterArray.push(specialString)
            }
            
            //Concatenates the strings that make up the characterArray into 1 stirng and stores it in characterString
            var characterString = "";

            for (var i = 0; i < characterArray.length; i++) {
                characterString += characterArray[i]
            }
        
            //The generated password is added to this string
            var password = "";

            //This for loop will run until the generated password reaches the user's desired length
            if (passwordLength >= 8 && passwordLength <= 128) {
                for (var i = 1; i <= passwordLength; i++) {
                    password += characterString.charAt(Math.floor(Math.random() * characterString.length));
                };
            };
            alert("Your generated password is: " + password);
            passwordText.value = password;
        };
    };
    generatePassword();

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
