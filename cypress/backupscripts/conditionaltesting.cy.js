describe('method of file uploading', () => {
    beforeEach(()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.title().should('eq',"Wikipedia")
    })
    it('conditional testing first test case', () => {
      cy.get('body').then(($body)=>{
        if($body.find('[data-jsl10n="wikivoyage.name"]').length > 0){
          cy.get('[data-jsl10n="wikivoyage.name"]').click()
          cy.wait(5000)
          cy.origin("https://www.wikivoyage.org/",()=>{
            cy.title().should("eq",'Wikivoyage')
          })
        }
          else {
              cy.get("[data-jsl10n='wiktionary.name']").click
              cy.origin("https://www.wiktionary.org/",()=>{
                cy.title().should("eq","Wiktionary")
              })
          }
        })
      
        })

      })
     
    

         
          
        
      
    
        

        
      
    
    


