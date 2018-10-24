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

 One key difference between the spread operator and array destructuring is that the spread operator unpacks all
 contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you
 want to assign to variables.

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
 Variables a and b take the first and second values from the array. After that, because of rest operator's presence,
 arr gets rest of the values in the form of an array.

 The rest element only works correctly as the last variable in the list. As in, you cannot use the rest operator to
 catch a subarray that leaves out last element of the original array.


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

/**TODO Regular Expressions: Ignore Case While Matching

 Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want
 to also match case differences.

 Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of
 uppercase are "A", "B", and "C". Examples of lowercase are "a", "b", and "c".

 You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that
 ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i.
 This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".

 TODO Write a regex fccRegex to match "freeCodeCamp", no matter its case. Your regex should not match
 todo; any abbreviations or variations with spaces.         */

let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let resultFcc = fccRegex.test(myString1);

console.log(resultFcc);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Extract Matches

 So far, you have only been checking if a pattern exists or not within a string. You can also extract the
 actual matches you found with the .match() method.

 To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:

 "Hello, World!".match(/Hello/);
 // Returns ["Hello"]
 let ourStr = "Regular expressions";
 let ourRegex = /expressions/;
 ourStr.match(ourRegex);
 // Returns ["expressions"]

 TODO Apply the .match() method to extract the word coding.     */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let resultExtractStr = extractStr.match(codingRegex); // Change this line
console.log(resultExtractStr);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Find More Than the First Match

 So far, you have only been able to extract or search a pattern once.

 let testStr = "Repeat, Repeat, Repeat";
 let ourRegex = /Repeat/;
 testStr.match(ourRegex);
 // Returns ["Repeat"]

 To search or extract a pattern more than once, you can use the g flag.

 let repeatRegex = /Repeat/g;
 testStr.match(repeatRegex);
 // Returns ["Repeat", "Repeat", "Repeat"]

 TODO Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.

 todo; Note
 todo; You can have multiple flags on your regex like /search/gi            */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let resultTwinkle = twinkleStar.match(starRegex); // Change this line
console.log(resultTwinkle);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Anything with Wildcard Period

 Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words
 that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

 The wildcard character . will match any one character. The wildcard is also called dot and period. You can use
 the wildcard character just like any other character in the regex. For example, if you wanted to match "hug", "huh",
 "hut", and "hum", you can use the regex /hu./ to match all four words.

 let humStr = "I'll hum a song";
 let hugStr = "Bear hug";
 let huRegex = /hu./;
 humStr.match(huRegex); // Returns ["hum"]
 hugStr.match(huRegex); // Returns ["hug"]

 TODO Complete the regex unRegex so that it matches the strings "run", "sun", "fun",
 todo; "pun", "nun", and "bun". Your regex should use the wildcard character.           */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let resultExampleStr = unRegex.test(exampleStr);
console.log(resultExampleStr);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Single Character with Multiple Possibilities

 You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes
 of regular expressions, where one finds exact matches and the other matches everything. There are options
 that are a balance between the two extremes.

 You can search for a literal pattern with some flexibility with character classes. Character classes allow you
 to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

 For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this.
 The [aiu] is the character class that will only match the characters "a", "i", or "u".

 let bigStr = "big";
 let bagStr = "bag";
 let bugStr = "bug";
 let bogStr = "bog";
 let bgRegex = /b[aiu]g/;
 bigStr.match(bgRegex); // Returns ["big"]
 bagStr.match(bgRegex); // Returns ["bag"]
 bugStr.match(bgRegex); // Returns ["bug"]
 bogStr.match(bgRegex); // Returns null

 TODO Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

 todo; Note
 todo; Be sure to match both upper- and lowercase vowels.           */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let resultQuoteSample = quoteSample.match(vowelRegex); // Change this line
console.log(resultQuoteSample);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Letters of the Alphabet

 You saw how you can use character sets to specify a group of characters to match, but that's a lot of
 typing when you need to match a large range of characters (for example, every letter in the alphabet).
 Fortunately, there is a built-in feature that makes this short and simple.

 Inside a character set, you can define a range of characters to match using a hyphen character: -.

 For example, to match lowercase letters a through e you would use [a-e].

 let catStr = "cat";
 let batStr = "bat";
 let matStr = "mat";
 let bgRegex = /[a-e]at/;
 catStr.match(bgRegex); // Returns ["cat"]
 batStr.match(bgRegex); // Returns ["bat"]
 matStr.match(bgRegex); // Returns null

 TODO Match all the letters in the string quoteSample.

 todo; Note
 todo; Be sure to match both upper- and lowercase letters.          */

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let resultAlphabetRegex = quoteSample1.match(alphabetRegex); // Change this line
console.log(resultAlphabetRegex);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Numbers and Letters of the Alphabet

 Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

 For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

 Also, it is possible to combine a range of letters and numbers in a single character set.

 let jennyStr = "Jenny8675309";
 let myRegex = /[a-z0-9]/ig;
 // matches all letters and numbers in jennyStr
 jennyStr.match(myRegex);

 TODO Create a single regex that matches a range of letters between h and s, and a range of numbers
 todo; between 2 and 6. Remember to include the appropriate flags in the regex.         */

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi; // Change this line
let resultNumAndLetter = quoteSample2.match(myRegex1); // Change this line
console.log(resultNumAndLetter);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Single Characters Not Specified

 So far, you have created a set of characters that you want to match, but you could also create a set of characters
 that you do not want to match. These types of character sets are called negated character sets.

 To create a negated character set, you place a caret character (^) after the opening bracket and before the
 characters you do not want to match.

 For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and
 white space are matched - the negated vowel character set only excludes the vowel characters.

 TODO Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.       */

let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi; // Change this line
let resultCharNotSpec = quoteSample3.match(myRegex2); // Change this line
console.log(resultCharNotSpec);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Characters that Occur One or More Times

 Sometimes, you need to match a character (or group of characters) that appears one or more times in a row.
 This means it occurs at least once, and may be repeated.

 You can use the + character to check if that is the case. Remember, the character or pattern has to be present
 consecutively. That is, the character has to repeat one after the other.

 For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single
 match in "aabc" and return ["aa"].

 If it were instead checking the string "abab", it would find two matches and return ["a", "a"] because the a characters
 are not in a row - there is a b between them. Finally, since there is no "a" in the string "bcd", it wouldn't find a match.

 TODO You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.     */

let difficultSpelling = "Mississippi";
let myRegex3 = /s+/gi; // Change this line
let resultDifficultSpelling = difficultSpelling.match(myRegex3);
console.log(resultDifficultSpelling);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Characters that Occur Zero or More Times

 The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option
 that matches characters that occur zero or more times.

 The character to do this is the asterisk or star: *.

 let soccerWord = "gooooooooal!";
 let gPhrase = "gut feeling";
 let oPhrase = "over the moon";
 let goRegex = /go*/;
/**
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

 TODO Create a regex chewieRegex that uses the * character to match all the upper and lower"a"
 todo; characters in chewieQuote. Your regex does not need flags, and it should not match any of the other quotes.      */

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let resultChewieQuote = chewieQuote.match(chewieRegex);
console.log(resultChewieQuote);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Find Characters with Lazy Matching

 In regular expressions, a greedy match finds the longest possible part of a string that fits
 the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest
 possible part of the string that satisfies the regex pattern.

 You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t,
 ends with i, and has some letters in between.

 Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string
 possible to fit the pattern.

 However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted
 regex of /t[a-z]*?i/ returns ["ti"].

 todo;Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
 todo; Remember the wildcard . in a regular expression matches any character.           */

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; // Change this line
let resultLazyRegex = text.match(myRegex4);
console.log(resultLazyRegex);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Find One or More Criminals in a Hunt

 Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran
 away, but you don't know how many. However, you do know that they stay close together when they are around other
 people. You are responsible for finding all of the criminals at once.

 Here's an example to review how to do this:

 The regex /z+/ matches the letter z when it appears one or more times in a row. It would find
 matches in all of the following strings:

 "z"
 "zzzzzz"
 "ABCzzzz"
 "zzzzABC"
 "abczzzzzzzzzzzzzzzzzzzzzabc"
 But it does not find matches in the following strings since there are no letter z characters:

 ""
 "ABC"
 "abcabc"

 TODO Write a greedy regex that finds one or more criminals within a group of other people. A criminal
 todo; is represented by the capital letter C.          */

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/g; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Beginning String Patterns

 Prior challenges showed that regular expressions can be used to look for a number of matches. They
 are also used to search for patterns in specific positions in strings.

 In an earlier challenge, you used the caret character (^) inside a character set to create a negated
 character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to
 search for patterns at the beginning of strings.

 let firstString = "Ricky is first and can be found.";
 let firstRegex = /^Ricky/;
 firstRegex.test(firstString);
 // Returns true
 let notFirst = "You can't find Ricky now.";
 firstRegex.test(notFirst);
 // Returns false

 TODO Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.     */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let resultRickyAndCal = calRegex.test(rickyAndCal);
console.log(resultRickyAndCal);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Ending String Patterns

 In the last challenge, you learned to use the caret character to search for patterns at the beginning
 of strings. There is also a way to search for patterns at the end of strings.

 You can search the end of strings using the dollar sign character $ at the end of the regex.

 let theEnding = "This is a never ending story";
 let storyRegex = /story$/;
 storyRegex.test(theEnding);
 // Returns true
 let noEnding = "Sometimes a story will have to end";
 storyRegex.test(noEnding);
 // Returns false

 TODO Use the anchor character ($) to match the string "caboose" at the end of the string caboose.      */

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let resultLastRegex = lastRegex.test(caboose);
console.log(resultLastRegex);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match All Letters and Numbers

 Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character
 class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

 The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This
 character class matches upper and lowercase letters plus numbers. Note, this character class also
 includes the underscore character (_).

 let longHand = /[A-Za-z0-9_]+/;
 let shortHand = /\w+/;
 let numbers = "42";
 let varNames = "important_var";
 longHand.test(numbers); // Returns true
 shortHand.test(numbers); // Returns true
 longHand.test(varNames); // Returns true
 shortHand.test(varNames); // Returns true
 These shortcut character classes are also known as shorthand character classes.

 TODO Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.    */

let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let resultWShortcut = quoteSample4.match(alphabetRegexV2).length;
console.log(resultWShortcut);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Everything But Letters and Numbers

 You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern
 you might want to search for is the opposite of alphanumerics.

 You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This
 shortcut is the same as [^A-Za-z0-9_].

 let shortHand = /\W/;
 let numbers = "42%";
 let sentence = "Coding!";
 numbers.match(shortHand); // Returns ["%"]
 sentence.match(shortHand); // Returns ["!"]

 TODO Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.    */

 let quoteSample5 = "The five boxing wizards jump quickly.";
 let nonAlphabetRegex = /\W/g; // Change this line
 let resultNonWShortcut = quoteSample5.match(nonAlphabetRegex).length;
 console.log(resultNonWShortcut);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match All Numbers

 You've learned shortcuts for common string patterns like alphanumerics. Another common pattern
 is looking for just digits or numbers.

 The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character
 class [0-9], which looks for a single character of any number between zero and nine.

 TODO Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count. */

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let resultAllNumbers = numString.match(numRegex).length;
console.log(resultAllNumbers);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match All Non-Numbers

 The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits
 using a similar shortcut that uses an uppercase D instead.

 The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single
 character that is not a number between zero and nine.

 TODO Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.     */

let numString1 = "Your sandwich will be $5.00";
let noNumRegex1 = /\D/g; // Change this line
let resultAllNonNumbers = numString1.match(noNumRegex1).length;
console.log(resultAllNonNumbers);


/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Restrict Possible Usernames

 Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

 You need to check all the usernames in a database. Here are some simple rules that users have
 to follow when creating their username.

 1) The only numbers in the username have to be at the end. There can be zero or more
 of them at the end.

 2) Username letters can be lowercase and uppercase.

 3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

TODO Change the regex userCheck to fit the constraints listed above.        */

 let username = "JackOfAllTrades";
 let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
 let resultRistrictPossible = userCheck.test(username);
 console.log(resultRistrictPossible);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Whitespace

 The challenges so far have covered matching letters of the alphabet and numbers. You can also match
 the whitespace or spaces between letters.

 You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but
 also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

 let whiteSpace = "Whitespace. Whitespace everywhere!"
 let spaceRegex = /\s/g;
 whiteSpace.match(spaceRegex);
 // Returns [" ", " "]

 TODO Change the regex countWhiteSpace to look for multiple whitespace characters in a string.      */

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let resultWhiteSpace = sample.match(countWhiteSpace);
console.log(resultWhiteSpace);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Match Non-Whitespace Characters

 You learned about searching for whitespace using \s, with a lowercase s. You can also search for
 everything except whitespace.

 Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab,
 form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

 let whiteSpace = "Whitespace. Whitespace everywhere!"
 let nonSpaceRegex = /\S/g;
 whiteSpace.match(nonSpaceRegex).length; // Returns 32

 TODO Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.       */

let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let resultNonWhiteSpace = sample1.match(countNonWhiteSpace);
console.log(resultNonWhiteSpace);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Specify Upper and Lower Number of Matches

 Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or
 more characters. These are convenient but sometimes you want to match a certain range of patterns.

 You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with
 curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

 For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

 let A4 = "aaaah";
 let A2 = "aah";
 let multipleA = /a{3,5}h/;
 multipleA.test(A4); // Returns true
 multipleA.test(A2); // Returns false

 TODO Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".     */

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let resultOhNo = ohRegex.test(ohStr);
console.log(resultOhNo);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Specify Only the Lower Number of Matches

 You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes
 you only want to specify the lower number of patterns with no upper limit.

 To only specify the lower number of patterns, keep the first number followed by a comma.

 For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

 let A4 = "haaaah";
 let A2 = "haah";
 let A100 = "h" + "a".repeat(100) + "h";
 let multipleA = /ha{3,}h/;
 multipleA.test(A4); // Returns true
 multipleA.test(A2); // Returns false
 multipleA.test(A100); // Returns true

 TODO Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.     */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let resultLowerNum = haRegex.test(haStr);
console.log(resultLowerNum);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Specify Exact Number of Matches

 You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes
 you only want a specific number of matches.

 To specify a certain number of patterns, just have that one number between the curly brackets.

 For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.

 let A4 = "haaaah";
 let A3 = "haaah";
 let A100 = "h" + "a".repeat(100) + "h";
 let multipleHA = /ha{3}h/;
 multipleHA.test(A4); // Returns false
 multipleHA.test(A3); // Returns true
 multipleHA.test(A100); // Returns false

 TODO Change the regex timRegex to match the word "Timber" only when it has four letter m's.        */

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // Change this line
let resultExactNumber = timRegex.test(timStr);
console.log(resultExactNumber);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Check for All or None

 Sometimes the patterns you want to search for may have parts of it that may or may not exist. However,
 it may be important to check for them nonetheless.

 You can specify the possible existence of an element with a question mark, ?. This checks for zero or one
 of the preceding element. You can think of this symbol as saying the previous element is optional.

 For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

 let american = "color";
 let british = "colour";
 let rainbowRegex= /colou?r/;
 rainbowRegex.test(american); // Returns true
 rainbowRegex.test(british); // Returns true

 TODO Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word. */

let favWord = "favorite";
let favRegex = /favou?rite/i; // Change this line
let resultAllOrNone = favRegex.test(favWord);
console.log(resultAllOrNone);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Positive and Negative Lookahead

 Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.
 This can be useful when you want to search for multiple patterns over the same string.

 There are two kinds of lookaheads: positive lookahead and negative lookahead.

 A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
 A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

 On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative
 lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned
 if the negative lookahead part is not present.

 Lookaheads are a bit confusing but some examples will help.

 let quit = "qu";
 let noquit = "qt";
 let quRegex= /q(?=u)/;
 let qRegex = /q(?!u)/;
 quit.match(quRegex); // Returns ["q"]
 noquit.match(qRegex); // Returns ["q"]

 A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that
 looks for between 3 and 6 characters and at least one number:

 let password = "abc123";
 let checkPass = /(?=\w{3,6})(?=\D*\d)/;
 checkPass.test(password); // Returns true

 TODO Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits. */

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let resultGreatThanFive = pwRegex.test(sampleWord);
console.log(resultGreatThanFive);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Reuse Patterns Using Capture Groups

 Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex.
 There is a better way to specify when you have multiple repeat substrings in your string.

 You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings.
 You put the regex of the pattern that will repeat in between the parentheses.

 To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1
 and increases with each additional capture group you use. An example would be \1 to match the first group.

 The example below matches any word that occurs twice separated by a space:

 let repeatStr = "regex regex";
 let repeatRegex = /(\w+)\s\1/;
 repeatRegex.test(repeatStr); // Returns true
 repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

 Using the .match() method on a string will return an array with the string it matches, along with its capture group.

 TODO Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space. */

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let resultCaptureGroups = reRegex.test(repeatNum);
console.log(resultCaptureGroups);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Use Capture Groups to Search and Replace

 Searching is useful. However, you can make searching even more powerful when it also changes (or replaces)
 the text you match.

 You can search and replace text in a string using .replace() on a string. The inputs for .replace()
 is first the regex pattern you want to search for. The second parameter is the string to replace the match
 or a function to do something.

 let wrongText = "The sky is silver.";
 let silverRegex = /silver/;
 wrongText.replace(silverRegex, "blue");
 // Returns "The sky is blue."

 You can also access capture groups in the replacement string with dollar signs ($).

 "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
 // Returns "Camp Code"

 TODO Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey". */

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let resultSearchAndReplace = huhText.replace(fixRegex, replaceText);
console.log(resultSearchAndReplace);

/* *******************************************************************************
****************************************************************************** */

/**TODO Regular Expressions: Remove Whitespace from Start and End

 Sometimes whitespace characters around strings are not wanted but are there. Typical processing of
 strings is to remove the whitespace at the start and end of it.

 TODO Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

 todo; Note
 todo; The .trim() method would work here, but you'll need to complete this challenge using regular expressions.        */

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let resultStartAndEnd = hello.replace(wsRegex, ''); // Change this line
console.log(resultStartAndEnd);

/* *******************************************************************************
****************************************************************************** */