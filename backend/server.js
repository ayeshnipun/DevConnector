//packages
const express = require('express');
const bodyParser = require('body-parser');

//port
const port = process.env.PORT || 4000;

const app = express();

//test route
app.get('/', (req, res) => {
	res.send('Hellowww..!!')
})

//server start function
app.listen(port, () => {
	console.log(`Server started in port ${port}`);
})