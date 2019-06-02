//packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//variables
const port = process.env.PORT || 4000;
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Database Connected'))
	.catch(err => console.log(`Error : ${err}`))


const app = express();

//test route
app.get('/', (req, res) => {
	res.send('Hellowww..!!')
})

//server start function
app.listen(port, () => {
	console.log(`Server started in port ${port}`);
})