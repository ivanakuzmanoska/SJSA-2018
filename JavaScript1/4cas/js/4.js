// funkcii . blok kod, struktura , kreirana da izvrsi odredena naredba
// se dodeka ne gi povikame nema da se izvrsat
// primer koga se koristi funkcija. ako sakam 1na vtora da presmetam, pa 10 na treta, pa 100 na vtora
// primer,ako sakame da presmetuvame sreden prosek na sekoj ucenik , namesto da pisuvame za skeoj kod, mozam
// da napravam funkcija koja ke prima odredeni vrednosti i taa ke mi dava rezultat

// kako se pisuvaat funkciite = klucno zborece  e =  function* !
// isto taka mora da definirame ime* na taa funckija! za da moze da ja povikame
// posle imeto na funkcijata oddavame mali zagradi
// sintaksata za funkcija e function name ( tuka se privuaat promenlicite pr p1p2) {console.log(p1+" "+p2);} - i naredbite se pusuvaat vo fraerski zagradi {}
// vnatre vo funcijata vo ali zagradi se definirat promenlii koj funckioniraat samo vo rankite na funkijata
// nivnata vrednost moze da ja menuvas nadvor od funkcijata, i gi definrias promenlicite nadvor od funckijata
// 
//name (); - vaka se povikuva taa funkcija !!!

// funkcijata   moze da ima i da nema parametri. 


//sintaksa:
// function nameOFFunction(parameter1, param2) {
//    //naredbi
// }

function firstfunction(){
    alert("Hello world");
}
firstfunction();

function multiplier(num1, num2){
    return num1*num2;
}
multiplier(3,4);     //--> ova nema da go ispecati zatoa sto treba
                     //  da definiramr variabla, osven ako ne treba da dobijam rezultat, ako sakam da dojde do razultat mora d aima return statement, ili console log
                     // return,  znaci deka treba da isprati nekoja vrednost
console.log(multiplier(3,4));    //isto kako return, so console.log ni isprakja rezultat
 
// isto ti e ako pogore definiras a = 3 i b=4 , pa ke s epobara od conzolata da ispecati
// console.log(multiplier(a,b))


function greeting(name, age){
    return "jas sum "+name+" i imam"+age+" godini.";
}
console.log(greeting("Sanja",24));

// istata funkcija na vtor nacin, samo sto ako nema return statement, mora da ja povikas kkao podole
function greeting(name, age){
   console.log("jas sum "+name+" i imam"+age+" godini.");
}
greeting("Sanja",24)   


console.log(Math.pow(2,3));   //math e odnapre definirana js biblioteka vo js
//math.pow - presmetua stepen na eden broj, prvimet prviot da se pomnozi samo po sebe pati kolku vtoriot
//math.p - go dava p

// nie da ja napravime pogornata funckija

function power (base,exponent){
    var result = 1;
    for(var i = 0;i<exponent; i++){
        result*=base;
    }
    return result;
}
console.log(power(2,3));     //ovde gi defiirame promenlvite , koi gi koristi funckijata gore

function power (base,exponent){
    var result = base;
    for(var i = 0; i<exponent-1; i++){
        result*=base;
    }
    return result;
}
console.log(power(2,3));

 // funkcijata moze i da se smesti vo promenlica , direknto reultatot da se smesti vo promenlivata test
var test = function(){
    return "From a variable";
}
console.log(test());


//vo funkcii da pravime vgnezdeni funkcii
var landscape = function(){

    var result = "";

    var flat = function(size){
        for(var i = 0;i <size; i++){
            result+="_";
        }
    }

    var mountin = function(size){
        result+="/";
        for(var i = 0; i < size; i++){
            result+="'";
        }
        result+="\\"           //escape caracter =  \+ ( pr \* --> za da go gleda karakterot *)
    }

    flat(4);
    mountin(3);
    flat(4);
    mountin(3);
    flat(4);

    return result;
}
console.log(landscape());

function future (){
    return "We dpm't have flying car";
}

console.log("The future says"+future());
//2nacin 
console.log("The future says",future());