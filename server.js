// ***PRACTICE SET****
// A good way to start learning about npm's and their functionalities is using the 'inquirer' npm
// The inquirer npm let's you prompt questions to the user to start doing some manupulation with the responses

//*************************************
//The purpose of this practice set is to prompt the users some task (to-do list) and display them at the end using inquirer npm
//*************************************

//*** 1. Require the 'inquirer' npm
const inquirer = require('inquirer');

//We create an array to store our date
var myArray = [];

//We'll display a Welcome message
console.log('***********************************');
console.log('****** Welcome to TO-DO list ******');
console.log('***********************************');

//*** 2. Create an array to store username and password (remember to hide the password characters) using the right input
var login = [
    {
      type: 'input',
      name: 'username',
      message: "What's your username?",
 
//*** 2.5 Add a regular expresion to accept only letter and numers (OPTIONAL)
      validate: function(value) {
        var validUser = value.match(
          /^[a-zA-Z0-9_.-]*$/i
        );
        if (validUser) {
          return true;
        }
        return 'Please use letters and numbers only';
      }
    },
    {
      type: 'password',
      name: 'password',
      message: 'What is your password?',
    }
  ];

//*** 3. Create a second array to store the task
var toDoList = [
  {
    type: 'input',
    name: 'task',
    message: "Please type a task: "
  },
  {
    type: 'confirm',
    name: 'moreTasks',
    message: 'Would you like to add another task?',
    default: true
  }
];

//We will just prompt the username/password without verification -- for practice purposes
function loginFunction() {
    inquirer.prompt(login).then(function(login) {
//We will call getTasks recursively
        function getTasks() {
            inquirer.prompt(toDoList).then(answers => {
//4. Store the answers in MyArray
              myArray.push(answers.task);
              if (answers.moreTasks) {
                getTasks();
              } else {
//5. Display the results using console log and showing the stored data of myArray separated with commas
                console.log('Your tasks are:', myArray.join(', '));
              }
            });
          }       
          getTasks();
    });
  }

//Here is were we run the initial function
loginFunction();


