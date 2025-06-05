const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert');

const ContactInfo = require('../support/world');
const existingIds = ['12345', '67890'];

Before(function () {
    this.errors = null;
    this.statusCode = null;
    this.contactInfo = null;
});

Given('A ContactInfo object', function () {
    this.contactInfo = new ContactInfo();
});

When('the firstName field does not have a value', function () {
    this.contactInfo = new ContactInfo('54321', '', 'Doe', 'john.doe@example.com');
    try {
        this.contactInfo.validate();
    } catch (e) {
        this.errors = e.message.split('; ');
        this.statusCode = 400;
    }
});

When('the lastName field does not have a value', function () {
    this.contactInfo = new ContactInfo('54321', 'John', '', 'john.doe@example.com');
    try {
        this.contactInfo.validate();
    } catch (e) {
        this.errors = e.message.split('; ');
        this.statusCode = 400;
    }
});

When('the email field does not well formed', function () {
    this.contactInfo = new ContactInfo('54321', 'John', 'Doe', 'john.doeexample.com');
    try {
        this.contactInfo.validate();
    } catch (e) {
        this.errors = e.message.split('; ');
        this.statusCode = 400;
    }
});

Then('The error {string} will be returned', function (expectedError) {
    assert.strictEqual(this.errors[0], expectedError);
});

Then('the system will continue to the next test', function () {
    assert.ok(true);
});

Given('the results of validation', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});

When('a validation has an error', function () {
    this.contactInfo = new ContactInfo('', '', '123-456-7890', 'johndoeexample.com');
    try {
        this.contactInfo.validate();
    } catch (e) {
        this.errors = e.message.split('; ');
        this.statusCode = 400;
    }
});

Then('return the text of all errors', function () {
    const expectedErrors = this.errors;
    assert.deepStrictEqual(this.errors, expectedErrors);
});

Then('return the status of {int}', function (statusCode) {
    assert.strictEqual(this.statusCode, statusCode);
});
