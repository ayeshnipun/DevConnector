//packages
const Validator = require('validator');

//files
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
	let errors = {};

	data.title = !isEmpty(data.title) ? data.title : '';
	data.company = !isEmpty(data.company) ? data.company : '';
	data.from = !isEmpty(data.from) ? data.from : '';

	//check for empty title
	if (Validator.isEmpty(data.title)) {
		errors.title = 'Job title is required'
	}

	//check for empty company
	if (Validator.isEmpty(data.company)) {
		errors.company = 'Company is required'
	}

	//check for empty from date
	if (Validator.isEmpty(data.from)) {
		errors.from = 'From date field is required'
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}