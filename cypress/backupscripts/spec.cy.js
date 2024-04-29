describe('method of file uploading', () => {
  it('1st file uploading', () => {
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
    cy.get("input[type='file']").a
  })
})