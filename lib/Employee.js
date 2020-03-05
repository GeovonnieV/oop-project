class Employee {
    constructor(name,id,email){
        this.name = name
        this.id = id
        this.email = email
        
    }

    printInfo(){
        console.log(this.name)
        console.log(this.id)
        console.log(this.email)
    }


}


const employee = new Employee("jeff","4","gmail")

employee.printInfo()
