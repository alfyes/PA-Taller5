Feature: Sign up into losestudiantes
   As user I want to sign up into losestudiantes to rate my professors

Scenario Outline: The sign up fails with a user that already exists.

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill the sign up form with firstname:<firstname>, lastname:<lastname>, email:<email>, password:<password> and agreeterms:<terms>
    And I try to sign up
    Then I expect to see the alert <error>

    Examples:
      | firstname  | lastname | email                     | password   | terms | error |
      | Alfonso    | Ardila   | ad.ardila@uniandes.edu.co | a1b2c3d4E5 | true  | Error: Ya existe un usuario registrado con el correo |
