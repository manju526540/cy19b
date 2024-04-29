describe('tables practice', () => {
    it('first test', () => {
        cy.on("uncaught:exception",()=>{
            return false
        })
      cy.visit('https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html')
      cy.get('a').should("have.length",448)
      cy.wait(5000)
     cy.get("a").its("length").then((elementlength)=>{
     const lengthvalve = elementlength
      cy.log(lengthvalve)
      expect(lengthvalve).to.be.within(400,500)
        })
        cy.xpath("//table[@id='customers']/tbody/tr[3]/td[2]").then((txt)=>{
            const textvalve = txt.text()
            expect(textvalve).to.equal("Francisco Chang")
        })
        cy.xpath("//table[@id='customers']").each((row)=>{
            cy.wrap(row).within((celldata)=>{
                cy.log(celldata.text())
            })

            })
        })
        
    })
  