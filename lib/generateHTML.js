function renderManager(objManager) {
        return `            <div class="card">
        <div class="card-divider">
            <h2>${objManager.getName()}</h2>
        </div>
        <div class="position">
            <h3><i class="fa-solid fa-mug-hot"></i>${objManager.getRole()}</h3>
        </div>
        <div class="card-section">
            <p>ID: ${objManager.getId()}</p>
            <p>Email: <a href="mailto:${objManager.getEmail()}">${objManager.getEmail()}</a></p>
            <p>Office Number: ${objManager.officeNumber}</p>
        </div>
    </div>
    `;   
}
  
function renderEngineers(engineers) {
  let tempStr = ''; 

  for (let i = 0; i < engineers.length; i++){
    tempStr += `            <div class="card">
    <div class="card-divider">
        <h2>${engineers[i].getName()}</h2>
    </div>
    <div class="position">
        <h3><i class="fa-solid fa-glasses"></i>${engineers[i].getRole()}</h3>
    </div>
    <div class="card-section">
        <p>ID: ${engineers[i].getId()}</p>
        <p>Email: <a href="mailto:${engineers[i].getEmail()}">${engineers[i].getEmail()}</a></p>
        <p>Github: <a target="_blank" href="https://github.com/${engineers[i].getGithub()}">${engineers[i].getGithub()}</a></p>
    </div>
</div>
`
  }

  return tempStr; 
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderInterns(interns) {
  let tempStr = ''; 

  for (let i = 0; i < interns.length; i++){
    tempStr += `            <div class="card">
    <div class="card-divider">
        <h2>${interns[i].getName()}</h2>
    </div>
    <div class="position">
        <h3><i class="fas fa-user-graduate"></i>${interns[i].getRole()}</h3>
    </div>
    <div class="card-section">
        <p>ID: ${interns[i].getId()}</p>
        <p>Email: <a href="mailto:${interns[i].getEmail()}">${interns[i].getEmail()}</a></p>
        <p>School: ${interns[i].getSchool()}</p>
    </div>
</div>
`; 
  }

  return tempStr; 
}

// TODO: Create a function to generate HTML for the index.html file
function generateHTML(objManager, engineers, interns) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
      <link rel="stylesheet" href="./style.css" />
      <title>My Team Profile</title>
  </head>
  <body>
      <header class="top-bar grid-x align-center margin-0 shadow">
          <h1 class="text-center font-bold">My Team</h1>
      </header>
  
      <main class="container">
          ${renderManager(objManager)}
          ${renderEngineers(engineers)}
          ${renderInterns(interns)}
      </main> 
  </body>
  </html>
  `;
}

module.exports = generateHTML;