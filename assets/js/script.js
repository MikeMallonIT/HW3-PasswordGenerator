// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters 
//var speicalCharacters = ["!,#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "];
var speicalCharacters = ['`','!','@','#','$','%','^','&','*','(',')','_','+','=','-','{','[','}',']',':',';','"','|','<','>','.','?','/',];
// -- \ ' --
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


var password = [];


function getPasswordLength(){


  return;
}


// Write password to the #password input
function writePassword() {
    
  var passwordLength = 0;

  while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)==true){
    var passwordLength = window.prompt("How long would you like your password to be? (8 - 128)");
  }

  var useUpperCase = window.confirm("Do you want your password to contain upper case letters?");
  var useLowerCase = window.confirm("Do you want your password to contain lower case letters?");
  var useNumbers = window.confirm("Do you want your password to contain numbers?");
  var useSpecialCharacters = window.confirm("Do you want your password to contain special characters?")
  

var charactersToChooseFrom = [];

    if(useUpperCase === true){
        charactersToChooseFrom = upperCaseLetters;
    }
    if(useLowerCase === true){
      charactersToChooseFrom = charactersToChooseFrom.concat(lowerCaseLetters);
    }
    if(useNumbers === true){
      charactersToChooseFrom = charactersToChooseFrom.concat(numbers);
    }
    if(useSpecialCharacters === true){
      charactersToChooseFrom = charactersToChooseFrom.concat(speicalCharacters);
    }


    console.log("characters to choose from ", charactersToChooseFrom); //all characters
    console.log("characters to choose from.length ",charactersToChooseFrom.length) //4


    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }



    for(let i = 0; i < passwordLength; i++){
    
      password[i] = charactersToChooseFrom[getRandomIntInclusive(0,charactersToChooseFrom.length)];

    }

    console.log(password.join(''));
  
  password = password.join('');

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //password = document.querySelector("#password");

  //Writes the new password to the HTML front-end
  passwordText.value = password;
  //passwordText.value = passwordLength;

}

// Triggeres writePassword function
generateBtn.addEventListener("click", writePassword);


