// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Intern extends Employee{
    //initiation for manager
    constructor(name,id,email,school){
        
    //uses the manager parameters to fill in the employee constructor paramaters
    super(name,id,email) 
        this.school = school
    }
    //methods
    //class is being used so no need for prototype
    getRole(){
        return "Intern"
    }

    getSchool(){
        return this.school
    }
};

module.exports = Intern