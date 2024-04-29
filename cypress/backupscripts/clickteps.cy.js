describe('basic click tips', () => {
  it('click tips', () => {
    cy.visit('https://www.cypress.io/')

    cy.contains("Installing Cypress").click({force:true})
  })
})
  it.only('click tips', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.xpath("//button[text()='ADD TO CART']").click({multiple:true})

})