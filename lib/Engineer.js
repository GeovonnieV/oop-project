const Employee = require("./Employee")

class Engineer extends Employee{
    //initiation for manager
    constructor(name,id,email,github){
        
    //uses the manager parameters to fill in the employee constructor paramaters
    super(name,id,email) 
        this.github = github
    }
    //methods
    //class is being used so no need for prototype
    getRole(){
        return "Engineer"
    }

    getGithub(){
        return this.github
    }
};

module.exports = Engineer