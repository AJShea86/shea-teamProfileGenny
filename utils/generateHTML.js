function renderAnswers(data) {
  // console.log(data)
  return ``;
}

function generateHTML(data) {
  let draftMarkdown = ` 
  ${renderAnswers(data)} 
  
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <style>
      .teamCards {
        padding-bottom: 25px;
      }

      .allCards {
        display: flex;
        flex-wrap: wrap;
        margin: 5px;
        justify-content: center;
        text-align: center;
      }

      body{
          background-color: lightgray;
      }
    </style>
  </head>

  <h1
    style="
      background-color: DodgerBlue;
      color: white;
      height: 150px;
      display: flex;
      justify-content: center;
    "
  >
    My Team
  </h1>
  <body>
    <div class="allCards">
      <div
        class="card"
        style="
          width: 18rem;
          background-color: DodgerBlue;
          color: white;
          align-items: center;
          margin: 15px;
          border: 5px blue solid;
          border-radius: 20px;

        "
      >
        <div class="card-body">
          <h4 class="card-title">${data.managerName}</h4>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush teamCards" style="color: black">
          <li class="list-group-item" style="width: 225px">Employee ID: ${data.managerID}</li>
          <li class="list-group-item" style="width: 225px">Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
          <li class="list-group-item" style="width: 225px">Office Number: ${data.managerNumber}</li>
        </ul>
      </div>

      <div
        class="card"
        style="
          width: 18rem;
          background-color: DodgerBlue;
          color: white;
          align-items: center;
          margin: 15px;
          border: 5px blue solid;
          border-radius: 20px;


        "
      >
        <div class="card-body">
          <h4 class="card-title">${data.engineerName}</h4>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush teamCards" style="color: black">
          <li class="list-group-item" style="width: 225px">Employee ID: ${data.engineerID}</li>
          <li class="list-group-item" style="width: 225px">Email: ${data.engineerEmail}</li>
          <li class="list-group-item" style="width: 225px">Github: <a href="https://github.com/${data.engineerGithub}">${data.engineerGithub}</a></li>
        </ul>
      </div>
      <div
        class="card"
        style="
          width: 18rem;
          background-color: DodgerBlue;
          color: white;
          align-items: center;
          margin: 15px;
          border: 5px blue solid;
          border-radius: 20px;


        "
      >
        <div class="card-body">
          <h4 class="card-title">${data.internName}</h4>
          <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush teamCards" style="color: black">
          <li class="list-group-item" style="width: 225px">Employee ID: ${data.internID}</li>
          <li class="list-group-item" style="width: 225px">Email: ${data.internEmail}</li>
          <li class="list-group-item" style="width: 225px">School: ${data.internSchool}</li>
        </ul>
      </div>
    </div>

    </body>
</html>



  
  `;

  renderAnswers(data);
  return draftMarkdown;
}

module.exports = generateHTML;
