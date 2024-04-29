
import logindata from "../fixtures/logincreds.json"

import addemployeedata from "../fixtures/addemployee.json"


describe('verify the employ functionality', () => {

  it('verify the add employee', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.get('input[name="username"]').type(logindata.username)

      cy.get('input[placeholder="Password"]').type(logindata.password)

      cy.get('button[type="submit"]').click()

      cy.contains('Time at Work').should("be.visible")

      cy.contains('PIM').click()

      cy.contains('Add Employee').click()

      cy.get('input[name="firstName"]').type(addemployeedata.firstname)

      cy.get('input[name="lastName"]').type(addemployeedata.lastname)

      cy.get('button[type="submit"]').click()

      cy.contains('Successfully Saved').should('be.visible')


  })

  it('verify the add employee', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.get('input[name="username"]').type(logindata.username)

      cy.get('input[placeholder="Password"]').type(logindata.password)

      cy.get('button[type="submit"]').click()

      cy.contains('Time at Work').should("be.visible")

      cy.contains('PIM').click()

      cy.contains('Add Employee').click()

      cy.get('button[type="submit"]').click()

      cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').first().should('be.visible')

      cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').last().should('be.visible')


  })
})