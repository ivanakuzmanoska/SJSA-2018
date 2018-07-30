exports.validatePassword = function (pass) {
    if (pass.length >= 6){
         return true; 

}
    else {
        return false;
    }
}

// exports.validateEmail = function(email){
//     if(email.includes("@") && email.endsWith('.com')) {
//         return true ;
//     }
//     else {

//     return false ;  
//    }
// }

// a email da ni e vrati samo poraka a ne true ili false

exports.getEmailMessage = function (email){
   
    if(validateEmail(email)){
        return "Tocen email";
        }
        else "Gresen email";
    }

function validateEmail (email){
    if(email.includes("@") && email.endsWith('.com')) {
        return true ;
    }
    else {

    return false ;  
   }
}




exports.usernameToLowerCase = function(username) {
  return username.toLowerCase();

}

