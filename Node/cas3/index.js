// var sentence = "Ucime js";
// var word = "js";
// var word2 = "ucime";

// console.log(sentence.includes(word));
// console.log(sentence.startsWith(word2));


// var myModule = require("./my_module");  // ("./my_module" - patekata do fajlot kade mi e fukncijata)
// var mathModule = require("./math-module");
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

// fs.readFile('myFile.txt', 'utf-8', (err, data) =>{
//     if(err) throw err;

//     else{
//         console.log(data);
//     }
// })


// fs.writeFile("myFile2.txt", "test", (err) =>{
//     if(err) throw err;
  
//     else{
      
//         console.log("uspesno zapisano");
//     }
// });

// fs.appendFile('myFile.txt', 'append text', (err) =>{
//     if(err) throw err;
//     else {
//         console.log("text added succesfully")
//     }
// });

var name = "Stanko";


fs.readFile ("users.json", "utf-8", (err, data) =>{
    if(err) throw err;

    else {
        var parsedJSON = JSON.parse(data); 
                                                    // so ova mu kazuvame deka e json file da ne go gleda kako obicen tekst
       var exists = false;
         console.log("parsed data: ");

        // console.log(parsedJSON);

        for(let i = 0; i< parsedJSON.length; i++){

            if(parsedJSON[i].name == name){  // dali imame objekt so ime koe e ednakvo na name

                console.log(parsedJSON[i].lastname + " " + parsedJSON[i].lastname + " " + parsedJSON[i].email);
                exists = true;  // neka bide promenliata po default false, no ako sepak se pojavi obekt so ta ime smeni ja vo true 
                break;
        }

    }
            if(exists == false){
                console.log ("Ne postoi takov korisnik");
            }

    }
})


