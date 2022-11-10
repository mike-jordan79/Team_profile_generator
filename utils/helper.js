const fs = require('fs');
const path = require('path');

const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

let indexhtml = path.parse(__dirname).dir + "/dist/index.html"
let engFile = path.parse(__dirname).dir + "/src/engineer.html"
let internFile = path.parse(__dirname).dir + "/src/intern.html"
let managerFile = path.parse(__dirname).dir + "/src/manager.html"

 const managerPrompt = (anws) => {
    const manager = new Manager(anws.name, anws.email, anws.id, anws.memberRole, anws.officeNum);

    console.log(manager.officeNum)

    // Read manager.html file & convert to String
     let data = fs.readFileSync(managerFile, 'utf-8');
     let newdata = data.toString();

     let updated = newdata.replace('employeeName', manager.name)
     let updated2 = updated.replace('employeeEmail', manager.email)
     let updated3 = updated2.replace('employeeID', manager.id)
     let updated4 = updated3.replace("employeeOfficeNum", manager.officeNumber);
    
     updateIndexHtml(indexhtml, manager.role, updated4)
};

function engineerPrompt(anws) {
    const engineer = new Engineer(anws.name, anws.email, anws.id, anws.memberRole, anws.gitName);
    
    // Read engineer.html file & convert to String
    let data = fs.readFileSync(engFile, 'utf-8');
    let newdata = data.toString();

    let updated = newdata.replace('employeeName', engineer.name)
    let updated2 = updated.replace('employeeEmail', engineer.email)
    let updated3 = updated2.replace('employeeID', engineer.id)
    let updated4 = updated3.replace('employeeGitHubName', engineer.github)

    updateIndexHtml(indexhtml, engineer.role, updated4)
}

function internPrompt(anws) {
    const intern = new Intern(anws.name, anws.email, anws.id, anws.memberRole, anws.schoolName);

    console.log(anws.schoolName)
    // Read intern.html file & convert to String
    let data = fs.readFileSync(internFile, 'utf-8');
    let newdata = data.toString();

    let updated = newdata.replace('employeeName', intern.name)
    let updated2 = updated.replace('employeeEmail', intern.email)
    let updated3 = updated2.replace('employeeID', intern.id)
    let updated4 = updated3.replace('employeeSchool', intern.school)

    updateIndexHtml(indexhtml, intern.role, updated4)
}

function updateIndexHtml (indexhtml, memRole, updated4) {
    const buf = Buffer.from(indexhtml, 'utf-8');
    //console.log(buf.toString('utf-8'));

    // memHtmlId is search string for index.html file
    let memHtmlId;

    switch (memRole) {
        case 'Engineer':
            memHtmlId = '<div id="engineer" class="row">';            
            break;
        case 'Intern':
            memHtmlId = '<div id="intern" class="row">';
            break;
        case 'Manager':
            memHtmlId = '<div id="manager" class="row">';
            break;    
        default:
            break;
    }

    fs.open(indexhtml, "r+", (err, fd) => {
        if (err) {
            console.warn(`code: ${err.code} occurred`)
        } else {
            let rdindex = fs.readFileSync(indexhtml, 'utf-8');
            let newindex = rdindex.toString();
            let searchStr = memHtmlId

            // Search index.html file and replace with update member info
            let updateIndex = newindex.replace(searchStr, searchStr + '\n' + updated4);

            //console.log(updateIndex);
            fs.writeFileSync(indexhtml, updateIndex);
            console.log("Finish writing to index.html file")

            // let indexCnt = fs.writeSync(indexhtml, 'utf-8');
            //fs.writeFileSync(indexhtml, updateIndex)
            //console.log(indexCnt.toString('utf-8'))
        }

    })
}

module.exports = { managerPrompt, engineerPrompt, internPrompt }