// ***PRACTICE SET****
// A good way to start learning about npm's and their functionalities is using the 'inquirer' npm
// The inquirer npm let's you prompt questions to the user to start doing some JavaScript manupulation with the responses

//This practice test is to create a 
//1. Gooogle 'npm inquirer' or simply go to https://www.npmjs.com/package/inquirer
//2. Read the documentation and initialize the npm ('npm install inquirer --save')
//3. Create an array to store 

//Call the npm 
var inquirer = require('inquirer');

//We create an array to store our date
var myArray = [];

//We'll display a Welcome message
console.log('***********************************');
console.log('*** Welcome to you TO-DO list *****');
console.log('***********************************');

//This login will simulate a username, password - it will work with any credentials
var login = [
    {
//As stated in the documentation you can use different types of input data - this is the regular string input
      type: 'input',
      name: 'username',
      message: "What's your username?",
 
//We can use validate to make sure the user input the right format, characters. In this case only letters/numbers
//
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
//In this case we don't want to show password so the type will be password
      type: 'password',
      name: 'password',
      message: 'What is your password?',
    }
  ];

//Now, we create an array for the toDo list
var toDoList = [
  {
    type: 'input',
    name: 'task',
    message: "Please type a task: "
  },
  {
//The type 'confirm' prompt the user for a boolean y/n
    type: 'confirm',
    name: 'moreTasks',
    message: 'Would you like to add another task?',
    default: true
  }
];

//We will just prompt the username/password without verification -- for demo purposes
function loginFunction() {
    inquirer.prompt(login).then(function(login) {
 //Here some recursion will be utlized for getting multiple tasks
        function getTasks() {
            inquirer.prompt(toDoList).then(answers => {
              myArray.push(answers.task);
              if (answers.moreTasks) {
                getTasks();
              } else {
            //We join the answers of the array with a comma
                console.log('Your tasks are:', myArray.join(', '));
              }
            });
          }       
          getTasks();
    });
  }

//Here is were we run the initial function
loginFunction();


