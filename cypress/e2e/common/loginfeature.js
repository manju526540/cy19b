import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import dashbord from "../../pageobject/dashboard.po.cy";
import login from "../../pageobject/loginpage.po.cy";

Given('user lunch the application', () => {
  cy.visit( '/web/index.php/auth/login')
})
// When('I see {string} in the title',(title)=>{
//     cy.title().should('eq',title)
// })

When('user enter valid username as {string} and valid password as {string}',(username,password)=>{
  cy.get(login.loginusername()).type(username)
  cy.get(login.loginpassword()).type(password)
  
})

And('user click on the login button',()=>{
  cy.get(login.submitbutton()).click()
  })

  Then('user should navigated to dashboard',()=>{
    cy.contains(dashbord.Timendwork()).should('be.visible')
    })

 Given('user lunch the application', () => {
      cy.visit( '/web/index.php/auth/login')
    })

    When('user enter valid username as {string} and invalid password as {string}',(username,password)=>{
       cy.get(login.loginusername()).type(username)
       cy.get(login.loginpassword()).type(password)
    })
    
    Then('user should get error message',(invaliderrorMessage)=>{
      cy.contains(login.invaliderrorMessage()).should("be.visible")
    })

    When('user enter invalid username as {string} and valid  password as {string}',(username,password)=>{
      cy.get(login.loginusername()).type(username)
      cy.get(login.loginpassword()).type(password)
    })

    Then('user should get error message',(invaliderrorMessage)=>{
      cy.contains(login.invaliderrorMessage()).should("be.visible")
    })

    When('user enter invalid username as {string} and invalid  password as {string}',(username,password)=>{
      cy.get(login.loginusername()).type(username)
      cy.get(login.loginpassword()).type(password)
    })

    Then('user should get error message',(invaliderrorMessage)=>{
      cy.contains(login.invaliderrorMessage()).should("be.visible")
    })


