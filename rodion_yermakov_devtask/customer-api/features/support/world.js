class ContactInfo {
    constructor(id = '', firstName = '', lastName = '', email = '') {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    validate(existingIds = []) {
        const errors = [];
        if (!this.firstName) {
            errors.push('The first name must not be empty');
        }

        if (!this.lastName) {
            errors.push('The last name must not be empty');
        }

        if (!this.email || !this.email.includes('@')) {
            errors.push('The email given must be valid');
        }

        if (existingIds.includes(this.id)) {
            errors.push('The ID is already registered');
        }

        if (errors.length > 0) {
            throw new Error(errors.join('; '));
        }
    }
}

module.exports = ContactInfo;
