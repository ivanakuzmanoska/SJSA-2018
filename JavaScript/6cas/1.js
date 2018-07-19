//   var size = prompt("What is the size od the pyramid?")
//   function drawPyramid(size){
//    var result = "";        // zadavame varijabla sie za da vneseme beoj- size
//   for(var i = 0; i<size;i++){ //kreirame funckija drop pyramid 
//        result+="#";            // ""- prvo resultot e prazen 
//        console.log(result);
//    }
//}
//drawPyramid(size);  //     i=0 ""
                      //     i=0 "#"
                      //     i=1 "##"
                      //     i=2 "###"    

// prototipovi - funkcii koi moe da gi koritime kao objekti i moze da im dodavame svojstva
// Prototypes

//   function Rabbit(type){      //funkcija koja sluzi kako objekt, no mora da se napravi instanca na funkijata
//       this.tip = type;
//  }

//   Rabbit.prototype.speak = function(phrase){
 //    console.log("The" +this.tip +"Rabbit says" + phrase);
//   }

//   var zeko = new Rabbit("A");
//   zeko.speak("hello world");

//  function Person(firstName, lastName, age, proffesion){
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.age = age;
//      this.proffesion = proffesion;
//  }   

//      Person.prototype.greeting = function(phrase){
//      alert(phrase +"I'm "+this.firstName+" "+this.lastName+".I am "+this.age +"and work as"+this.proffesion);
//      }

//   var person = new Person("Sanja", "Taskovska", 24, "Front-end developer");
//   person.greeting("hello");
//   console.log(person.firstName); 

 //  function Teacher(firstName, lastName, gender, university, subject){
 //   this.firstName = firstName;
//    this.lastName = lastName;
 //   this.gender = gender;
 //   this.university = university;
//    this.subject = subject;
 //   }

//    Teacher.prototype.greeting = function(){
//     var prefix;
// 
//      if(this.gender == "male" || this.gender == "Male" || this.gender =="m"){
//          prefix = "Mr.";
//     }
//      else{
//          prefix = "Ms."
//      }
//      alert("Hello "+prefix+" "+this.firstName+" "+this.lastName+". Welcome to "+this.university+". You will teach"+this.subject);
//   }

//   var sanja = new Teacher("Sanja","Taskovska","f","Semos","JavaScript");
//   sanja.greeting();


//Class   - primer za klasa e person .toj objekt ima povekje svojstva i treba da izvrsuva nekoj funkcii

//  class Person {                      // - so ova kazuvame deka postoi objekt koj ke ima odredeni svojstva
//  constructor(firstName,lastName){
//   this.firstName = firstName;
//    this.lastName = lastName;
//    }
//   greeting(){  // vaka se definraat funkii vo ramki na klasi
//
//    }
//   }


//  class User {
//    constructor(name){
//        this.name = name;
//    }
 //   sayHi(){                            //ova  e funkcijata, nema potreba od function
 //       alert("Hello"+ this.name);
 //   }
// }

//  var a = new User("sanja");
//  console.log(a.name);
//  a.sayHi();

//  class Rectangle{

//     constructor(w, h){
//        this.width = w;
 //       this.height = h;
 //   }
    
 //   calcArea(){
 //       return this.width*this.height;
 //   }

//    area(){
//        return this.calcArea();
//    }
// }

//  var rectangle = new Rectangle(10,10);
//  console.log(rectangle.area());


//  class SimpleDate{
//      constructor(day, month, year){
//          this.day = day;
 ///       this.month = month;
//         this.year = year;
//    }
//
//    addDays(nDays){
 //       return this.day += nDays;
 ///   }
//  }
//  var today = new SimpleDate(19,07,2018);
//   console.log(today);
///  console.log(today.addDays(5));
///  console.log(today);

class Teacher{
    constructor(fistName, lastName, subject){
        this.firstName = fistName;
        this.lastName = lastName;
        this.subject = subject;
    }
}
    class UniTeacher extends Teacher{
        constructor(fistName, lastName, subject, university, gender){
            super(fistName, lastName, subject);
            this.university = university;
            this.gender = gender;
        }

        greeting(){
            alert("Hello" + this.firstName+" "+this.lastName+". I will be teaching at "+this.university);

        }
  }
    var teacher = new UniTeacher("Sanja", "Taskovska", "JavaScript", "Semos",'f');
    teacher.greeting();