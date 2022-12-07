const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const Employee = require("./members/employee");
const Engineer = require("./members/engineer");
const Intern = require("./members/intern");
const Manager = require("./members/manager")


Employee.begin();