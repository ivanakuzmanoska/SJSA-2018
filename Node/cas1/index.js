// console.log("Hello from Node.js");

// //def promenlivi od site tipovi

// var integer1 = 5;
// var integer2 = 10;

// console.log(5+10);
// console.log("5+10"); // ako stavime navodnici vikame deka nesakam da se izvrsi nisto tuku da se pojavi toa sto ke go pisam
// console.log(integer1 + " + " + integer2); // 2 opcija za gornoto

// var sum = integer1+integer2;

// console.log(integer1 + " + " + integer2 + " = " + sum);  // treta opcija so prethodno definiranje na varijabla

// if(uslov) { } else {} - sintaksa za if

// var name = "IVANA";
// var pass = "000000";
// var nameUpdated = name.toLowerCase();  // vo nova promenliva mi vrakja  rezultat od promenite
// console.log (name.toLowerCase());  //so malite zagradi do imeto kazuvame deka se raboti a funkcija
//                                     // PROMENLIVATA KOJA SAKAME DA JA PROVERIME GI PRETVARA SITE VO MALI ,
//                                             //VO VAR MI SE SO GOLEMI

// if(nameUpdated == "ivana"){         // so ova if proveruvame dali uspesno gi smenivme bukvite
//     console.log("Hello " + name);
// }
// else {
//     console.log ("Unsucessful");  
// }


// if(name == "Ivana") {               // pazi na case sensitive 
//     console.log("Hello " + name);
// }
// else{
//     console.log("Unsucessful");
// }

// if(name == "Ivana" || name == "ivana" || name == "IVANA") {               //dolga funkija da proveri dali rtocno username ke vneses 
//     console.log("Hello " + name);
// }
// else{
//     console.log("Unsucessful");
// }


// SWITCH

// var name = "IVANA";
// var pass = "000000";
// var nameUpdated = name.toLowerCase();  
// console.log (name.toLowerCase()); 


// switch(name){
//     case"Ivana":
//     console.log("Hello "+ name);
//     break;
//     case"IVANA":
//     console.log("Hello "+ name);
//     break;
// default:
// console.log("Unsucessful");
// }

// CONCATANACIJA 

// var firstName = "Ivana";
// var lastName = "Kuzmanoska";

// var fullName = firstName.concat(lastName);
// console.log(fullName);   // se izvrsuva istata rabota kako so koristenje na plus


// var boolean = true;

// console.log(boolean);



// nizi

// var integer = [2, 5, 8, 10, 56, 3, 9, 12];   

// ako e deliv so /3 da se ispecati buzz ako e deliv so /5 fiz

// for(let i = 0; i< integer.length; i++){  // let i = 0 znaci prviot element e 0 ,  i<integer.length ako i e pomalo od brojot kolku elementi ima nizata, zgolemi i za 1 
//     console.log(integer[i] +": ");

//     if(integer[i] % 3 == 0 ){   // proveri dali e deliv so 3
//         console.log("buzz");
//     }
//     else if(integer[i] % 4 == 0){    // ako go trgneme else, ke gi pravi i dvete proverki , na primer ako eden broj e deliv i so dvata ke gi ispise i buz i fiz
//         console.log("fiz");
//     }
     
//     console.log ( "\n");    // da ostavvi prazen red !!!!!

// }

// integer[100] = 50;   //dodadi element na 100to mesto!!!!
// console.log(integer);




//  whie sintaksa

// while( uslov ) {


// }


// ist brojac vo povekje primeri 


 var brojac = 0;  

 // for(let i = 10; i > brojac; i--){  //primer so for
//     console.log(i);
// }

// while(brojac < 10){              //primer so while
//     brojac++;
//     console.log(brojac);
// }

// do {                                //primer so do
//     brojac++;
//     console.log(brojac);
// }
// while( brojac < 10)


// zadaca za doma 
// iza koja ke se vika username
// vo taa nizastavete tri imina
// posle da kreirame nov aniza koja ke se vika password

// var names = ["iva", "ana", "marija"]

// var pass = ["a", "bb", "000"]

// prviot cle e soodveten so pass na vtorata nizastavete

// nova promenliva

//  var myName = "ana"
//  var myPas = "bbb"

//  prvo da se proveruva dali postoi clen sto se vika Ana potoa ako ima AnalyserNodeda se provri dali passwordot sto 
//  ke go vnese ana e tocen so toj vo niza


//  so if name od i == my name i mypas e so passwordot

var names = ["iva", "ana", "marija"];

var pass = ["a", "bb", "000"];

var myName = "ana";
var myPass = "bbb";

for (let i=0; i<name.length; i++){
    
    if(names[i] == myName && pass[i] == myPass){
        console.log("logged in");
    }
    else{
        console.log("error");
    }
}