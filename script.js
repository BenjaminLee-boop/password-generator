// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password === undefined) {
    passwordText.value =
      "There seems to be a problem generating your password please try again.";
  } else {
    passwordText.value = password;
  }
}
// Displays prompt to the user asking for certain details that would be included in the password
//Stores them in a dictonary called userResponseDict
//Does some basic checking to make sure that the input complies to the use cases from the customer
function getUserInput() {
  var userResponseDict = {
    passwordLength: 0,
    lowercaseChars: false,
    uppercaseChars: false,
    numericChars: false,
    specialChars: false,
  };

  var userPrompt = parseInt(
    prompt(
      "Hey, You're looking for a new password what length would you like ;) ",
    ),
  );
  userResponseDict.passwordLength = userPrompt;

  if (
    userResponseDict.passwordLength >= 8 &&
    userResponseDict.passwordLength <= 128
  ) {
    userResponseDict.lowercaseChars = confirm(
      "Would you like lowercase characters?",
    );
    userResponseDict.uppercaseChars = confirm(
      "Would you like Uppercase characters?",
    );
    userResponseDict.numericChars = confirm(
      "Would you like numeric characters?",
    );
    userResponseDict.specialChars = confirm(
      "Would you like special characters?",
    );
    return userResponseDict;
  } else {
    alert("Invalid value, \nPlease ensure you choose a value between 8 - 128");
  }
}

//Generate password
// If statement to check what char sets have be requested
//will store them in a string called charSet
//create an array called generated password called generatedPassword
//using a while loop we check the length of the array against the user desired length
//when the length of the password array reaches the desired length we simply join the array together then return it to the
//writePassword function witch we call and store it in the var called password.
function generatePassword() {
  var resultDict = getUserInput();
  var charSet = "";

  if (
    resultDict.lowercaseChars ||
    resultDict.uppercaseChars ||
    resultDict.numericChars ||
    resultDict.specialChars
  ) {
    if (resultDict.lowercaseChars) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (resultDict.uppercaseChars) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (resultDict.numericChars) {
      charSet += "0123456789";
    }
    if (resultDict.specialChars) {
      charSet += "!@#$%^&*()_+~`|}{[]:;?,><.-=";
    }

    var generatedPassword = [];
    while (generatedPassword.length < resultDict.passwordLength) {
      generatedPassword.push(
        charSet.charAt(Math.floor(Math.random() * charSet.length)),
      );
    }
    return generatedPassword.join("");
  } else {
    alert("Please pick witch character set's you would like to use.  ");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
