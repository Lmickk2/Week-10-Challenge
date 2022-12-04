
const fs=require("fs")
const generateHTML=require("./generateHTML")
const inquirer=require("inquirer");

// Create questions
inquirer.prompt([

{
    name:"name",
    message:"What is the managers name?",
    type:"input"
},    

{
    name:"ID",
    message:"What is your managers ID?",
    type:"input"
},

{
    name:"email",
    message:"What is your managers email?",
    type:"input",
}

])
// TODO: Create a function to write README file
.then(response=>{
    console.log(response)
    const result=generateHTML(response)
    fs.writeFile("index.html",result,error=>{
        if(error) {
            console.log(error);
        } else {
            console.log("HTML created!")
        }
    })
})

// TODO: Create a function to initialize app
function init() {



}


// Function call to initialize app
init();

