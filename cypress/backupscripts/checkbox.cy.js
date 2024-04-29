describe('check box', () => {
    it('check box', () => {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
      cy.wait(3000)
      cy.get(".nomargin").check().should("be.checked")
      cy.wait(2000)
    cy.get(".nomargin").uncheck().should("not.be.checked")
    })
    it.only('check box2', () => {
     cy.visit("https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html")
     cy.get('input[type="checkbox"]').check()
     cy.wait(2000)
     cy.get('input[type="checkbox"]').uncheck()
     cy.wait(3000)
     cy.get('input[type="checkbox"]').check(["HTML","Javascript","Python"])
     cy.wait(2000)
     cy.get('input[type="checkbox').uncheck(["HTML","Javascript","Python"])
  })
})