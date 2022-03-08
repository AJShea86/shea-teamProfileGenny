
function renderAnswers(data) {
    // console.log(data)
    return ``
  }
  


function generateHTML(data) {
    let draftMarkdown = 
  
  ` 
  ${renderAnswers(data)} 
  
  
  
  ## Manager info
  <h1>  ${data.managerName}  </h1>
    
  ${data.managerID}
  ${data.managerEmail}
  ${data.managerNumber}


  ## Engineer info

  ${data.engineerName} 
  ${data.engineerID}
  ${data.engineerEmail}
  "https://github.com/${data.engineerGithub}"


  ## Intern info

  ${data.internName} 
  ${data.internID}
  ${data.internEmail}
  ${data.internSchool}

  
  `
  
    renderAnswers(data)
    return draftMarkdown;
  
  }












module.exports = generateHTML;