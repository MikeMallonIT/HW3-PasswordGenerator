// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters 
var speicalCharacters = ['`','!','@','#','$','%','^','&','*','(',')','_','+','=','-','{','[','}',']',':',';','"','|','<','>','.','?','/',"'",'\\'];

// Array of numbers
var numbers = ['0','1','2','3','4','5','6','7','8','9'];

//Upper and lower case letter arrays
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Password array
var password = [];

//Random number generator the will generate a radom array address in the avalible characters array to set a given passward array address to
//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Write password to the #password input
function writePassword() {
    
  //Assign function variables
  var passwordLength = 0;
  var charactersToChooseFrom = [];

  //Ask user for password length while ensureing user enters a password length between 8 and 128 characters
  while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)==true){
    var passwordLength = window.prompt("How many characters would you like your password to contain?\n\nMust be between 8 - 128");
  }

  //Ask user for password conditions wile ensuring that at lease one condition is used
  while(charactersToChooseFrom.length === 0){
  var useUpperCase = window.confirm("Do you want your password to contain upper case letters?\n\nOK for Yes, Cancel for No\n\n*Please be sure to select Ok for at lease one*");
  var useLowerCase = window.confirm("Do you want your password to contain lower case letters?\n\nOK for Yes, Cancel for No");
  var useNumbers = window.confirm("Do you want your password to contain numbers?\n\nOK for Yes, Cancel for No");
  var useSpecialCharacters = window.confirm("Do you want your password to contain special characters?\n\nOK for Yes, Cancel for No")
  
    //If statements that generate the avalible characters that the password generator can pick from based on user input
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
  }

  //Generate password array by assigning a random character from charactersToChooseFrom array. Loop until password array is as long as the user requested it be
  for(let i = 0; i < passwordLength; i++){
    password[i] = charactersToChooseFrom[getRandomIntInclusive(0,charactersToChooseFrom.length)];
  }
  
  //Join password array elements into string without commas
  password = password.join('');

  //Display password PasswordText in HTML #password element
  var passwordText = document.querySelector("#password");

  //Assigns password to password text variable
  passwordText.value = password;
}

// Triggeres writePassword function
generateBtn.addEventListener("click", writePassword);