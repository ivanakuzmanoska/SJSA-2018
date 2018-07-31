var http = require("http");


// http.createServer(function (request, response){


//     console.log("port 3000");

//     response.writeHead(200, "OK")

//     response.write("Zdravo");
//     response.end();

// }).listen(8080) //8080, 1337, 400, 8000 (najjcesto slobodni porti)


// http.createServer(function (request, response){
   
//     console.log(request.url);

//     if(request.url == "/users"){
//         console.log("ok");
//     response.writeHead(200, "OK");
   
//     response.write("Users page");
//     response.end();
// } 

// else if(request.url == "/messages"){
// response.writeHead(200, "OK");
// response.write("Welcome to user's messages");

// response.end();

// }
// else {
//     response.writeHead(404, "Not found");

//     response.write ("Page not found");
//     response.end();
// }
 

// }).listen(8080); //8080, 1337, 400, 8000 (najjcesto slobodni porti)




var url = require("url");

http.createServer(function (request, response){
    var q1 = url.parse(request.url, true).query;

//    response.writeHead(200, "OK");
    console.log(q1);
    var res = q1.name + " ";
   response.write(res);
   response.end();


}).listen(8080); //8080, 1337, 400, 8000 (najjcesto slobodni porti)