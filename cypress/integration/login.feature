Feature: Login Feature

@Login1
Scenario: Login as new sign user
Given I navigate to the WebSite
When I enter username and password
When User click on sign in button
Then Validate the title after login