// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')
import 'cypress-file-upload';
import login from "../pageobject/loginpage.po.cy"
import addemployees from "../pageobject/addemployee.po.cy"


Cypress.Commands.add('manju', (username, password) => {
    cy.get(login.loginusername()).type(username)

    cy.get(login.loginpassword()).type(password)

    cy.get(login.submitbutton()).click()
})

    Cypress.Commands.add('addemployee',(firstname,lastname)=>{ 

    cy.get(addemployees.firstname()).type(firstname)

    cy.get(addemployees.lastname()).type(lastname)

    cy.get(addemployees.submitbutton()).click()

    cy.contains(addemployees.succesfullMessage()).should("be.visible")

 })   










