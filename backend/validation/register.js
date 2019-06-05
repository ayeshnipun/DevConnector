//packages
const Validator = require('validator');

//files
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
	let errors = {};
	
	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';

	//check the required length of the name
	if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
		errors.name = 'Name mst be between 2 and 30 characters'
	}

	//check for empty name
	if (Validator.isEmpty(data.name)) {
		errors.name = 'Name is required'
	}

	//check for empty email
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email is required'
	}

	//check for invalid email
	if (Validator.isEmail(data.email)) {
		errors.email = 'Invalid email'
	}

	//check for empty password
	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password is required'
	}

	//check for required length of the password
	if (Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = 'Password must be atleast 6 charcters long'
	}

	//check for empty oassword2
	if (Validator.isEmpty(data.password2)) {
		errors.password2 = 'Confirm password is required'
	}

	//check for password and password2 is matching or not
	if (Validator.equals(data.password, data.password2)) {
		errors.password2 = 'Password mismatch'
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}