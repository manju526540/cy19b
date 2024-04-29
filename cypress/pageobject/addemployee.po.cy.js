class addemployeepage{

    addemployeemenu(){
        
        return 'Add Employee'
    }
firstname(){

    return 'input[class="oxd-input oxd-input--active orangehrm-firstname"]'
}

lastname(){

    return 'input[placeholder="Last Name"]'
}

submitbutton(){

    return 'button[type="submit"]'
}
succesfullMessage(){

    return 'Successfully Saved'
}

}

const addemployees = new addemployeepage()

export default addemployees