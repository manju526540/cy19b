import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dashboard from '../../pageobject/dashboard.po.cy'
import addemployees from "../../pageobject/addemployee.po.cy";

When('user should click on the PiM module',()=>{
    cy.contains(dashboard.Pimmenuiteam()).click()
})

And('user should click on the addemploee submenu',(addemployeemenu)=>{
   cy.contains(addemployees.addemployeemenu()).click()
   })

And('user enter the firstname as {string} and lastname as {string}',(firstname,lastname)=>{
    cy.get(addemployees.firstname()).type(firstname)
    cy.get(addemployees.lastname()).type(lastname)
})

And('user should click on save button',(submitbutton)=>{
    cy.get(addemployees.submitbutton()).click()
})

Then('user should get successfully saved message',()=>{
    cy.contains(addemployees.succesfullMessage()).should("be.visible")
})

And('user should click on save button',()=>{
    cy.get(addemployees.submitbutton()).click()
})


