Feature: Sauce Demo Login

  As a user of Sauce Demo
  I want to log in successfully
  So that I can view the product inventory page

  Scenario: Successful login with valid credentials
    Given I open the Sauce Demo login page
    When I login with valid username and password
    Then I should see the products page

  Scenario: Failed login with invalid credentials
    Given I open the Sauce Demo login page
    When I login with invalid username and password
    Then I should see an error message

