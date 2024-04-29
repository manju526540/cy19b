
import regiddata from"../fixtures/register1.json"

describe('shoptoolqa', () => {
    it('registerdata', () => {
      cy.visit('https://shop.demoqa.com/my-account/')

      cy.get("#reg_username").type(regiddata.username)

      cy.get("#reg_email").type(regiddata.emailadress)

      cy.get("#reg_password").type(regiddata.weakpassword)

      cy.get(".woocommerce-Button").should("be.disabled")
      //or

      cy.get(".woocommerce-Button").should("have.attr","disabled","disabled")

      cy.get("#reg_password").clear()

      //cy.get("#reg_password").type(regiddata.strongpassword)

      cy.get("#reg_password").clear().type(regiddata.strongpassword)

    })
  })