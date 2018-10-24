// alert('test');

var field_email = document.querySelector('#email');
var field_password = document.querySelector('#password');
var TOKEN = '';

document.querySelector('#btn_login').addEventListener('click', function() { // od dokumentot , selektiraj go kopceto #btn_login, 
    var data = {                               //i dodadi slusac na eventi ( klik, i koga ke stisnes funkicija)
        email: field_email.value,
        password: field_password.value
    };

    fetch(                  //fetch =  ona sto se prakja so data , prati go na serverot 
        '/auth/login',      // na taa ruta
        {
            method: "POST",     //metodot e post
            headers: {          // headers gorniot del na postman, kakov tip na fajl i kolku karakteri
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)  // a ona sto ke se prati zatoa sto e json smeni go vo string
        }
    ).then((res) => {       // aztoa sto ima fetch naredno e then . i vo then imas promise 
        return res.text()
    }).then((token) => {
        console.log(token);
        TOKEN = token;
    }).catch((err) => {
        console.error(err);
    });
});

document.querySelector('#get_cvs').addEventListener('click', function() {
    fetch(
        '/cv',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + TOKEN
            },
        }
    ).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.error(err);
    });
});

document.querySelector('#get_users').addEventListener('click', function() {
    fetch(
        '/users',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + TOKEN
            },
        }
    ).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.error(err);
    });
});