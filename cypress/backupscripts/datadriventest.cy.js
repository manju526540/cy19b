const availablefixture = 
    [
      
      {
      "name":"registermodule/register0",
      "contex":"manju"

      },
      {

       "name":"registermodule/register2",
       "context":"kiran",

     },

    {

    "name":"registermodule/register3",
    "context":"naveen",
     }
]
availablefixture.forEach((afixture)=>{
  
describe('afixture.context', () => {

  before(function () {
    cy.get(afixture.name).then(function (data) {
      this.data=data;
    })
  })

  })
})

it("validate register flow", function () {
  cy.visit("https://shop.demoqa.com/my-account/")

  cy.get("#reg_username").type(this.data.username)

  cy.get("#reg_email").type(this.data.emailadress);

  cy.get("#reg_password").type(this.data.password);

  cy.get(".woocommerce-Button").should("be.disable")

  //or

  cy.get(".woocommerce-Button").should("have.attr", "disabled", "disabled");

  cy.get("#reg_password").clear();

  cy.get("#reg_password").clear().type(this.data.strongpassword);
});


  
