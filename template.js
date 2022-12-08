
const fs= require("fs");
const generateHTML= require("./generateHTML");
const inquirer=require("inquirer");
// Create questions
// const createManager = () => {
//     return 
    
    inquirer.prompt ([
{
    name:"name",
    message:`"What is the managers name?"`,
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

.then(response=> {
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


// const addMember = () => {

//     return inquirer.prompt([
//         {
//             name: "add",
//             message: "Would you like to add a team member?",
//             choices: ["Add Manager", "Add Intern", "Add Engineer", "I'm done creating my team."],
//             type: "list"
//         }
//     ])

//     .then(choice => {
//         switch (choice.menu) {
//             case "Add Intern":
//                 newIntern();
//                 break;
//             case "Add Engineer":
//                 newEngineer();
//                 break;
//             case "I'm done creating my team.":
//                 createTeam();


//         }
//     });
// }

// const newIntern = () => {
//     return inquirer.prompt ([
//         {
//             name:"name",
//             message:`"What is the intern's name?"`,
//             type:"input"
//         },    
        
//         {
//             name:"ID",
//             message:"What is the intern's ID?",
//             type:"input"
//         },
        
//         {
//             name:"email",
//             message:"What is the intern's email?",
//             type:"input",
//         }
        
//         ]);
// }

// const newEngineer = () => {
//     return inquirer.prompt ([
//         {
//             name:"name",
//             message:`"What is the engineer's name?"`,
//             type:"input"
//         },    
        
//         {
//             name:"ID",
//             message:"What is the engineer's ID?",
//             type:"input"
//         },
        
//         {
//             name:"email",
//             message:"What is the engineer's email?",
//             type:"input",
//         }
        
//         ]);
        
// }




// TODO: Create a function to initialize app
function init() {



}


// Function call to initialize app
init();

