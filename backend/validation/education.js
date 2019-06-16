//packages
const Validator = require('validator');

//files
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
	let errors = {};

	data.school = !isEmpty(data.school) ? data.school : '';
	data.degree = !isEmpty(data.degree) ? data.degree : '';
	data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : '';
	data.from = !isEmpty(data.from) ? data.from : '';

	//check for empty title
	if (Validator.isEmpty(data.school)) {
		errors.school = 'School is required'
	}

	//check for empty company
	if (Validator.isEmpty(data.degree)) {
		errors.degree = 'Degree is required'
	}

	//check for empty from fieldOfStudy
	if (Validator.isEmpty(data.fieldOfStudy)) {
		errors.fieldOfStudy = 'fieldOfStudy  is required'
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