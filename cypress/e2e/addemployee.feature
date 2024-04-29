Feature: verify the add employee functionality

    add employee functionality for negative and positive test cases
   Background: navigate to addemployee
        Given user lunch the application
        When user enter valid username as "Admin" and valid password as "admin123"
        And user click on the login button
        Then user should navigated to dashboard
        When user should click on the PiM module
        And user should click on the addemploee submenu
   
Scenario Outline: : verify the addemployee mandotary details
       
        And user enter the firstname as "<firstname>" and lastname as "<lastname>"
        And user should click on save button
        Then user should get successfully saved message

        Examples:
            | firstname | lastname | 
            | manju  | c  |     
            | prashanth  | n  | 

Scenario: verify the addemployee mandotary fields
      
        And user should click on save button
        