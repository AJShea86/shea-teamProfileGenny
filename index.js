
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
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

let userAnswers = {};
const baseQuestions = [    {

  type: "input",
  message: "What is the manager's name?",
  name: "managerName",
},
{
  type: "input",
  message: "What is the manager's employee ID?",
  name: "managerID",
},
{
  type: "input",
  message: "What is the manager's email address?",
  name: "managerEmail",
},
{
  type: "input",
  message: "What is the manager's office number?",
  name: "managerNumber",
},
{
  type: "checkbox",
  message: "Would you like to add team members?",
  choices: ["Add Engineer", "Add Intern", "Finish building team"],
  name: "addMember",
},

]

const engineerQuestions = [    {
  type: "input",
  message: "What is the engineer's name?",
  name: "engineerName",
},
{
  type: "input",
  message: "What is the engineer's employee ID?",
  name: "engineerID",
},
{
  type: "input",
  message: "What is the engineer's email address?",
  name: "engineerEmail",
},
{
  type: "input",
  message: "What is the engineer's Github username?",
  name: "engineerGithub",
},

]

const internQuestions = [    {
  type: "input",
  message: "What is the intern's name?",
  name: "internName",
},
{
  type: "input",
  message: "What is the intern's ID?",
  name: "internID",
},
{
  type: "input",
  message: "What is the intern's email address?",
  name: "internEmail",
},
{
  type: "input",
  message: "Where does the intern attend school?",
  name: "internSchool",
},   
]
//ADDED THE EXTRA QUESTION TO MAKE SURE THEY DO NOT WANT TO ADD MORE MEMBERS
const extraQuestion = [
  {
    type: "checkbox",
    message: "Would you like to add more team members?",
    choices: ["Add Engineer", "Add Intern", "Finish building team"],
    name: "addMember",
  },
  
]


inquirer
  .prompt(baseQuestions)

  .then((data) => {
    userAnswers = data
console.log(userAnswers)
    let questions = [];

    if(data.addMember.includes("Add Engineer") && data.addMember.includes("Add Intern")){
      questions = [...engineerQuestions, ...internQuestions]//ADDED THE EXTRA QUESTION HERE
    } else if (data.addMember.includes("Add Engineer")){
      questions = [...engineerQuestions]//ADDED THE EXTRA QUESTION HERE
    } else if (data.addMember.includes("Add Intern")){
      questions = [...internQuestions]//ADDED THE EXTRA QUESTION HERE

    } else {

    }


    inquirer
    .prompt(questions)
    
    .then(data2 => {
      userAnswers = {...userAnswers, ...data2}
      console.log(userAnswers)
      const finalResult = generateHTML(userAnswers);

      fs.writeFile("index.html", finalResult, (err) =>
        err ? console.error(err) : console.log("Success!")
      );
  

    })


  });

