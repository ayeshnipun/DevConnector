//packages
const Validator = require('validator');

//files
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
	let errors = {};
	
	if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
		errors.name = 'Name mst be between 2 and 30 characters'
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}