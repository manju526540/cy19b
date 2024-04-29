describe('iframe', () => {
    it('iframe practice', () => {
      cy.visit('https://jqueryui.com/checkboxradio/')
      cy.get('iframe[class="demo-frame"]').then(($iframe) => {
        let checkbox1 = $iframe.contents().find('label[for="radio-1"]')
        cy.wrap(checkbox1).click()

      })
    })
      it('iframe practice', () => {
        cy.visit('https://jqueryui.com/checkboxradio/') 
        cy.get('iframe[class="demo-frame"]').then(($iframe)=>{
          let checkbox2 = $iframe.contents().find('label[for="radio-2"]')
          cy.wrap(checkbox2).click
        })
        
    })
  })