/** TODO ES6: Explore Differences Between the var and let Keywords

 One of the biggest problems with declaring variables with the var keyword is that
 you can overwrite variable declarations without an error.

 var camper = 'James';
 var camper = 'David';
 console.log(camper);
 // logs 'David'
 As you can see in the code above, the camper variable is originally declared as
 James and then overridden to be David.

 In a small application, you might not run into this type of problem, but when your
 code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite.

 Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.

 A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword.

 If you were to replace var with let in the variable declarations of the code above, the result would be an error.

 let camper = 'James';
 let camper = 'David'; // throws an error
 This error can be seen in the console of your browser.

 So unlike var, when using let, a variable with the same name can only be declared once.

 Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

 "use strict";
 x = 3.14; // throws an error because x is not declared

 TODO Update the code so it only uses the let keyword.          */

let catName;
let quote;

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}

console.log(catTalk());

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Compare Scopes of the var and let Keywords

 When you declare a variable with the var keyword, it is declared globally, or locally
 if declared inside a function.

 The let keyword behaves similarly, but with some extra features. When you declare a variable
 with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

 For example:

 var numArray = [];
 for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
 console.log(numArray);
 // returns [0, 1, 2]
 console.log(i);
 // returns 3

 With the var keyword, i is declared globally. So when i++ is executed, it updates the
 global variable. This code is similar to the following:

 var numArray = [];
 var i;
 for (i = 0; i < 3; i++) {
  numArray.push(i);
}
 console.log(numArray);
 // returns [0, 1, 2]
 console.log(i);
 // returns 3

 This behavior will cause problems if you were to create a function and store it for later use
 inside a for loop that uses the i variable. This is because the stored function will always refer
 to the value of the updated global i variable.

 var printNumTwo;
 for (var i = 0; i < 3; i++) {
  if(i === 2){
    printNumTwo = function() {
      return i;
    };
  }
}
 console.log(printNumTwo());
 // returns 3

 As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was
 updated and the printNumTwo() returns the global i and not the value i had when the function was
 created in the for loop. The let keyword does not follow this behavior:

 'use strict';
 let printNumTwo;
 for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
 console.log(printNumTwo());
 // returns 2
 console.log(i);
 // returns "i is not defined"

 i is not defined because it was not declared in the global scope. It is only declared within the
 for loop statement. printNumTwo() returned the correct value because three different i variables with
 unique values (0, 1, and 2) were created by the let keyword within the loop statement.

 TODO Fix the code so that i declared in the if statement is a separate variable than i declared
 todo; in the first line of the function. Be certain not to use the var keyword anywhere in your code.

 todo; This exercise is designed to illustrate the difference between how var and let keywords assign
 todo; scope to the declared variable. When programming a function similar to the one used in this exercise,
 todo; it is often better to use different variable names to avoid confusion.               */

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

console.log(checkScope(2));

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Declare a Read-Only Variable with the const Keyword

 let is not the only new way to declare variables. In ES6, you can also declare variables
 using the const keyword.

 const has all the awesome features that let has, with the added bonus that variables declared
 using const are read-only. They are a constant value, which means that once a variable is assigned
 with const, it cannot be reassigned.

 "use strict"
 const FAV_PET = "Cats";
 FAV_PET = "Dogs"; // returns error

 As you can see, trying to reassign a variable declared with const will throw an error. You
 should always name variables you don't want to reassign using the const keyword. This helps
 when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice
 when naming constants is to use all uppercase letters, with words separated by an underscore.

 TODO Change the code so that all variables are declared using let or const. Use let
 todo; when you want the variable to change, and const when you want the variable to remain constant.
 todo; Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.  */

function printManyTimes(str) {
    "use strict";

    // change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // change code above this line

}

console.log(printManyTimes("freeCodeCamp"));

/* *******************************************************************************
****************************************************************************** */


/** TODO ES6: Mutate an Array Declared with const

 The const declaration has many use cases in modern JavaScript.

 Some developers prefer to assign all their variables using const by default, unless they know
 they will need to reassign the value. Only in that case, they use let.

 However, it is important to understand that objects (including arrays and functions) assigned to a
 variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

 "use strict";
 const s = [5, 6, 7];
 s = [1, 2, 3]; // throws error, trying to assign a const
 s[2] = 45; // works just as it would with an array declared with var or let
 console.log(s); // returns [5, 6, 45]

 As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point
 to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because
 const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

 /** TODO An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.  */

const s = [5, 7, 2];

function editInPlace(s) {
    "use strict";
    // change code below this line
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    // change code above this line
}

console.log(editInPlace(s));

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Prevent Object Mutation

 As seen in the previous challenge, const declaration alone doesn't really protect your data
 from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

 Once the object is frozen, you can no longer add, update, or delete properties from it. Any
 attempt at changing the object will be rejected without an error.

 let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
 Object.freeze(obj);
 obj.review = "bad"; //will be ignored. Mutation not allowed
 obj.newProp = "Test"; // will be ignored. Mutation not allowed
 console.log(obj);

 // { name: "FreeCodeCamp", review:"Awesome"}

 TODO In this challenge you are going to use Object.freeze to prevent mathematical constants from changing.
 todo; You need to freeze the MATH_CONSTANTS object so that no one is able alter the value of PI, add, or delete properties. */

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // change code below this line
    Object.freeze(MATH_CONSTANTS);

    // change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Use Arrow Functions to Write Concise Anonymous Functions

 In JavaScript, we often don't need to name our functions, especially when passing a
 function as an argument to another function. Instead, we create inline functions. We don't
 need to name these functions because we do not reuse them anywhere else.

 To achieve this, we often use the following syntax:

 const myFunc = function() {
  const myVar = "value";
  return myVar;
}
 ES6 provides us with the syntactic sugar to not have to write anonymous functions this way.
 Instead, you can use arrow function syntax:

 const myFunc = () => {
  const myVar = "value";
  return myVar;
}
 When there is no function body, and only a return value, arrow function syntax allows you to
 omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller
 functions into one-line statements:

 const myFunc = () => "value"
 This code will still return value by default.

 TODO Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax.
 todo; Also make sure nothing is defined using the keyword var.

 var magic = function() {
    "use strict";
    return new Date();
};          */

const magic = () => {
    "use strict";
    return new Date();
};

console.log(magic());

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Write Arrow Functions with Parameters

 Just like a normal function, you can pass arguments into arrow functions.

 // doubles input value and returns it
 const doubler = (item) => item * 2;

 You can pass more than one argument into arrow functions as well.

 TODO Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax. */

const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Write Higher Order Arrow Functions

 It's time we see how powerful arrow functions are when processing data.

 Arrow functions work really well with higher order functions, such as map(), filter(), and reduce(),
 that take other functions as arguments for processing collections of data.

 Read the following code:

 FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
 We have written this with filter() to at least make it somewhat readable. Now compare it to the following
 code which uses arrow function syntax instead:

 FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
 This code is more succinct and accomplishes the same task with fewer lines of code.

 TODO Use arrow function syntax to compute the square of only the positive integers (decimal
 todo; numbers are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.      */

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    // change code below this line
    const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num, 2));
    // change code above this line
    return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/* *******************************************************************************
****************************************************************************** */
//Practice write order function
const onlyInterger = [4, 1.1, 3.3, 3];

const squareLists = (arr) => {
    const squaredInteger = arr.filter((num) => num % parseInt(num) === 0).map((num) => Math.pow(num, 2));
    return squaredInteger;
};
const squaredInteger = squareLists(onlyInterger);
console.log(squaredInteger);
/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Set Default Parameters for Your Functions

 In order to help us create more flexible functions, ES6 introduces default parameters for functions.

 Check out this code:

 function greeting(name = "Anonymous") {
  return "Hello " + name;
}
 console.log(greeting("John")); // Hello John
 console.log(greeting()); // Hello Anonymous
 The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above,
 the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You
 can add default values for as many parameters as you want.

 TODO Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.     */

const increment = (function () {
    "use strict";
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Use the Rest Operator with Function Parameters

 In order to help us create more flexible functions, ES6 introduces the rest operator for function parameters. With the rest
 operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that
 can be accessed later from inside the function.

 Check out this code:

 function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
 console.log(howMany(0, 1, 2)); // You have passed 3 arguments
 console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

 The rest operator eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

 TODO Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters.     */

const sum = (function () {
    "use strict";
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Use the Spread Operator to Evaluate Arrays In-Place

 ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

 The ES5 code below uses apply() to compute the maximum value in an array:

 var arr = [6, 89, 3, 45];
 var maximus = Math.max.apply(null, arr); // returns 89

 We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.

 The spread operator makes this syntax much better to read and maintain.

 const arr = [6, 89, 3, 45];
 const maximus = Math.max(...arr); // returns 89

 ...arr returns an unpacked array. In other words, it spreads the array.

 However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

 const spreaded = ...arr; // will throw a syntax error

 TODO Copy all contents of arr1 into another array arr2 using the spread operator.          */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
console.log(arr2);

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Use Destructuring Assignment to Assign Variables from Objects

 We saw earlier how spread operator can effectively spread, or unpack, the contents of the array.

 We can do something similar with objects as well. Destructuring assignment is special syntax for
 neatly assigning values taken directly from an object to variables.

 Consider the following ES5 code:

 var voxel = {x: 3.6, y: 7.4, z: 6.54 };
 var x = voxel.x; // x = 3.6
 var y = voxel.y; // y = 7.4
 var z = voxel.z; // z = 6.54
 Here's the same assignment statement with ES6 destructuring syntax:

 const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
 If instead you want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, you have that freedom as well.

 const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54
 You may read it as "get the field x and copy the value into a," and so on.

 TODO Use destructuring to obtain the average temperature for tomorrow from the input object
 todo; AVG_TEMPERATURES, and assign value with key tomorrow to tempOfTomorrow in line. */

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const {tomorrow: tempOfTomorrow} = avgTemperatures;// change this line
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

/* *******************************************************************************
****************************************************************************** */

/** TODO ES6: Use Destructuring Assignment to Assign Variables from Nested Objects

 We can similarly destructure nested objects into variables.

 Consider the following code:

 const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
 const { start : { x: startX, y: startY }} = a;
 console.log(startX, startY); // 5, 6

 In the example above, the variable start is assigned the value of a.start, which is also an object.

 TODO Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.   */

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const {tomorrow: {max: maxOfTomorrow}} = forecast; // change this line
    // change code above this line
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Use Destructuring Assignment to Assign Variables from Arrays

 ES6 makes destructuring arrays as easy as destructuring objects.

 One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

 Destructuring an array lets us do exactly that:

 const [a, b] = [1, 2, 3, 4, 5, 6];
 console.log(a, b); // 1, 2

 The variable a is assigned the first value of the array, and b is assigned the second value of the array.

 We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

 const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
 console.log(a, b, c); // 1, 2, 5

 TODO Use destructuring assignment to swap the values of a and b so that a receives the value
 todo; stored in b, and b receives the value stored in a.           */

let a = 8, b = 6;
(() => {
    "use strict";
    // change code below this line
    [a, b] = [b, a];
    // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
 In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

 The result is similar to Array.prototype.slice(), as shown below:

 const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
 console.log(a, b); // 1, 2
 console.log(arr); // [3, 4, 5, 7]
 Variables a and b take the first and second values from the array. After that, because of rest operator's presence, arr gets rest of the values in the form of an array.

 The rest element only works correctly as the last variable in the list. As in, you cannot use the rest operator to catch a subarray that leaves out last element of the original array.


 TODO Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice()
 todo; so that arr is a sub-array of the original array source with the first two elements omitted.         */

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    const [a, b, ...arr] = source; // change this
    // change code above this line
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters

 In some cases, you can destructure the object in a function argument itself.

 Consider the code below:

 const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
 This effectively destructures the object sent into the function. This can also be done in-place:

 const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */

/**This removes some extra lines and makes our code look neat.

 This has the added benefit of not having to manipulate an entire object in a function;
 only the fields that are needed are copied inside the function.

 TODO Use destructuring assignment within the argument to the function half to send only max and min inside the function.   */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    "use strict"; // do not change this line

    // change code below this line
    return function half({max, min}) {
        // use function argument destructuring
        return (max + min) / 2.0;
    };
    // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Create Strings using Template Literals

 A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

 Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

 Consider the code below:

 const person = {
  name: "Zodiac Hasbro",
  age: 56
};

 // Template literal with multi-line and string interpolation
 const greeting = `Hello, my name is ${person.name}!
 I am ${person.age} years old.`;

 console.log(greeting); // prints
 // Hello, my name is Zodiac Hasbro!
 // I am 56 years old.
 A lot of things happened there.

 Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string.

 Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings.

 The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}.

 This new way of creating strings gives you more flexibility to create robust strings.

 TODO Use template literal syntax with backticks to display each entry of the result object's failure array.
 todo; Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray. */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";

    // change code below this line
    const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>`,
        `<li class="text-warning">${arr[2]}</li>`];
    // change code above this line

    return resultDisplayArray;
}

/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.skipped);

console.log(resultDisplayArray);
/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Write Concise Object Literal Declarations Using Simple Fields

 ES6 adds some nice support for easily defining object literals.

 Consider the following code:

 const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

 getMousePosition is a simple function that returns an object containing two fields.

 ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply
 write x once, and it will be converted tox: x (or something equivalent) under the hood.

 Here is the same function from above rewritten to use this new syntax:

 const getMousePosition = (x, y) => ({ x, y });

 TODO Use simple fields with object literals to create and return a Person object.  */

const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return createPerson => ({name, age, gender});
    // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Write Concise Declarative Functions with ES6

 When defining functions within objects in ES5, we have to use the keyword function as follows:

 const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
 With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

 const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

 TODO Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.  */

// change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Use class Syntax to Define a Constructor Function

 ES6 provides a new syntax to help create objects, using the keyword class.

 This is to be noted, that the class syntax is just a syntax, and not a full-fledged class based implementation of
 object oriented paradigm, unlike in languages like Java, or Python, or Ruby etc.

 In ES5, we usually define a constructor function, and use the new keyword to instantiate an object.

 var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
 var zeus = new SpaceShuttle('Jupiter');
 The class syntax simply replaces the constructor function creation:

 class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
 const zeus = new SpaceShuttle('Jupiter');
 Notice that the class keyword declares a new function, and a constructor was added, which would be invoked when new
 is called - to create a new object.

 TODO Use class keyword and write a proper constructor to create the Vegetable class.

 TODO The Vegetable lets you create a vegetable object, with a property name, to be passed to constructor.      */

function makeClass() {
    "use strict";

    /* Alter code below this line */
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }

    /* Alter code above this line */
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Use getters and setters to Control Access to an Object

 You can obtain values from an object, and set a value of a property within an object.

 These are classically called getters and setters.

 Getter functions are meant to simply return (get) the value of an object's private variable to the user
 without the user directly accessing the private variable.

 Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into
 the setter function. This change could involve calculations, or even overwriting the previous value completely.

 class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
 const lol = new Book('anonymous');
 console.log(lol.writer);  // anonymous
 lol.writer = 'wut';
 console.log(lol.writer);  // wut

 todo; Notice the syntax we are using to invoke the getter and setter - as if they are not even functions.

 todo; Getters and setters are important, because they hide internal implementation details.

 todo; Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

 todo; Now create getter and setter in the class, to obtain the temperature in Celsius scale.

 todo; Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C
 todo; is the value of the same temperature in Celsius scale

 todo; Note

 todo; When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.

 todo; This is the power of getter or setter - you are creating an API for another user, who would get
 todo; the correct result, no matter which one you track.

 todo; In other words, you are abstracting implementation details from the consumer.            */

function makeClass() {
    "use strict";

    /* Alter code below this line */
    class Thermostat {
        constructor(Fahrenheit) {
            this.Fahrenheit = Fahrenheit;
        }

        get temperature() {
            return 5 / 9 * (this.Fahrenheit - 32);
        }

        set temperature(celsius) {
            this.Fahrenheit = celsius * 9.0 / 5 + 32;
        }
    }

    /* Alter code above this line */
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

console.log(thermos);
console.log(temp);

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Understand the Differences Between import and require

 In the past, the function require() would be used to import the functions and code in external files
 and modules. While handy, this presents a problem: some files and modules are rather large, and you may
 only need certain code from those external resources.

 ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file to
 load into a given file, saving time and memory.

 Consider the following example. Imagine that math_array_functions has about 20 functions, but I only need one,
 countItems, in my current file. The old require() approach would force me to bring in all 20 functions. With this
 new import syntax, I can bring in just the desired function, like so:

 import { countItems } from "math_array_functions"
 A description of the above code:

 import { function } from "file_path_goes_here"
 // We can also import variables the same way!

 There are a few ways to write an import statement, but the above is a very common use-case.

 Note
 The whitespace surrounding the function inside the curly braces is a best practice - it makes
 it easier to read the import statement.

 Note
 The lessons in this section handle non-browser features. import, and the statements we introduce in the
 rest of these lessons, won't work on a browser directly. However, we can use various tools to create code out
 of this to make it work in browser.

 Note
 In most cases, the file path requires a ./ before it; otherwise, node will look in the node_modules directory
 first trying to load it as a dependency.

 todo; Add the appropriate import statement that will allow the current file to use the capitalizeString function. The file where
 todo; this function lives is called "string_functions", and it is in the same directory as the current file.           */

"use strict";
// import { capitalizeString } from "string_functions";

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Use export to Reuse a Code Block

 In the previous challenge, you learned about import and how it can be leveraged to import small amounts of
 code from large files. In order for this to work, though, we must utilize one of the statements that goes with
 import, known as export. When we want some code - a function, or a variable - to be usable in another file, we
 must export it in order to import it into another file. Like import, export is a non-browser feature.

 The following is what we refer to as a named export. With this, we can import any code we export into another
 file with the import syntax you learned in the last lesson. Here's an example:

 const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
 export { capitalizeString } //How to export functions.
 export const foo = "bar"; //How to export variables.

 Alternatively, if you would like to compact all your export statements into one line, you can take this approach:

 const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
 const foo = "bar";
 export { capitalizeString, foo }

 Either approach is perfectly acceptable.

 TODO Below are two variables that I want to make available for other files to use.
 todo; Utilizing the first way I demonstrated export, export the two variables.         */

"use strict";
// export const foo = "bar";
// export const bar = "foo";

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Use * to Import Everything from a File

 Suppose you have a file that you wish to import all of its contents into the current file. This can be done with the import * syntax.

 Here's an example where the contents of a file named "math_functions" are imported into a file in the same directory:

 import * as myMathModule from "math_functions";
 myMathModule.add(2,3);
 myMathModule.subtract(5,3);

 And breaking down that code:

 import * as object_with_name_of_your_choice from "file_path_goes_here"
 object_with_name_of_your_choice.imported_function

 You may use any name following the import * as portion of the statement. In order to utilize this method, it requires
 an object that receives the imported values. From here, you will use the dot notation to call your imported values.

 TODO The code below requires the contents of a file, "capitalize_strings", found in the same directory as it, imported.
 todo; Add the appropriate import * statement to the top of the file, using the object provided.        */

"use strict";
// import * as Kevin from "capitalize_strings";

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Create an Export Fallback with export default

 In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple
 functions and variables available for use in other files.

 There is another export syntax you need to know, known as export default. Usually you will use this syntax if only
 one value is being exported from a file. It is also used to create a fallback value for a file or module.

 Here is a quick example of export default:

 export default function add(x,y) {
  return x + y;
}
 Note: Since export default is used to declare a fallback value for a module or file, you can only have one value
 be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

 TODO The following function should be the fallback value for the module. Please add the necessary code to do so.       */

"use strict";
// export default function subtract(x,y) {return x - y;}

/* *******************************************************************************
****************************************************************************** */

/**TODO ES6: Import a Default Export

 In the last challenge, you learned about export default and its uses. It is important to note that, to import a
 default export, you need to use a different import syntax.

 In the following example, we have a function, add, that is the default export of a file, "math_functions".
 Here is how to import it:

 import add from "math_functions";
 add(5,4); //Will return 9
 The syntax differs in one key place - the imported value, add, is not surrounded by curly braces, {}. Unlike exported
 values, the primary method of importing a default export is to simply write the value's name after import.

 TODO In the following code, please import the default export, subtract, from the file "math_functions", found in the
 todo; same directory as this file.            */

"use strict";
// import subtract from "math_functions";

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Using the Test Method

 Regular expressions are used in programming languages to match parts of strings. You create
 patterns to help you do that matching.

 If you want to find the word "the" in the string "The dog chased the cat", you could use the following
 regular expression: /the/. Notice that quote marks are not required within the regular expression.

 JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test()
 method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or
 false if your pattern finds something or not.

 let testStr = "freeCodeCamp";
 let testRegex = /Code/;
 testRegex.test(testStr);
 // Returns true

 TODO Apply the regex myRegex on the string myString using the .test() method.      */

let myString = "Hello, World!";
let myRegex = /Hello/;
let regexResult = myRegex.test(myString); // Change this line
console.log(regexResult);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Literal Strings

 In the last challenge, you searched for the word "Hello" using the regular expression /Hello/.
 That regex searched for a literal match of the string "Hello". Here's another example searching for
 a literal match of the string "Kevin":

 let testStr = "Hello, my name is Kevin.";
 let testRegex = /Kevin/;
 testRegex.test(testStr);
 // Returns true

 Any other forms of "Kevin" will not match. For example, the regex /Kevin/ will not match "kevin" or "KEVIN".

 let wrongRegex = /kevin/;
 wrongRegex.test(testStr);
 // Returns false

 A future challenge will show how to match those other forms as well.

 TODO Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.           */

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let resultWaldo = waldoRegex.test(waldoIsHiding);
console.log(resultWaldo);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match a Literal String with Different Possibilities

 Using regexes like /coding/, you can look for the pattern "coding" in another string.

 This is powerful to search single strings, but it's limited to only one pattern. You can search for
 multiple patterns using the alternation or OR operator: |.

 This operator matches patterns either before or after it. For example, if you wanted to match "yes" or
 "no", the regex you want is /yes|no/.

 You can also search for more than just two patterns. You can do this by adding more patterns with more OR
 operators separating them, like /yes|no|maybe/.

 TODO Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".            */

let petString = "James has a pet cat.";
let petRegex = /dog|bear|bird|fish/; // Change this line
let resultPet = petRegex.test(petString);
console.log(resultPet);

/* *******************************************************************************
****************************************************************************** */

