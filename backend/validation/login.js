//packages
const Validator = require('validator');

//files
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
	let errors = {};

	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';

	//check for invalid email
	if (!Validator.isEmail(data.email)) {
		errors.email = 'Invalid email'
	}

	//check for empty email
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email is required'
	}

	//check for empty password
	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password is required'
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}