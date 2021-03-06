// require dependencies 
const mysql = require('mysql2');
const inquirer = require("inquirer");
const figlet = require("figlet"); // for display banner
const chalk = require("chalk"); // for color 

// Establish MYSQL connection ... ok change to MYSQL2 to fix auth problems.  https://www.npmjs.com/package/mysql2  and https://stackoverflow.com/questions/49194719/authentication-plugin-caching-sha2-password-cannot-be-loaded
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "printice123",
    database: "eetracker_db"
});

figlet('Employee Tracker', (err, result) => {
    console.log(err || result);
  });

connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");
    askQuestions();
});

// Add a welcome message/function 
// function init() {
//     console.log(`Welcome to the Employee Management System (EMS)`)
//     welcome();
//   }


  
function askQuestions() {
    inquirer.prompt({
        message: "What would you like to do?",
        type: "list",
        choices: [
            "View all employees",
            "View all departments",
            "View all roles",
            "Add employee",
            "Add department",
            "Add role",
            "Update employee role",
            "QUIT"
        ],
        name: "choice"
    })
    
    .then(answers => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "View all employees":
                viewEmployees()
                break;

            case "View all departments":
                viewDepartments()
                break;

            case "View all roles":
                viewRoles()
                break;

            case "Add employee":
                addEmployee()
                break;

            case "Add department":
                addDepartment()
                break;

            case "Add role":
                addRole()
                break;

            case "Update employee role":
                updateEmployeeRole();
                break;

            default:
                connection.end()
                break;
        }
    });
};

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        askQuestions();
    })
}

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        askQuestions();
    })
}
// add a view all roles function
function viewRoles() {
    connection.query("SELECT * FROM role", function (err, data) {
        console.table(data);
        askQuestions();
    })
}
// Add employees function 
function addEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("Data Insert Successful");
            askQuestions();
        })
    })
}

// Repeat pattern above for add departments function 
function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What is the department that you want to add?"
    }, ])
    
    .then(function(res) {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("Data Insert Successful");
            askQuestions();
        })
    })
}

// Add prompt and response for roles. Also add primary key for roles table.
// need
function addRole() {
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, {
            message: "enter salary:",
            type: "number",
            name: "salary"
        }, {
            message: "enter department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (res) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", 
        [res.title, res.salary, res.department_id], 
        function (err, data) {
            if (err) throw err;
            console.table("Successfully added a new role");
        })
        askQuestions();
    });

};

// ]).then(function(res) {
//     connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], 
// function(err, data) {
//         if (err) throw err;
//         console.table("Data Insert Successful");
//         askQuestions();
//     })
// })

function updateEmployeeRole() {
    inquirer.prompt([
        {
            message: "Which employee would you like to update? (use first name only for now)",
            type: "input",
            name: "name"
        }, {
            message: "enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (response) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id,], 
        function (err, data) {
            if (err) throw err;
            console.log("Successfully updated");
        })
        askQuestions();
    })

}

