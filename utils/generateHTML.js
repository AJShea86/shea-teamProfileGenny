

function generateHTML(team) {
  let draftMarkdown = ` 
  
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
        justify-content: space-evenly;
        text-align: center;
      }

      .card{
        padding-right: 10px;
        background-color: DodgerBlue;
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
${team.manager.generateHTMLCard(team.manager.getOfficeNumber())}
${team.engineer !== null ? team.engineer.generateHTMLCard(team.engineer.getGithub()): ""}
${team.intern !== null ? team.intern.generateHTMLCard(team.intern.getSchool()): ""}
${team.extraMembers.map(member => member.generateHTMLCard("hello"))}

    </body>
</html>



  
  `;

  return draftMarkdown;
}

module.exports = generateHTML;
