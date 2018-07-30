exports.sayHello = function (){
    console.log ("Hi from my module");
}

exports.soberi = function (a,b){
    return a+b;
}

exports.odzemi = function (a, b){
    if(a > b) return a - b;
    else {
        return b - a;
    }
}