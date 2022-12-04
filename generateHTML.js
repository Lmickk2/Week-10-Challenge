
const generateHTML=(response) => {
    return `

    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User Portfolio</title>
    <link rel="stylesheet" href="./styles.css">
  <body>
    <h1>Manager</h1>
    <div>
    <ol>
        <li>${response.name}</li>
        <li>ID: ${response.ID}</li>
        <li>Email: ${response.email}</li>
        <li> Office: ${response.office}</li>
    </ol>
    </div>
	<script src="index.js"></script>
  </body>
</html>
  `
  }
  
  
  // TODO: Create a function to generate markdown for README *
  module.exports=generateHTML
  