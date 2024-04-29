describe('installing cyprerss', () => {
    it('tabs 1', () => {
      cy.on('uncaught:exception',(err,runnable)=>{
        return false
      })
      cy.visit('https://www.cypress.io/')
      cy.wait(5000);
      cy.contains('Installing Cypress').invoke("removeAttr","target").click({force:true})
      cy.wait(5000)
      cy.reload()
      cy.url().should('include','https://docs.cypress.io/guides/getting-started/installing-cypress')
    })
  })