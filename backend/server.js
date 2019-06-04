//packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

//routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//variables
const port = process.env.PORT || 4000;
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Database Connected'))
	.catch(err => console.log(`Error : ${err}`))

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//server start function
app.listen(port, () => {
	console.log(`Server started in port ${port}`);
})