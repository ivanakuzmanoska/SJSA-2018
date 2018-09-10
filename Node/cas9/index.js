const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://admin:admin1@ds251332.mlab.com:51332/cas9";
var db;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const recipe = require("./recipe");

app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');

app.listen(8000);

mongoClient.connect(url, (err, client) =>{
    if(err) { console.log("err");
    }
    else{
        db = client.db('cas9');
        console.log("connected");
    }

});

app.get('/newRecipe', (req, res) => {
    res.render('newrecipe');
})

app.post('/newRecipe', (req, res) => {
    let recName = req.body.recName;
    let ingridients = req.body.ingridients;
    let prepTime = req.body.prepTime;

    let r = new recipe.create(recName, ingridients, prepTime);
    console.log(r);

    db.collection('recipes').insertOne(r, (err) =>{
        if(err) console.log(err);
        else{
            console.log("new recipe added");
            res.render('allRecipes');
        }
    })
})
 app.get('allRecipes', (req, res) => {

    db.collection('recipes').find({}).toArray((err, result) =>{
        res.render('allRecipes', {recipes: result})
    })
 })


        // var myObject = {
        //     name: 'Ivana',
        //     age: 26
        // };

        // db.collection("test").insertOne(myObject, (err)=>{
        //     if(err) console.log(err);
        //     else{
        //         console.log("One object inserted in db");

        //     }
        // })

//         db.collection('test').findOne({name: 'Ivana'}, (err, result) => {
//             if(err) console.log(err);
//             else {
//                 console.log(result);
//             }
//         })

//         // Update document 
        
//         var changedObject = {
//             name:"Ivana",
//             age: 30
//         }
//         var myQuery = {name: 'Ivana'};
//         var newValues = {$set: changedObject};

//         db.collection('test').updateOne(myQuery, newValues, (err) => {
//             if(err) console.log(err);
//             else {
//                 console.log("One document updated");
//             }
//         });

//     }

// });