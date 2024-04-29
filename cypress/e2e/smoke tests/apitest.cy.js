describe("apitest file uploading", () => {
  it.only("requers userdata", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data[1].first_name).to.equal("Lindsay");
      expect(response.body.data[1].id).to.equal(8);
      expect(response.body).to.have.property("page", 2);
      expect(response.body).to.have.property("per_page", 6);
      expect(response.body.data[0].id).to.equal(7);
    });
  });
});
it("orangeHrm aad employee", () => {
  cy.request({
    method: "GET",
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
    headers: {
      Cookie: "orangehrm=fe5c665519bb1c7a6d9b6b75fb6b68d7",
      Referer:
        "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    cy.writeFile("cypress/fixtures/apitestdata.txt", response);
  });
});
it("cypress test case,add to post resquest", () => {
  const payload = {
    name: "manju",
    job: "tester",
  };
  cy.request("POST", "https://reqres.in/api/users",payload).then((response) => {
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("name", "manju");
    expect(response.body).to.have.property("job", "tester");
    var creatvalve = JSON.stringify(response.body.createdAt)
    var idvalve = JSON.stringify(response.body.id)

    console.log(creatvalve)
    console.log(idvalve)
    cy.writeFile("cypress/fixtures/usersdata.json", { "id": idvalve })
  });
});

