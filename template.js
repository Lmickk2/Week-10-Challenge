const fs= require("fs");
const inquirer=require("inquirer");
const Manager = require("./members/manager");
const Engineer = require("./members/engineer")
const Intern = require("./members/intern");
const generateHTML= require("./generateHTML");

    
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

.then(
    function ({name,id,email,role}) {
        switch(member) {
            case "Intern":
                newIntern(name,id,email);
        }
    }
)
break;

switch(member){
    case "Engineer":    
    newEngineer(name,id,email);
}


const addMember = () => {

    return inquirer.prompt([
        {
            name: "add",
            message: "Would you like to add a team member?",
            choices: ["Add Intern", "Add Engineer", "I'm done creating my team."],
            type: "list"
        }
    ])    
}

if(choice === "Add Intern") {
    return newIntern;
}
else if(choice === "Add Engineer") {
    return newEngineer;
}
else {
    fs.writeFile("index.html",result,error=>{
        if(error) {
            console.log(error);
        } else {
            console.log("HTML created!")
        }
    })
    return "Team complied!"
}

// .then(response=> {
//     console.log(response)
//     const result=generateHTML(response)
//     fs.writeFile("index.html",result,error=>{
//         if(error) {
//             console.log(error);
//         } else {
//             console.log("HTML created!")
//         }
//     })
// })

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






function init() {



}

init();

