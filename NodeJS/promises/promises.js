// var funkcija1 = (ime, prezime, fn) => {
//     console.log(ime, prezime);
//     fn();

// };
// funkcija1('Pero', 'Perovski');

// funkcija1(1, p, function(){
//     console.log('ZDRAVO!');
// });

// funkcija1(1, p, function(){
//     console.log('NESTO DRUGO!');
// });

// var cb1 = () => {
//     console.log('CB1');
// };

// funkcija1(i, p, cb1);




var condition = true;

var getAllUsers = () => {
    return new Promise((resolve, reject) => {

var users = [
    'janko',
    'petko',
    'stanko',
    'stanojko'

];
        if(condition == true){
            return resolve(users);
        }   else {
            return reject('no users found');
        }

    })

};

var calculateUsers = (users) => {
    return new Promise ((resolve, reject) => {
        if(users.length == 0){
            return reject("can't have 0 users");
        } else {
            var total = 0;
            for(let i = 0; i < users.length; i++) {
                total += users[i].length
            }
            )
        }
    })

}

// console.log(getAllUsers());

getAllUsers()
.then((u) => {
    return calculateUsers(u);
})
.catch((err) => {
    console.log(total);
})
.catch((err) => {
    console.error(err);