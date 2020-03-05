const Employee = require("./Employee")

class Engineer extends Employee{
    //initiation for manager
    constructor(name,id,email,gitHub){
        
    //uses the manager parameters to fill in the employee constructor paramaters
    super(name,id,email) 
        this.gitHub = gitHub
    }
    //methods
    //class is being used so no need for prototype
    getRole(){
        return "Engineer"
    }

    getGitHub(){
        return this.gitHub
    }
};

module.exports = Engineer