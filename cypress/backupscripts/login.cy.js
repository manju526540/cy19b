

import login from "../pageobject/loginpage.po.cy"

describe('verify the login functionality', () => {

  const creds = ["admin","admin123",]
    it.only('verify the login with valid creds', () => {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      // cy.get(login.loginusername(),{timeout:40000}).type(creds[0])

      // cy.get(login.loginpassword()).type(creds[1])

      // cy.get(login.submitbutton()).click()

      login.loginwithcreds(creds[0],creds[1])

      cy.contains('Time at Work').should("be.visible")

      cy.contains('Dashboard').should("be.visible")

      cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

      //or

      cy.url().should("include","/web/index.php/dashboard/index")



    })

    it('verify the login username & invalvid password', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
        cy.get(creds.credsinput("username")).type("admin")
  
        cy.get(creds.credspassword()).type("admin12325")
  
        cy.get(login.submitbutton()).click()

        cy.contains(login.loginerrorMessage()).should('be.visible')


  
  
  
      })

      it('verify the invalid username & valid password', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(login.orangehrmlogo()).should("be.visible")
                          
        cy.get(login.credsinput("username")).type("admin562")
  
        cy.get(login.credsinput("password")).type("admin123")
  
        cy.get(login.submitbutton()).click()

        cy.contains(login.loginerrorMessage()).should('be.visible')


  
  
  
      })

       it.only('verify the invalid username & invalid password', () => {

        let invalidcreds = {

          invalidusername : "bdhjschcbb",
          invalidpassword : "ncjnbkcbkha"
           
      }

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
        // cy.get(login.credsinput("username")).type(invalidcreds.invalidusername)
  
        // cy.get(login.credsinput("password")).type(invalidcreds.invalidpassword)
        
        // cy.get(login.submitbutton()).click()

        login.loginwithcreds("bdhjschcbb","ncjnbkcbkha")

        cy.contains(login.invaliderrorMessage()).should('be.visible')
  
      })
  })