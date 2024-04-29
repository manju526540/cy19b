describe('mouseover practice', () => {
    it('mouseoverthe top to bottom', () => {
      cy.visit('https://www.programsbuzz.com/');
      cy.get(".slide__description").rightclick({force:true})
      cy.wait(5000);
      cy.log("check the cantact menu");
      cy.contains("Tutorials").trigger("mouseover");
      cy.log("hovering the tutorial");
      cy.wait(2000)
      cy.contains("Contact").dblclick({force:true})
    })
    it.only('cypress docs', () => {
      cy.visit('https://docs.cypress.io/api/table-of-contents')
      cy.wait(5000)
      cy.get("a[href='https://github.com/cypress-io/cypress-realworld-app']").scrollIntoView({duration:2000})
    })

  })