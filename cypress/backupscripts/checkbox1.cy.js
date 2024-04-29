describe('checkbox1', () => {
    it('checkbox1', () => {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
      cy.get('input[value="m"]').check().should("be.checked")
      cy.get('input[value="f"]').should("not.be.checked")
    })
  })