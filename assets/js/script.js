// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters 
var speicalCharacters = ["!,#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var upperCaseLetters = ["A","B","CDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCaseLetters = ["abcdefghijklmnopqrstuvwxyz"]

// User input variables
var passwordLength = 0;
var useUpperCase = true;
var useLowerCase = true;
var useNumbers = true;
var useSpecialCharacters = true;

var password = [];

// Write password to the #password input
function writePassword() {
    
  var passwordLength = window.prompt("How long would you like your password to be? (8 - 128)");
  var useUpperCase = window.confirm("Do you want your password to contain upper case letters?");
  var useLowerCase = window.confirm("Do you want your password to contain lower case letters?");
  var useNumbers = window.confirm("Do you want your password to contain numbers?");
  var useSpecialCharacters = window.confirm("Do you want your password to contain special characters?")
  
  var characterCounter = 0;

  for(let i = 0; i < passwordLength; i++){
    console.log(i);

    let charactersToChooseFrom = [];

    if(useUpperCase == true){
  
      charactersToChooseFrom.push(upperCaseLetters);
      characterCounter = characterCounter + upperCaseLetters.length;
    }
    if(useLowerCase == true){
      charactersToChooseFrom.push(lowerCaseLetters);
      characterCounter = characterCounter + lowerCaseLetters.length;
    }
    if(useNumbers == true){
      charactersToChooseFrom.push(numbers);
      characterCounter = characterCounter + numbers.length;
    }
    if(useSpecialCharacters == true){
      charactersToChooseFrom.push(speicalCharacters);
      characterCounter = characterCounter + speicalCharacters.length;
    }

    

    console.log(charactersToChooseFrom);
    console.log(charactersToChooseFrom.length)
    console.log(characterCounter)

  }


  //var password = generatePassword();
  var passwordText = document.querySelector("#password");


  //Writes the new password to the HTML front-end
  //passwordText.value = password;
  passwordText.value = passwordLength;

}

// Triggeres writePassword function
generateBtn.addEventListener("click", writePassword);



//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page