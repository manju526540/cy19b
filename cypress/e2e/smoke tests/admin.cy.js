

describe('validate for the admin functionality', () => {

  it('verify the job title ', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.wait(30000)

    cy.get('input[name="username"]').type('admin')

    cy.get('input[placeholder="Password"]').type('admin123')

    cy.get('button[type="submit"]').click()

    cy.contains('Dashboard').should('be.visible')

    cy.contains('Time at Work').should('be.visible')

    cy.contains('Admin').click()

    cy.contains('Job').should("be.visible")

    cy.contains('Job').click()

    cy.contains('Job Titles').click()

    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

    let r = (Math.random() + 1).toString(36).substring(7);

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("SDET 1"+r)

    cy.get('button[type="submit"]').click()

    cy.contains('Successfully Saved').should('be.visible')

    



    


    










  })
})