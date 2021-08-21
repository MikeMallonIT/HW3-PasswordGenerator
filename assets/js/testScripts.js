


function testCode(){

  var passwordLength = 0;

  console.log("The password length is: ",passwordLength);

  while(passwordLength < 8 || passwordLength > 128){
  var passwordLength = window.prompt("How many characters would you like your password to be? (Minimum: 8)");
  }

  return;
}
  
  testCode();