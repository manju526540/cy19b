describe("Api test case-first test case",()=>{
    it("addemployee list",()=>{
        cy.request({
            method : "GET",
            url : "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
            headers : {
                Cookie : "orangehrm=594762d025c8edd75ed2bd680fc20a16",
                Referer : "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
              }
        }).then((response)=>{
            expect(response.status).to.equal(200),
            cy.writeFile("cypress/fixtures/apitest2.txt",response)
        })
        
    })
    
})