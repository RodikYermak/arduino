Feature: When a user submits their basic information the user needs to be informed if the information is valid.

Scenario: We have received a message that does not have a first name
    Given A ContactInfo object
    When the firstName field does not have a value
    Then The error "The first name must not be empty" will be returned
    And the system will continue to the next test

Scenario: We have received a message that does not have a last name
    Given A ContactInfo object
    When the lastName field does not have a value
    Then The error "The last name must not be empty" will be returned
    And the system will continue to the next test

Scenario: We have received a message that does not have a well formed email
    Given A ContactInfo object
    When the email field does not well formed
    Then The error "The email given must be valid" will be returned
    And the system will continue to the next test

Scenario: We have received a message that does not well formed
    Given the results of validation
    When a validation has an error
    Then return the text of all errors
    And return the status of 400