class loginpage{

    orangehrmlogo(){

        return 'img[alt="company-branding"]'
    }

    loginusername(){

        return 'input[name="username"]'
    }

    loginpassword(){

        return 'input[placeholder="Password"]'
    
}
invaliderrorMessage(){

    return 'Invalid credentials'
}


// credsinput(field){
     
//     return 'input[name="'+field+'"]'
// }
 submitbutton(){

  return 'button[type="submit"]'

}




 loginwithcreds(username,password){

    cy.xpath(this.loginusername("username")).type(username)
  
    cy.get(this.loginpassword("password")).type(password)
        
    cy.get(this.submitbutton()).click()
 }

}

    const login = new loginpage()

     export default login








