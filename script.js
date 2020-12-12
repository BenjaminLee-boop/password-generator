// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generate password
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
    console.log(generatedPassword.length);
    while (generatedPassword.length < resultDict.passwordLength) {
      generatedPassword.push(
        charSet.charAt(Math.floor(Math.random() * charSet.length)),
      );
    }
    console.log(charSet);
    return generatedPassword.join("");
  }
}

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
  }
  return userResponseDict;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
