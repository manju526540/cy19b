describe('working with links', () => {
    it('table verification', () => {
      cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseindices')
      cy.xpath("//table[@class='dataTable']/thead/tr/th").should('have.length',6)
      cy.xpath("//table[@class='dataTable']/tbody/tr[5]/td[4]").then((txt)=>{
        const currentprice = txt.text()
        expect(currentprice).to.equal("1229.30")
       })
       cy.xpath("//table[@class='dataTable']/tbody/tr[4]").within(()=>{
        cy.get("td").eq(3).then((ele)=>{
            var text = ele.text() 
            cy.log(text)
            expect(text).to.equal("1703.45")
        })
        cy.get("td").eq(0).should("contain.text","Bajaj Finserv Ltd.")
        cy.xpath('//table[@class="dataTable"]/tbody/tr[3]').contains('Bajaj Finance Ltd.').parent().parent().within(()=>{
            cy.get("td").eq(3).then((txt)=>{
                
                cy.log('prev price: '+ txt.text())
            })
        cy.xpath('//table[@class="dataTable"]').each((row)=>{
            cy.wrap(row).within((celldata)=>{
              cy.log(celldata.text()) 
            })
            it('table verification', () => {
                cy.visit("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html#google_vignet")
                cy.get('a').should("have.length",423)
                cy.wait(5000)
                cy.get("a").its("length").then((elementlength)=>{
                    const lengthvalve = elementlength
                    cy.log(lengthvalve)
                    expect(lengthvalve).to.be.within(400,500)
              })

            })
              
    
        })

        })

       })
    })
})