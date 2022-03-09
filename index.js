
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
const team = {manager:null, engineer:null, intern:null}


let userAnswers = {};
let userAnswers2 = {};//ADDED USERANSWERS 2 HERE
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
// {
//   type: "checkbox",
//   message: "Would you like to add more team members?",
//   choices: ["Add Engineer", "Add Intern", "Finish building team"],
//   name: "addMember",
// },


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
// {
//   type: "checkbox",
//   message: "Would you like to add more team members?",
//   choices: ["Add Engineer", "Add Intern", "Finish building team"],
//   name: "addMember",
// },

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
    const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.officeNumber)
    team.manager = manager



console.log(userAnswers)
    let questions = [];

    if(data.addMember.includes("Add Engineer") && data.addMember.includes("Add Intern")){
      questions = [...engineerQuestions, ...internQuestions]
    } else if (data.addMember.includes("Add Engineer")){
      questions = [...engineerQuestions]
    } else if (data.addMember.includes("Add Intern")){
      questions = [...internQuestions]

    } else {

    }


    inquirer
    .prompt(questions)
    .then((data2) => {

      if(data2.engineerName && data2.internName){
        const engineer = new Engineer(data2.engineerName,data2.engineerID,data2.engineerEmail,data2.engineerGithub)
        team.engineer = engineer

        const intern = new Intern(data2.internName, data2.internID, data2.internEmail, data2.internSchool )
        team.intern = intern

      } else if (data2.engineerName){
        const engineer = new Engineer(data2.engineerName,data2.engineerID,data2.engineerEmail,data2.engineerGithub)
        team.engineer = engineer

      } else if (data2.internName){
        const intern = new Intern(data2.internName, data2.internID, data2.internEmail, data2.internSchool )
        team.intern = intern
      } else {
  
      }
  


      const finalResult = generateHTML(team);

      fs.writeFile("index.html", finalResult, (err) =>
        err ? console.error(err) : console.log("Success!")
      );
  



    })


  });



  ////need extra question to be the final question asked to the user
// inquirer
// .prompt(extraQuestion)
// .then((extraAnswer) => {
//   if(extraAnswer.includes("Add Engineer") && extraAnswer.includes("Add Intern")){
//     questions = [...engineerQuestions, ...internQuestions]
//   } else if (extraAnswer.includes("Add Engineer")){
//     questions = [...engineerQuestions]
//   } else if (extraAnswer.includes("Add Intern")){
//     questions = [...internQuestions]

//   } else {
// // then need a function to create as many employees as needed?
// // make the extraquestion a function itself?

//   }

// })