describe('ctrating write file', () => {
    it('first test case ', () => {
      
      cy.writeFile("cypress/fixtures/registermodule/text.txt","naveen\n")

    })
    it("creating the upend the data",()=>{
      cy.writeFile("cypress/fixtures/registermodule/text.txt","manju",{flag:"a+"})
    })
    it('verifying a readFile data',()=>{
      cy.readFile("cypress/fixtures/registermodule/text.txt").should('contain','naveen\nmanju')
    })
    it("creating a json data",()=>{
      cy.writeFile("cypress/fixtures/text6.json",{firstname: "manju",lastname: "C"})
    })
    it("verifying json file data",()=>{
      cy.readFile("cypress/fixtures/text6.json").its("firstname").should("eq","manju")
    })
  })