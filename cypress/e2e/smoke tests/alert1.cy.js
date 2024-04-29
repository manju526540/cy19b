beforeEach(()=>{
  cy.visit("https://demoqa.com/alerts")
})
describe('template spec', () => {
 it('Click Button to see alert', () => {
  Cy.on('uncaught:exception', ()=>{
    return false
  })
    
    cy.contains("Click me").click()
    cy.on("window:alert",(alert) => {
      expect(alert).to.equal("You clicked a button")
      return true
        })

  })
})
it('click2', () => {
  cy.on("uncaught:exception",()=>{
    return false
  })
  cy.contains("Click me").click()
  cy.on("window:alert",(alert)=>{
    expect(alert).to.equal("This alert appeared after 5 seconds")
    return true
      })
    })
    it('click3 ok', () => {
      cy.on("uncaught:exception",()=>{
        return false
      })
      cy.contains("Click me").click
      cy.on("window:alert",(alert)=>{
        expect(alert).to.equal("Do you confirm action?")
        return true
      })
    })
      it('click3 cancel', () => {
        cy.on("uncaught:exception",()=>{
          return false
        })
        cy.contains("Click me").click
        cy.on("window:alert",(alert)=>{
          expect(alert).to.equal("Do you confirm action?")
          return false
        })
    })
    it('prompt alert ok', () => {
      cy.on("uncaught:exception",()=>{
        return false
      })
      cy.window().then(($win)=>{
        cy.stub($win,"prompt").returns("manju c")
        cy.contains("Click me").click()
      })
      it('prompt alert cancel', () => {
        cy.on("uncaught:exception",()=>{
          return false
        })
        cy.window().then(($win)=>{
          cy.stub($win,"prompt").callsFake(()=>null)
          cy.contains("Click me").click()
    })
  })
})

    

