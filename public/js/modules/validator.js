/**
 * Class represents set of tools to validate forms
 */
export default class Validator {

	/**
     * Validation of Email input
     * @param emailElem
     */
	static checkMail(emailElem) {

		const email = emailElem.getData();
		if (email === null) {
			emailElem.setError('empty field');
		} else {
			const pattern = /([\w-]+)@([\w-]+)(\.[\w]+)/;
			if (pattern.test(email) === false) {
				emailElem.setError('incorrect email');
			} else {
				emailElem.setError(false);
			}
		}
	}

	/**
     * Validation of Name input
     * @param nameElem
     */
	static checkName(nameElem) {
		const name = nameElem.getData();
		if (name === null) {
			nameElem.setError('empty field');
		} else {
			const pattern = /^[a-zA-Z0-9_-]{3,16}$/;
			if (pattern.test(name)) {
				nameElem.setError(null);
			} else {
				nameElem.setError('incorrect name');
			}
		}
	}

	/**
     * Validation of Password input
     * @param passElem
     */
	static checkPass(passElem) {
		const pass = passElem.getData();
		if (pass === null) {
			passElem.setError('empty field');
		} else {
			if (pass.length < 8) {
				passElem.setError('too short password');
			} else {
				passElem.setError(null);
			}
		}
	}

	/**
     * Validation of PasswordConfirm input
     * @param passElem
     * @param confElem
     */
	static checkConfirm(passElem, confElem) {
		if (passElem.getData() === null) {
			passElem.setError('empty field');
		} else if (confElem.getData() === null) {
			confElem.setError('empty field');
		} else {
			if (passElem.getData() !== confElem.getData()) {
				confElem.setError('passwords do not match');
			} else {
				confElem.setError(null);
			}
		}
	}
}