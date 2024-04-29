describe('draga and drop practice', () => {
    
    beforeEach(() => {
        cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop");
      });
  
    it('kitchen script', () => {
      
    //   cy.wait(5000)
    //   cy.get("#menu-fried-chicken").drag("#plate-items")
    //   cy.wait(3000)
    //   cy.get("#menu-hamburger").drag("#plate-items")

    const dataTransfer = new DataTransfer()
    cy.get("#menu-fried-chicken").trigger('dragstart',{dataTransfer})  
    cy.get("#plate-items").trigger('drop',{dataTransfer})
    cy.wait(5000)
    cy.get("#menu-hamburger").trigger('dragstart',{dataTransfer})
    cy.get("#plate-items").trigger('drop',{dataTransfer})
    cy.wait(2000)
    cy.get("#menu-ice-cream").trigger('dragstart',{dataTransfer})
    cy.get("#plate-items").trigger('drop',{dataTransfer})
    })
})

  