Feature: App ping
  In order to know the server is up
  As a health check
  I want to check the api status

  Scenario: Check the api status
    Given I send a GET request to "/ping"
    Then the response status code should be 200
