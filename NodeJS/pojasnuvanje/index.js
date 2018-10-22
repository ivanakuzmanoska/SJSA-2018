// function zdravo() {
//     console.log('Zdravo');    // najedosnaven nacin za pisuvanje funkcija
// }

// zdravo();  //vaka ja povikuvas funkicjata od gore

// // funckii se koristat zatoa sto davaat odredena logika, da ne povtoruvas edna rabota mnogu pati

// var a = 10;

// var pozdrav = function() {      // zdravo i pozdavdavaat bukvalno isti rezultati
//     console.log('pozdrav');   // jas ke definiram promenliva i vrednosta na taa promenliva e funkcija
// };                              // vaka kkoga se deklariraat funk se stava tocka zapirka zatoa sto  toa e vrednost

// pozdrav();

// var hello = () => {             //. kratenica od funckijata pogore
//     console.log('hello');       // go nema function i se dodava =>
// }

// //********************************************** */
// //razlika pomengu.  opsegot vo koj deluva taa funkcija - scoup 

// document.querySelector('#kopce1').addEventListener('click',function(){  //ovaa funkcija deluva samo na kopceto
//     console.log(this);
// });


// document.querySelector('#kopce1').addEventListener('click',() => {      //ovaa funcija deluva na cel window
//     console.log(this);
// });

// //*************************************************** */

// //callBack funkcija koja vo sebe povikuva druga funkcija


// //var FunctctionCallBack = () {
// //    console.log('CallBack')};




// // var functionCallback1 = (cb) => {           //ako ja izvrsime ovaa funckija , neznaeme sto ke se sluci seuste nemame nisto nisto zadadeno vnatre vo funckijata koja ja davamvnatrwe kako parametar
// //    cb();
// //}


// //1 varijanta
// var fn1 = function(){                         
//     console.log('***');         //1 varijanta i 2 varijanta davaat isti rezultst
// }

// functionCallback1(fn1);


// //2 varijanta
// functionCallback1(function(){
//     console.log('***');
// });





// var operacija =(a, b, fn) => {
//     fn(a, b);   //isto kako da sme povikale sobiranje(a,b); ili za dr funckija odzemanje na (a,b);
// }

// var sobiranje =(a, b) => {
//    var c = parseInt(a) + parseInt(b);
//     console.log(c);

//     var odzemanje = (a, b) => {
//         var c =parseInt(a) - parseInt(b);
//         console.log(c);
//     }

//     operacija(10, 36, sobiranje);
//     operacija(10, 36, odzemanje);
// }

























// var express = {
//     req: 'request object',
//     res: 'response object',
//     get: function(url, hfn) {
//             console.log(express.request);
//             console.log(express.response);
//             console.log('ROUTE: $(url)');
//             hfn(this.req, this.res);
//     },
// }

// express.get('/cv', (req,res) => {
//     console.log(req);
//     console.log(res);
// })



// //3 nacini na pisuvanje vo java script


// var broj = 123;

// var str1 = "String so dupli" + broj +"navodnici"; //edinstven nacin za da dodademe nesto e da izlezeme so navodnici od stringot
// var str2 = 'String so edinecni navodnici';
// var str3 = `String so nakoseni $(broj) navodnici`;       












var promise1 = () => {      //promisot vnatre prima promise
    return new Promise((resolve, reject) => {          //vnatre promisot prima callback pd sresolve i reject i toa e osnovnapromise funk
        if(1 == val){
            resolve(val);
        } else {
            reject("ERROR!!");
    
        }
    });                         
};

promise1(3)
.then((a) => {      //thenot e sekogas za resolve a catchot e ako se povika rejectot
    console.log(a);
}).catch((err) => {
    console.log(err);
})




varpromise2 = (hrana) => {
    return new Proomise((resolve, reject) => {
        if(hrana.length % 2 == 0) {
            resolve("hamburger e ubava hrana");
        } else {
            reject("ERROR");
        }
    });
};

promise2('hamburger')
.then((h) => {
    console.log('%{h} e ubava hrana');
}).catch((h) => {
    console.log('%{h} ne e ubava hrana');
})