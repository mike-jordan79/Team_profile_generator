const inquirer = require("inquirer");

const { managerPrompt, engineerPrompt, internPrompt } = require('./utils/helper');

const masterArray = [];

function masterInput() {

    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of the team member?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the team member's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the team member's email address?",
            name: "email"
        },
        {
            type: "list",
            message: "please select team member role",
            name: 'memberRole',
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "gitName",
            when: function(answers) {
                if (answers.memberRole == 'Engineer') {
                    return true;
                } else {return false;}
            }
        },
        {
            type: "input",
            message: "What is your school name?",
            name: "schoolName",
            when: function (answers) {
                if (answers.memberRole == 'Intern') {
                    return true;
                } else { return false; }
            }
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNum",
            when: function (answers) {
                if (answers.memberRole == 'Manager') {
                    return true;
                } else { return false; }
            }
        }
    ]).then(function(answer) {
        // Update index.html
        /* const employee = new Employee(answer.name, answer.email, answer.id, answer.role) */
        /* masterArray.push(employee) */
        switch (answer.memberRole) {
            case 'Manager':
                console.log("in the Manager switch statement")
                console.log(answer.officeNum)
                managerPrompt(answer);
                restart();
                break;
            case 'Engineer':
                console.log("in the Engineer switch statement")    
                engineerPrompt(answer);
                restart();
                break;
            case 'Intern':
                console.log("in the Intern switch statement")    
                internPrompt(answer);
                restart();
                break;
            default:
               const employee = new Employee(answer.name, answer.email, answer.id, answer.role)
               masterArray.push(employee)
               restart();
        }
    })
    .catch((error) => {
        console.log(error)
     })

 /*    function managerPrompt() {
      //  inquirer
        // create Manager Obj
        
    };
    
    function engineerPrompt() {
       // inquirer
       // Create Engineer Obj
        
    }
    
    function internPrompt() {
       // inquirer
        // create a Intern Obj
        
    } */

    function restart() {
        
        inquirer.prompt([{
            type: 'confirm',
            name: 'addMember',
            message: 'Would you like to add another team member?'
        }])
        .then(function(response) {
            if (response.addMember == true){
                masterInput()
            }
            else {
                console.log("Finished!!")
                
            }
        })
    }

};

masterInput();














        
 
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
