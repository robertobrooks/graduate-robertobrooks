// ***PRACTICE SET****
// A good way to start learning about npm's and their functionalities is using the 'inquirer' npm
// The inquirer npm let's you prompt questions to the user to start doing some manupulation with the responses

//*************************************
//The purpose of this practice set is to prompt the users some task (to-do list) and display them at the end using inquirer npm
//*************************************

//*** 1. Require the 'inquirer' npm
//***ANSWER HERE

//We create an array to store our date
var myArray = [];

//We'll display a Welcome message
console.log('***********************************');
console.log('****** Welcome to TO-DO list ******');
console.log('***********************************');

//*** 2. Create an array called 'login' to store username and password (remember to hide the password characters) using the right input
//*** 2.5 Add a regular expresion to validate only letter and numers (OPTIONAL)
var login = [
//***ANSWER HERE
]

//*** 3. Create a second array to store the task (the confirmation part of the array is given)
var toDoList = [
  {
//***ANSWER HERE
  },
  {
//This information will be given to the student
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
// ***ANSWER HERE
              if (answers.moreTasks) {
                getTasks();
              } else {
//5. Display the results using console log and showing the stored data of myArray separated with commas
//***ANSWER HERE
              }
            });
          }       
          getTasks();
    });
  }

//Here is were we run the initial function
loginFunction();


