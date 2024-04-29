describe('checking for shadoe element', () => {
    it('checking for the shadow first case ', () => {
      cy.on("uncaught:exception",() => {
        return false
      })
      cy.visit('http://watir.com/examples/shadow_dom.html')
      cy.get("#shadow_host").shadow().find("input[type='checkbox']").check()
      cy.get("#shadow_host").shadow().find("input[type='text']").type("manju")
    })
  })