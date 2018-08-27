//ADDING ELEMENTS
var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
console.log(daysOfTheWeek);
daysOfTheWeek.push('Friday, Saturday'); //.push() adds elements to the end
console.log(daysOfTheWeek);
daysOfTheWeek.unshift('Sunday'); //.unshift() adds elements to the front
console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']


//Removing Elements

var todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];

console.log('My todo list:');
console.log(todoList);
// ['Take out the trash', 'Clean the car', 'Pay the bills']

console.log('Completing the last item: ' + todoList[todoList.length - 1]);

// let's remove the last item
var removedItem = todoList.pop();

// log what we did
console.log('Task complete: ' + removedItem);

console.log(todoList);
// ['Take out the trash', 'Clean the car']

console.log('Completing the first item: ' + todoList[0]);

// let's remove the first item
var doneItem = todoList.shift();

// log what we did
console.log('Task complete: ' + doneItem);

console.log(todoList);
// ['Clean the car']

//Sorting
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log('Sorting the colors array.');

colors.sort();

console.log(colors);
// ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']