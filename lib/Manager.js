const Employee = require("./Employee")

class Manager extends Employee{
    //initiation for manager
    constructor(name,id,email,officeNumber){
        
    //uses the manager parameters to fill in the employee constructor paramaters
    super(name,id,email) 
        this.officeNumber = officeNumber
    }
    //methods
    //class is being used so no need for prototype
    getRole(){
        return "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber
    }
};

module.exports = Manager

