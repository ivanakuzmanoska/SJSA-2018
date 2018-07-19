 // var first_number = parseInt(prompt("Enter number"));
 // var second_num = parseInt(prompt("Enter second number"));

 // function compare(num1 , num2){
 // 	var result = "The result is: ";

 // 	if(num1> num2){
 // 		result+=num1+" is bigger than "+num2;
 // 	}
 // 	else if(num1< num2){
 // 		result+=num2+" is bigger than "+num1;
 // 	}else{
 // 		result+=num1+" and "+ num2 +" are equal";
 // 	}

 // 	return result;
 // }

 // console.log(compare(first_number,second_num));

//  function test(a){
//  	if(a%2==0){
//  		return true;
//  	}
//  	else 
//  		return false;
//  }

// console.log(test(7));

//  if(test(4)){
//  	console.log("Brojot e paren");
//  }
//  else{
//  	console.log("Brojot e neparen");
//  }

 // function temp(degrees, conversionType){
 // 	if(conversionType == "c2f"){
 // 		console.log(degrees+" from celsius to fahrenheit is "+ (degrees*(9/5)+32));
 // 	}else if(conversionType == "f2c"){
 // 		console.log(degrees+ "from f to c is "+((degrees-32)*5/9));
 // 	}
 // 	else{
 // 		console.log("Unknown type of conversion");
 // 	}
 // }

 // temp(120,"f2c");
 // var niza = [];

 // function count (str, char){
 // 	var c = 0;
 // 	for(var i = 0; i<str.length; i++){
 // 		if(str.charAt(i) == char){
 // 			c++;
 // 			niza.push(i);
 // 		}
 // 	}
 // 	return c;
 // }

 // console.log(count("sanja","a"));
 // console.log(niza);

//  setTimeout(function(){
//  	alert("Hello World");
//  }, 5000);

// setInterval(function(){
// 	alert("Sanja");
// },2000)
var bomb = setInterval(function(){
	console.log("BOOM");
},3000);

setTimeout(function(){
	clearInterval(bomb);
	alert("Bomb defused");
},10000);