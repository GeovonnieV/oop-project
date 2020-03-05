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
//every team must have a manager so no need to use switch
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
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                    addIntern()
                    break;
            default:
                buildTeam()
                break;
        }
    })
    //getting info from engineer if chosen
    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                message: "engineers name",
                name: "engineerName"
            },
            {
                type: "input",
                message: "engineers id",
                name: "engineerId"
            },
            {
                type: "input",
                message: "engineers email",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "engineers GitHub username",
                name: "engineerGitHub"
            }
        ])
        .then(answers => {
        const engineer = new Engineer(answers.engineerName,answers.engineerEmail,answers.engineerId,answers.engineerGitHub) 
        //puts all our enginner info into the teamMembers array
        teamMembers.push(engineer)
        //puts engineers id into the id array
        idArray.push(answers.engineerId)
        createTeam()
    })
    //end ae
    }

    function addIntern(){
        inquirer.prompt([
            {
                type: "input",
                message: "interns name",
                name: "internName"
            },
            {
                type: "input",
                message: "interns id",
                name: "internId"
            },
            {
                type: "input",
                message: "interns email",
                name: "internEmail"
            },
            {
                type: "input",
                message: "interns school",
                name: "internSchool"
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool)
            teamMembers.push(intern)
            idArray.push(answers.internId)
            createTeam()
        })
        //end ai
    }

    function buildTeam(){

        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdir(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath,render(teamMembers), "utf-8")
     
    }

    createManager()
};




//end appMenu
};

appMenu()
​