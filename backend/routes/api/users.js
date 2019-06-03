//packages
const express = require('express');
const router = express.Router();

//Models
const User = require('../../models/User');

// @route 	GET /api/users
// @desc 	Test users route
// @access 	Public
router.get('/', (req, res) => {
	res.json({
		msg: 'Users Works'
	})
})

// @route 	GET /api/users/register
// @desc 	Register user
// @access 	Public
router.post('/register', (req, res) => {
	User.findOne({ email: req.body.email })
		.then(user => {
			if (user) {
				res.status(400).json({ email: 'Email already exists'})
			} else {
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					avatar,
					password: req.body.password
				});
			}
		})
})

module.exports = router;