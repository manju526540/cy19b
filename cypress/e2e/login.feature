Feature: verify the login functionality

    login functionality negative and positive test cases

    Scenario: verify the login with valid creads
        Given user lunch the application
        When user enter valid username as "Admin" and valid password as "admin123"
        And user click on the login button
        Then user should navigated to dashboard

    Scenario: verify the login with valid username and invalid password 
        Given user lunch the application
        When user enter valid username as "Admin" and invalid password as "vdghvd"
        And user click on the login button
        Then user should get error message

    Scenario: verify the login with invalid username and valid password 
        Given user lunch the application
        When user enter invalid username as "manju" and valid  password as "admin123"
        And user click on the login button
        Then user should get error message    

Scenario: verify the login with invalid username and invalid password 
        Given user lunch the application
        When user enter invalid username as "kiran" and invalid  password as "vgdjdjas"
        And user click on the login button
        Then user should get error message    


