// var niza = [1, 5, 2, 10, 18];
// var parni = [];
// var neparni = [];

// for(let i=0; i<niza.length; i++){

//     if(niza[i] % 2 == 0) {
//         parni.push(niza[i]);
//     }

//         else {
//             neparni.push(niza[i]);
//         }

// }

// console.log("Parni: "+ parni);
// console.log("Neparni: "+ neparni);

// funkija koja koristi dali odredena promenlica e broj ili ne  =  isNaN = is not a number
// ( ako i pratis broj isprakja false, a ako ispratis string vrakja true)
// za razlika od ova type of gleda dali e broj ili string 


// var i = 5;
// var name = "5";

// console.log(isNaN(i));
// console.log(isNaN(name));

// DA NI ISPISE VO CONSOLA SE STO NE E BROJ

// var niza = [1, "test", 2, "Denes e 27 Juli", "5"];

// for(let i=0; i<niza.length; i++){
//     if( isNaN(niza[i])){
//         console.log(niza[i]);
//     }
// }

// sintaksa za funkcija = 
// function function-name( ){

// }
// function soberi(a, b){   // a,b sto sme gi povikale tuka gi koristi funkcijata nadole

// }

// anonimna fukncija e funkcija na koja ne i zadavame ime

// sayHello();  // nema vrska kade ke ja povikam funckijata dali pred ili posle nea

// function sayHello(){
//     console.log("Hi from funtion");
// }

// sayHello();  // nema vrska kade ke ja povikam funckijata dali pred ili posle nea


// var x =5, y = 10;

// console.log(zbir(x, y))

// function zbir(a, b){
//     return a + b;
// }

// anonimna funkcija , ke raboti samo ako ja smestime vo nikoja promenliva
//  var x = function (){
//     console.log("Hello from anonymous function");
// }

// console.log(x);


// samopovikuvacki funkciui

// (function(){
//     console.log("Hello from self-invoked function");
// }())

// var myNiza = ["we", 5, 10, "learn", 4, "Javascript"];

// var finalString = "";

// for(let i = 0; i<myNiza.length; i++){

//     if(isNaN( myNiza[i]) ){
//        // finalString.concat(myNiza[i]);

//             finalString += myNiza[i]+" ";
//     }
    
//     else{
//         let zbir = soberiSledbenik(myNiza[i]);
//         console.log(zbir);

//     }
// }

// console.log(finalString);

// function soberiSledbenik(broj){
//     let sledbenik = broj + 1;

//     return broj + sledbenik;
// }


var person = {
	firstName: "Iva",
	lastName: "Pivkova",
	age: 24,
	sex: "F",
	
	getFullName: function(){
		return this.firstName + " " + this.lastName;
	},

	getNameAndAge: function(){
		return this.firstName + " " + this.age;
	}
}


var person1 = {
	firstName: "Petko",
	lastName: "Petkov",
	age: 10,
	sex: "M",
	
	getFullName: function(){
		return this.firstName + " " + this.lastName;
	},

	getNameAndAge: function(){
		return this.firstName + " " + this.age;
	}
}


console.log(person1.getNameAndAge());


var niza = [];

niza.push(person);
niza.push(person1);

person1.firstName;
console.log(person1['firstName']);

for(let i=0; i<niza.length; i++){
	if(niza[i].age >= 18){
		console.log(niza[i].getNameAndAge());
	}
	
}



var property = {
	type: "house/flat",
	m2: "50",
	price_m2: "1000",
	balcony: "5",

	getFullPrice: function(){
		return (parseInt(this.m2) + parseInt(this.balcony) ) * this.price_m2;
	}
}

//Da se kreiraat 10 objekti so razlicni type, m2, price_m2. 
//Da se stavat vo niza. Da se ispecatat onie objekti koi se od type flat, povrsina pomala od 60m2 
//i cena pomala od 1000e.
