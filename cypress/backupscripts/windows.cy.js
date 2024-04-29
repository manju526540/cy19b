describe('new tabs', () => {
    it('windows first test case', () => {
        cy.on("uncaught:exception",(err,runnable)=>{
            return false
        })
      cy.visit('https://demoqa.com/browser-windows',{
        onBeforeLoad(win){
            cy.stub(win,'open')
        }
     })
  cy.get("#tabButton").click()
   cy.window().its('open').should('be.called');
  cy.visit("https://demoqa.com/sample");
  cy.get("#sampleHeading").should("be.visible");
});
});
it.skip('windows first test case', () => {
    cy.on("uncaught:exception",(err,runnable)=>{
        return false
    })

    cy.visit("https://demoqa.com/browser-windows"),{
        onBeforeLoad(win){
            cy.stub(win,"open")
        }
    }
    cy.get("#windowButton").click()
    cy.window().its('open').should('be.called');
    cy.wait(5000)
    cy.visit('https://demoqa.com/sample')
    cy.get("#sampleHeading").should("be.visible")
})


    
        
    
    



      


        
    
