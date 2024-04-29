

import addemployeedata from "../../fixtures/addemployee.json"

import dashbord from "../../pageobject/dashboard.po.cy"

import addemployee from "../../pageobject/addemployee.po.cy"

import login from "../../pageobject/loginpage.po.cy"


 const menuiteams = {

  menu1 : "Admin",
   menu2 : "PIM",
   menu3 : "Time",
   menu4 : "Leave",
   menu5 : "Recruitment"
 }

describe('verify the add employe in pim module', () => {

  it('verify the login with verified creds', () => {
  

    cy.visit("/web/index.php/auth/login")

    cy.manju("Admin","admin123")

    


    for(let iteams in menuiteams){

      cy.contains(menuiteams[iteams]).should('be.visible')
  
    }
     
    cy.contains(dashbord.Timendwork()).should("be.visible")

    cy.contains(dashbord.Pimmenuiteam()).click()

    cy.contains('Add Employee').click()

    

     cy.addemployee("manju","c")



  })

  


})