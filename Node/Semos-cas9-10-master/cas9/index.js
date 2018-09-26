const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://admin:admin1@ds151012.mlab.com:51012/cas9semos";
var db;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const recipe = require("./Recipe");
const user = require("./Userr");

const session = require('express-session');
var sess;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(session(
	{secret: 'cas9',

	}
	));


app.listen(8000);

mongoClient.connect(url, (err, client) =>{
	if(err) {
		console.log(err);
	}
	else{
		db = client.db("cas9semos");
		console.log("connected");

	// 	var u = new user.create('iva1', 'user');
	// 	db.collection('users').insertOne(u, (err) =>{
	// 	if (err) console.log(err);
	// 	else{
	// 		console.log("new user added");
	// 	}
	// })


	}
});

app.get('/', (req, res) =>{
	res.render('index');
})

app.get('/login', (req, res) => {
	res.render('login');
})

app.post('/login', (req, res)=>{
	sess = req.session;
	sess.email = 'iva@yahoo';

	res.redirect('/newRecipe');

})

app.get('/newRecipe', checkPermissions(), (req, res) => {
		res.render('newRecipe');

});

app.post('/newRecipe', (req, res) => {
	let recName = req.body.recName;
	let ingridients = req.body.ingridients;
	let prepTime = req.body.prepTime;

	let r = new recipe.create(recName, ingridients, prepTime);
	console.log(r);

	db.collection('recipes').insertOne(r, (err) =>{
		if (err) console.log(err);
		else{
			console.log("new recipe added");
			res.redirect('allRecipes');
		}
	})
})

app.get('/allRecipes', checkPermissions(), (req, res) =>{
	
	db.collection('recipes').find({}).toArray((err, result) =>{
		
		res.render('allRecipes', {recipes: result});

	})
	
})

app.get('/recipes', (req, res) =>{
	let time = req.query.time;

	// db.collection('recipes').find({prepTime: time}).toArray((err, result) => {
	// 	res.send(result);
	// })

	db.collection('recipes').find({ingridients: {$regex: ".*eggs.*"}}).toArray((err, result)=>{
		//res.send(result);
		res.render('allRecipes', {recipes: result});
	})


})

app.get('/delete', checkForAdmin(), (req, res) =>{
	res.send("Delete approved");
})

function checkForSession(req){
	sess = req.session;

	if(sess.email){
		return true;
	}
	else{
		return false;
	}

}

function checkPermissions(){
	return (req, res, next) =>{

		sess = req.session;
		if(sess.email){
			next();
		}
		else{
			res.redirect('/');
		}

	}
}


function checkForAdmin(){
	return (req, res, next) =>{
		db.collection('users').findOne({username: 'iva1'}, (err, result) =>{
			
			if(result.role == "admin"){
				next();
			}
			else{
				res.send("you don't have needed privilegies")
			}
			

		})

	}
}

