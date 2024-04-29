import login from '../pageobject/loginpage.po.cy'
describe('session first test case', () => {
    beforeEach(()=>{
        cy.session('login session',() => {
            cy.visit("/web/index.php/auth/login")
            cy.get(login.loginusername()).type('Admin')
            cy.get(login.loginpassword()).type('admin123')
            cy.get(login.submitbutton()).click()
        })

        })
    
    it('verify the job tittle', () => {
      cy.visit('/web/index.php/admin/saveJobTitle')
      var r = (Math.random() + 1).toString(36).substring(7);
      cy.get("input[class='oxd-input oxd-input--active']").eq(1).type("senior analyst"+r)
      cy.get("button[type='submit']").click()
    
    })
    it('verify the add employee', () => {
        cy.visit('/web/index.php/pim/addEmployee')
        cy.addemployee("kiran","n")

})
it('verify the pay grade',()=>{
   cy.visit("/web/index.php/admin/payGrade")
   var r = (Math.random() + 1).toString(36).substring(7);
   cy.get("input[class='oxd-input oxd-input--active']").eq(1).type("Grade1"+r) 
   cy.get("button[type='submit']").click()
})
})
    

  
