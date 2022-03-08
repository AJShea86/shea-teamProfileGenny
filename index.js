//step one: ask user questions
//step two: log out data

const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("./utils/generateHTML");
const testData = {
  managerName: 'Andrew',
  managerID: '123',
  managerEmail: 'andrew@manager.com',
  managerNumber: '3036194103',
  addMember: [ 'Add Engineer' ],
  engineerName: 'Dennis',
  engineerID: '124',
  engineerEmail: 'dennis@engineer.com',
  engineerGithub: 'DennisDennis',
  internName: 'Mac',
  internID: '125',
  internEmail: 'mac@intern.com',
  internSchool: 'University of Denver'
}

inquirer
  .prompt([
    // {
    //   type: "input",
    //   message: "What is the manager's name?",
    //   name: "managerName",
    // },
    // {
    //   type: "input",
    //   message: "What is the manager's employee ID?",
    //   name: "managerID",
    // },
    // {
    //   type: "input",
    //   message: "What is the manager's email address?",
    //   name: "managerEmail",
    // },
    // {
    //   type: "input",
    //   message: "What is the manager's office number?",
    //   name: "managerNumber",
    // },
    // {
    //   type: "checkbox",
    //   message: "Would you like to add team members?",
    //   choices: ["Add Engineer", "Add Intern", "Finish building team"],
    //   name: "addMember",
    // },
    // {
    //   type: "input",
    //   message: "What is the engineer's name?",
    //   name: "engineerName",
    // },
    // {
    //   type: "input",
    //   message: "What is the engineer's employee ID?",
    //   name: "engineerID",
    // },
    // {
    //   type: "input",
    //   message: "What is the engineer's email address?",
    //   name: "engineerEmail",
    // },
    // {
    //   type: "input",
    //   message: "What is the engineer's Github username?",
    //   name: "engineerGithub",
    // },
    // {
    //   type: "input",
    //   message: "What is the intern's name?",
    //   name: "internName",
    // },
    // {
    //   type: "input",
    //   message: "What is the intern's employee ID?",
    //   name: "internID",
    // },
    // {
    //   type: "input",
    //   message: "What is the intern's email address?",
    //   name: "internEmail",
    // },
    // {
    //   type: "input",
    //   message: "Where does the intern attend school?",
    //   name: "internSchool",
    // },    

  ])

  .then((data) => {
    // console.log(data);
    const finalResult = generateHTML(testData);

    fs.writeFile("index.html", finalResult, (err) =>
      err ? console.error(err) : console.log("Success!")
    );


  });

