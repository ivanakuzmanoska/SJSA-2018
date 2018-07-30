var sentence = "Ucime js";
var word = "js";
var word2 = "ucime";

console.log(sentence.includes(word));
console.log(sentence.startsWith(word2));


var myModule = require("./my_module");  // ("./my_module" - patekata do fajlot kade mi e fukncijata)
var mathModule = require("./math-module");
var fs = require("fs");



// myModule.sayHello();
// console.log(mathModule.soberi(5, 10))

// var username = "IVA";
// var password = "1234";
// var email = "iva@yahoo.com";


// var validator = require("./validator");

// var emailValidation = validator.validateEmail(email);

// if(emailValidation) {
//     console.log("Vnesen e tocen email");
// }
// else {
//     console.log("Imate vneseno gresen email");
// }


// var emailMessage = validator.getEmailMessage(email);
// console.log(emailMessage);



// var passwordValidation = validator.validatePassword(password);

// if(passwordValidation) {
//     console.log("Vnesovte tocen password");
// }
// else {
//     console.log("Vnesovte pogresen password");
// }


// var usernameValidation = validator.usernameToLowerCase(username);
//     console.log(usernameValidation);


// rabota so fs moduli 

fs.readFile('myFile.txt', 'utf-8', (data, ) =>{

})