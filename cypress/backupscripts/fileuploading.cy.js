describe('cypress file uploading', () => {
    it.only('uploading file using plugin', () => {
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
      cy.get("input[type='file']").attachFile("sample.txtfile")
      cy.wait(5000)
      cy.get("input[type='submit']").click();
    })
  })
    it('uploading file using plugin', () => {
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
      cy.get("input[type='file']").selectFile("C:/Users/manja/OneDrive/Documents/cypress 19 batch/cypress/fixtures/sample.txtfile")
      cy.wait(5000)
      cy.get("input[type='submit']").click();
    })
    it.only('uploading file using plugin', () => {
      cy.downloadFile("https://in.images.search.yahoo.com/search/images?p=cypress+logo+download&fr=mcafee&type=E210IN714G0&imgurl=https%3A%2F%2Fuser-images.githubusercontent.com%2F2801156%2F153322291-8b186487-5127-48f7-aa6d-b0ef350f8575.png#id=3&iurl=https%3A%2F%2Fuser-images.githubusercontent.com%2F2801156%2F153322291-8b186487-5127-48f7-aa6d-b0ef350f8575.png&action=click","cypress/downloads","ramacharan.png")
      cy.readFile("cypress/downloads/ramacharan.png").should("exist")
    })
    it.only('uploading file using plugin', () => {
      cy.downloadFile("https://in.images.search.yahoo.com/search/images;_ylt=AwrKBGsEwR1mbDIAJou7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=epil+tower&fr2=piv-web&type=E210IN714G0&fr=mcafee#id=7&iurl=https%3A%2F%2Fwww.haqqitours.com%2Fwp-content%2Fuploads%2F2017%2F09%2Ftmp762065406176264194.jpg&action=click","cypress/downloads","tower.jpg")
      cy.readFile("cypress/downloads/tower.jpg").should("exist")
    })