const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​//where we are in our directory we want to create a new directory called output
const OUTPUT_DIR = path.resolve(__dirname, "output")
//puts a team.html file in the output directory
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​//create the arrays to push members and id to
const teamMembers = []
const idArray = []
//our CLI
function appMenu(){
//intro 
console.log("Build your team!")
//every team must have a manager
function createManager(){
inquirer.prompt([
{
    type: "input",
    message: "what is your managers name",
    name: "managerName"
},
{
    type: "input",
    message: "what is your managers id",
    name: "managerId" 
},
{
    type: "input",
    message: "what is your managers email",
    name: "managerEmail"
},
{
    type: "input",
    message: "what is your managers office number",
    name: "managerOfficeNumber"
}

])
.then(answers =>{
    const manager = new Manager(answers.managerName,answers.managerId,answers.managerOfficeNumber,answers.managerEmail)
    
    teamMembers.push(manager)
    idArray.push(answers.managerId)
    createTeam()
});
//end cm
};

function createTeam(){

    inquirer.prompt([
        {
            type: "input",
            message: "choose a team member",
            choices: [
                "Engineer",
                "intern",
                "I dont want to add any more team members"
            ]
        }
    ])
};



//end appMenu
};


​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```


//will all have name,id,and email