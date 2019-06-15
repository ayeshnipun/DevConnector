//packages
const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require("mongoose")

//models
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route 	GET /api/profile
// @desc 	Get current user profile
// @access 	Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const errors = {};

	Profile.findOne({ user: req.user.id })
		.then(profile => {
			if (!profile) {
				errors.noprofile = "There is no profile found for this user"
				return res.status(404).json(errors);
			}
			res.json(profile)
		})
		.catch(err => res.json(err));
})

module.exports = router;