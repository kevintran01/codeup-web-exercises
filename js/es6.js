/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'Kevin',
    email: 'KevinTran04024@Google.com',
    languages: ['HTML', 'CSS', 'JavaScript']
  },
  {
    name: 'Kevin',
    email: 'KevinTran04024@Google.com',
    languages: ['HTML', 'CSS', 'Javascript']
  },
  {
    name: 'Kevin',
    email: 'KevinTran04024@Google.com',
    languages: ['HTML', 'CSS', 'Javascript']
  },
  {
    name: 'Kevin',
    email: 'KevinTran04024@Google.com',
    languages: ['HTML', 'CSS', 'Javascript']
  },
  {
    name: 'Kevin',
    email: 'KevinTran04024@Google.com',
    languages: ['HTML', 'CSS', 'javascript']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Kevin';
const email = 'KevinTran04024@Gmail.com';
const languages = ['HTML', 'CSS', 'Javascript'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach = (user) => emails.push(user.email);
users.forEach = (user) => names.push(user.name);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const name = user.name;
  const email = user.email;
  const languages = user.languages;

  // TODO: rewrite the assignment below to use template strings
  developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
});
list += '</ul>';
