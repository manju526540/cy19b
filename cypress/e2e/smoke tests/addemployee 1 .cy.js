const menuiteams = {

  menu1 : "Admin",
  menu2 : "PIM",
  menu3 : "Time",
  menu4 : "leave",
  menu5 : "recruitement"
 }


describe('verify the add employee in pim module', () => {

  it('verify the login with creds', () => {
    
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type("admin")

    cy.get('input[placeholder="Password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    for(let iteams in menuiteams){

      cy.contains(menuiteams[iteams]).should("be.visible")
    
  
    }


  })
})
  