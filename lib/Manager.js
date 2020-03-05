const Employee = require("./Employee")

class Manager extends Employee{
    //initiation for manager
    constructor(name,id,email,officeNumber){
        this.name = name
        this.id = id
        this.email = email
    //uses the manager parameters to fill in the employee constructor paramaters
    super(name,id,email) 
        this.officeNumber = officeNumber
    }

}
