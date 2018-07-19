// function nameOFFunction(parameter1, param2){
// 	//naredbi
// }

// function firstFunction(){
// 	alert("Hello world");
// }
// firstFunction();

// var a = 3;
// var b = 4;
// function multiplier(num1, num2){
// 	return num1*num2;
// }
// console.log(multiplier(a,b));
// console.log(multiplier(2,6));

// function greeting(name, age){
// 	console.log( "jas sum "+name+" i imam "+age+" godini.");
// }

// greeting("Sanja",24);

// console.log(Math.pow(2,3));

// function power (base,exponent){
// 	var result = 1;
// 	for(var i = 0; i<exponent; i++){
// 		result*=base;
// 	}
// 	return result;
// }
// function power1 (base,exponent){
// 	var result = base;
// 	for(var i = 0; i<exponent-1; i++){
// 		result*=base;
// 	}
// 	return result;
// }

// console.log(power(2,3));

// var test = function(){
// 	return "From a variable";
// }

// console.log(test());

var landscape = function(){

	var result = "";

	var flat = function(size){
		for(var i = 0;i <size; i++){
			result+="_";
		}
	}

	var mountain = function(size){
		result+="/";
		for(var i = 0; i < size; i++){
			result+="'";
		}
		result+="\\";
	}


	flat(4);
	mountain(3);
	flat(4);
	mountain(3);
	flat(4);

	return result;
}
console.log(landscape());

function future(){
	return "We don't have flying car";
}

console.log("The future says "+future());