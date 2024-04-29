

describe('wikipedia links', () => {
  
  
    it('identify the links', () => {
      cy.visit("https://www.wikipedia.org/")
      cy.get("a").should("have.length",356)
      cy.get("a").contains("Commons").click()
      cy.origin("https://commons.wikimedia.org",()=>{
        cy.url().should("include",'wiki/Main_Page')
      })
        cy.get("a").its("length").then((elementlength)=>{
          const lengthvalve = elementlength
          cy.log(lengthvalve)
          expect(lengthvalve).to.be.within(600,700)
        })
        cy.get('.vector-menu-content-list').eq(6).find('a').its("length").then((elementlength)=>{
          cy.log(elementlength)
          expect(elementlength).to.equal(5)
        })
        cy.get("a[href='/wiki/Category:Audio_files']").eq(1).then((txt)=>{
          var text = txt.text()
          cy.log(text)
        })
    it.only('identify the links', () => {
          cy.visit('https://www.flipkart.com/')
          cy.get("div[class='_2GaeWJ']").eq(1).then((txt)=>{
            const textvalve = txt.text()
            
            expect(textvalve).to.equal("Mobiles")
          })
        })

      })
    })
  
      
    
  
    
  
  

 

      
    