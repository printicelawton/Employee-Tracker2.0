# Employee-Tracker2.0


## Summary 
Employee Tracker is a CLI applicaiton for building and maintaining companies employee data base. Built on MySQL this application can act as a foundation to continue to build upon. Employee allows managers or someone within the company to view all employees, roles, as well as departments. It also allows for adding employees, roles, departments and updating employees from your CLI.

## Demo

![Screen Shot 2021-06-15 at 10 59 10 PM](https://user-images.githubusercontent.com/78760719/122151422-8c710780-ce2d-11eb-852b-f9bb021fd3d0.png)


https://user-images.githubusercontent.com/78760719/122151216-27b5ad00-ce2d-11eb-8c9f-d14555ccbeac.mp4

## Getting Started

### Instructions:
In order to use this application you will need to first run an npm install in your CLI to install the dependencies that have been loaded into the json files for you. Once this is done, run node app.js in your CLI to start the prompts that will walk you through the verious tasks you can perform with this application. 

 
## Technologies Used
- MySQL: Relational database management system based on SQL – Structured Query Language, used to store and query employee and company data. 
- Express.js - Middleware for end point connection between the front end and backend.
- Node.js - Used for package managment and to execute JavaScript code to build command line tool for server-side scripting.
- Javascript - Used to base functionality of functions and prompts within the application.
- Git - Version control system to track changes to source code
- GitHub - Hosts repository that can be deployed to GitHub Pages
 
## Code Snippet
The following code snippet shows the schema for the database.   

```sql
DROP DATABASE IF EXISTS eetracker_db;
CREATE database eetracker_db;

USE eetracker_db;

CREATE TABLE role (
    id INT AUTO_INCREMENT primary key NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT(10)
);

CREATE TABLE department (
    id INT AUTO_INCREMENT primary key NOT NULL,
    name VARCHAR(30),
    department_id INT(10)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT primary key NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10),
    manager_id INT(10) NULL
);

```

## Built With
* [MySQL](https://www.mysql.com/)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [npmjs](https://docs.npmjs.com/)
* [inquirer](https://www.npmjs.com/package/inquirer)

## Authors

**Printice Lawton**
- [LinkedIn](https://www.linkedin.com/in/printicelawton/)
- [Link to Github](https://github.com/printicelawton)
- [Portfolio](https://printicelawton.github.io/professional_portfolio2/)
