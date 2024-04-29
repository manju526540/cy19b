

beforeEach(()=>{
  cy.visit('https://the-internet.herokuapp.com/javascript_alerts')  
})

describe('javascript alert function', () => {
    it('javascript alert ', () => {
     
      cy.contains("Click for JS Alert").click(),
      cy.on("window:alert",(alert) => { 
        expect(alert).to.equal("I am a JS Alert")  
        return true
      })
      })
    })
    it('javascript confirm ok', () => {
       
        cy.contains("Click for JS Confirm").click(),
        cy.on("window:confirm",(alert) => { 
            expect(alert).to.equal("I am a JS Confirm")
          return true
        })
        })
    it('javascript confirm cancel', () => {
    
    cy.contains("Click for JS Confirm").click()
    cy.on("window:confirm",(confirm) => {
        expect(confirm).to.equal("I am a JS Confirm")
        return false
    })
    })

    it('javascript prompt ok ', () => {
        
        cy.window().then(($win)=>{
        cy.stub($win,"prompt").returns("hbvjhs")
        cy.contains("Click for JS Prompt").click()
        })
        })

      
    it('javascript prompt ok ', () => {
      
         cy.window().then(($win)=>{
         cy.stub($win,"prompt").callsFake(()=>null)
         cy.contains("Click for JS Prompt").click()
         })
        })
  
      
         

    
      
