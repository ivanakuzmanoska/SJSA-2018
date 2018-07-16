 // var my_first_object = {firstname : "Sanja", lastname : "Taskovska"};
// var person = "Sanja";
// var another_person = person;
// person ="Dijana";
// another_person = person;

// console.log(another_person);
// console.log(person);

// var licnost = {name: "Semos"};
// var druga_licost = licnost;
// licnost.name = "Petko";

// console.log(druga_licost.name);
// console.log(licnost.name);
// console.log(my_first_object);


// var ageLimit = {5 :"Too Young", 90 : "Too old"};
//console.log(ageLimit["5"])


// var a = {test: 6};
// console.log(a.test);

// var mug = new Object();
// mug.color = "white";
// console.log(mug.color);


// var mug = {color: "white", weight: "250gr", material: "porcelan", size: "s"};
// console.log (mug);
// console.log("This mug is " + mug.color +", and weights "+ mug.weight+
// " made from material"+mug.material+" with a size" + mug.size);


// var movie = {
//    name : "Pulp fition",
//    year : 1994,
//    genre : "Crime",
//    awards : ["Palme D'or"]
// }

// movie.awards.push("Academy award");  // da dojdades svojstvo vo nizata.
// movie.something = "something";  // da dodades nesto vo objectot
// delete movie.year;  //ako sakame da izbriseme nesto od objektot
// console.log(movie);

// var car = {
//     model : "Ford",
//     year : 2017,
//    tires : ["Left top tire", "Left bottom tire", "Right top tire", "Right bottom tire"]
// }

// var  extracted_tire = car.tires.splice(2,1);
// console.log(extracted_tire);
// console.log(car.tires);



// for(var i=0; i<=50; i+=5){  // ako i e pomalo od 50 zgolekuvaj go za 5 
//    console.log("Current count is "+ i)
// }

// for(var i=0; i<=10; i+=1){  // dali ke pises i++ ili i+=1 ( znaci ako 1  e pomalo od 10 , zgolemuvaj go za 1)
//    console.log("Current count is" +i)
// }

// for(var i = 100;i >=0; i--){  /// ke gi ispecati od 100 do 0 vo opagjacki redosled
 //   console.log(i)
// }

//var colors = ["red","green","blue"];
//for(var i = 0; i < colors.length; i++){
//    console.log(colors[i]);
//}
//document.getElementById("demo").innerHTML = colors;   

//funkcija ke proveruva koj broj e paren koj neparen

//for(var i = 0 ; i <=50; i++){
//    if(i % 2 ==0){
//        console.log("Even number - "+ i);
 ///   }else {
 //       console.log("Odd number - "+ i);
  //  }
// }

//niza koja e sostavena od objekti


// var names = [
//       {name : "Sanja", lastname : "Taskovska"},
//       {name:"semos", lastname : "A"},
//      {name:"Slave", lastname : "B"},
 //     {name:"Gjorgi", lastname : "C"}
 //           ];
// for(var i = 0; i< names.length; i++){
//    console.log(name[i].name +" "+ names[i].lastname);
// }


// for( var a in names){   //ovoj primer e isto so ova pogore, go daa istoot rezultat.                 
//     console.log(names[a].name);    //  a znaci za sekoj index vo nizata smesi go a
// }



/// var multiplier = 9;
// for(var i =0; i<= 10; i++){
//     var result = multiplier*i;
 //   console.log(multiplier+"*"+i+"="+result);
// }


//var person = {
//    firstname : "Sanja",
 ///   lastname : "Taskovska",
 //   test: []
// }

// for(var x in person){
  //  console.log(x);
 //   console.log(person[x]);
// }


var result = "";
var i = 0;
while(i<=5){
    result+="<br> The number is "+i;
    i++;
}
document.write(result);

