/**TODO Debugging: Use the JavaScript Console to Check the Value of a Variable

 Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

 You can find Developer tools in your Chrome's menu or Web Console in FireFox's menu. If you're using a different browser,
 or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

 The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most
 helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good
 practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your
 calculations throughout your code will help narrow down where the problem is.

 Here's an example to print 'Hello world!' to the console:

 console.log('Hello world!');

 TODO Use the console.log() method to print the value of the variable a where noted in the code.        */

let a1 = 5;
let b1 = 1;
a1++;
// Add your code below this line
console.log(a1);

let sumAB = a1 + b1;
console.log(sumAB);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Understanding the Differences between the freeCodeCamp and Browser Console

 You may have noticed that some freeCodeCamp JavaScript challenges include their own console. This console
 behaves a little differently than the browser console you used in the last challenge.

 The following challenge is meant to highlight some of the differences between the freeCodeCamp console and the browser console.

 First, the browser console. When you load and run an ordinary JavaScript file in your browser the console.log()
 statements will print exactly what you tell them to print to the browser console the exact number of times you
 requested. In your in-browser text editor the process is slightly different and can be confusing at first.

 Values passed to console.log() in the text editor block run each set of tests as well as one more time for any function
 calls that you have in your code.

 This lends itself to some interesting behavior and might trip you up in the beginning, because a logged value that you expect
 to see only once may print out many more times depending on the number of tests and the values being passed to those tests.

 If you would like to see only your single output and not have to worry about running through
 the test cycles, you can use console.clear().

 TODO Use console.log() to print the variables in the code where indicated.     */

    // Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable
console.log(outputTwo);

let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once
console.clear();

// Use console.log() to print the outputOne variable
console.log(outputOne);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Use typeof to Check the Type of a Variable

 You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with
 multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be
 unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and
 working with external data in the form of a JavaScript Object Notation (JSON) object.

 Here are some examples using typeof:

 console.log(typeof ""); // outputs "string"
 console.log(typeof 0); // outputs "number"
 console.log(typeof []); // outputs "object"
 console.log(typeof {}); // outputs "object"

 JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol
 (new with ES6) and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

 TODO Add two console.log() statements to check the typeof each of the two variables seven and three in the code. */

let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line
console.log(typeof seven);
console.log(typeof three);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Catch Misspelled Variable and Function Names

 The console.log() and typeof methods are the two primary ways to check intermediate values and types
 of program output. Now it's time to get into the common forms that bugs take. One syntax-level issue that
 fast typers can commiserate with is the humble spelling error.

 Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for
 an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and
 function names are case-sensitive.

 TODO Fix the two spelling errors in the code so the netWorkingCapital calculation works.       */

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Catch Unclosed Parentheses, Brackets, Braces and Quotes

 Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have
 a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items with
 one of the pair types. Also, take care when nesting code blocks into others, such as adding a callback function
 as an argument to a method.

 One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match,
 then move the cursor back between them and continue coding. Fortunately, most modern code editors generate
 the second half of the pair automatically.

 TODO Fix the two pair errors in the code.      */

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Catch Mixed Usage of Single and Double Quotes

 JavaScript allows the use of both single ('') and double ("") quotes to declare a string. Deciding
 which one to use generally comes down to personal preference, with some exceptions.

 Having two choices is great when a string has contractions or another piece of text that's in quotes. Just
 be careful that you don't close the string too early, which causes a syntax error.

 Here are some examples of mixing quotes:

 // These are correct:
 const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
 const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
 // This is incorrect:
 const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
 Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string
 by using the backslash (\) escape character:

 // Correct use of same quotes:
 const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

 TODO Fix the string so it either uses different quotes for the href value, or escape
 todo; the existing ones. Keep the double quote marks around the entire string.         */

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Catch Use of Assignment Operator Instead of Equality Operator

 Branching programs, i.e. ones that do different things if certain conditions are met,
 rely on if, else if, and else statements in JavaScript. The condition sometimes takes the form
 of testing whether a result is equal to a value.

 This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate
 into code using the =, or assignment operator. This leads to unexpected control flow in your program.

 As covered in previous challenges, the assignment operator (=) in JavaScript assigns a value to a variable name.
 And the == and === operators check for equality (the triple === tests for strict equality, meaning both value
 and type are the same).

 The code below assigns x to be 2, which evaluates as true. Almost every value on its own in JavaScript evaluates to
 true, except what are known as the "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

 let x = 1;
 let y = 2;
 if (x = y) {
  // this code block will run for any value of y (unless y were originally set as a falsy)
} else {
  // this code block is what should run (but won't) in this example
}

 TODO Fix the condition so the program runs the right branch, and the appropriate
 todo; value is assigned to result.         */

let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Catch Missing Open and Closing Parenthesis After a Function Call

 When a function or method doesn't take any arguments, you may forget to include the (empty) opening
 and closing parentheses when calling it. Often times the result of a function call is saved in a variable for
 other use in your code. This error can be detected by logging variable values (or their types) to the console
 and seeing that one is set to a function reference, instead of the expected value the function returns.

 The variables in the following example are different:

 function myFunction() {
  return "You rock!";
}
 let varOne = myFunction; // set to equal a function
 let varTwo = myFunction(); // set to equal the string "You rock!"

 TODO Fix the code so the variable result is set to the value returned from calling the function getNine.   */

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
};

let result1 = getNine();
console.log(result1);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Catch Arguments Passed in the Wrong Order When Calling a Function

 Continuing the discussion on calling functions, the next bug to watch out for is when a function's
 arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an
 array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for
 example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper
 order to avoid these issues.

 TODO The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the
 todo; code so the value of power is the expected 8.            */

function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Catch Off By One Errors When Using Indexing

 Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a
 string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing
 starts at zero, not one, which means the last index is always one less than the length of the item. If you try
 to access an index equal to the length, the program may throw an "index out of range" reference error or print undefined.

 When you use string or array methods that take index ranges as arguments, it helps to read the documentation
 and understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are
 some examples of off by one errors:

 let alphabet = "abcdefghijklmnopqrstuvwxyz";
 let len = alphabet.length;
 for (let i = 0; i <= len; i++) {
  // loops one too many times at the end
  console.log(alphabet[i]);
}
 for (let j = 1; j < len; j++) {
  // loops one too few times and misses the first character at index 0
  console.log(alphabet[j]);
}
 for (let k = 0; k < len; k++) {
  // Goldilocks approves - this is just right
  console.log(alphabet[k]);
}

 TODO Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.      */

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Fix the line below
    for (let i = 0; i < len; i++) {
        // Do not alter code below this line
        console.log(firstFive[i]);
    }
}

console.log(countToFive());

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Use Caution When Reinitializing Variables Inside a Loop

 Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential
 issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous
 if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

 Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to
 resetting, or failing to reset a variable.

 TODO The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes.
 todo; Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back
 todo; to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which
 todo; looks like [[0, 0], [0, 0], [0, 0]].         */

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = [];
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/* *******************************************************************************
****************************************************************************** */

/**TODO Debugging: Prevent Infinite Loops with a Valid Terminal Condition

 The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block
 a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite
 loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.

 There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break
 out of the while loop inside loopy(). Do NOT call this function!

 function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}

 It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop
 code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from
 the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead
 of incrementing or decrementing it.

 TODO The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false
 todo; (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison
 todo; operator in the terminal condition so the loop only runs for i less than or equal to 4.          */

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}

console.log(myFunc());

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Use an Array to Store a Collection of Data

 The below is an example of the simplest implementation of an array data structure. This is known as a one-dimensional
 array, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains
 booleans, strings, and numbers, among other valid JavaScript data types:

 let simpleArray = ['one', 2, 'three’, true, false, undefined, null];
 console.log(simpleArray.length);
 // logs 7

 All array's have a length property, which as shown above, can be very easily accessed with the syntax Array.length.

 A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array
 that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely
 in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

 let complexArray = [
 [
 {
   one: 1,
   two: 2
 },
 {
   three: 3,
   four: 4
 }
 ],
 [
 {
   a: "a",
   b: "b"
 },
 {
   c: "c",
   d: “d”
 }
 ]
 ];

 TODO We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5
 todo; elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.        */

let yourArray = ["Kevin", 20, "Jimmy Nutron", true, "I-Heart-Bacon"]; // change this line
console.log(yourArray);

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Access an Array's Contents Using Bracket Notation

 The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able
 to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how
 we can access that array's information.

 When we define a simple array as seen below, there are 3 items in it:

 let ourArray = ["a", "b", "c"];
 In an array, each array item has an index. This index doubles as the position of that item in the array, and how you
 reference it. However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first
 element of an array is actually at the zeroth position, not the first.

 In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an
 array, or more commonly, to a variable which references an array object. This is known as bracket notation.

 For example, if we want to retrieve the "a" from ourArray and assign it to a variable, we can do so with the following code:

 let ourVariable = ourArray[0];
 // ourVariable equals "a"
 In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

 ourArray[1] = "not b anymore";
 // ourArray now equals ["a", "not b anymore", "c"];
 Using bracket notation, we have now reset the item at index 1 from "b", to "not b anymore".

 TODO In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides "b".      */

let myArray1 = ["a", "b", "c", "d"];
// change code below this line
myArray1[1] = "Sorry, b went away";
//change code above this line
console.log(myArray1);

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Add Items to an Array with push() and unshift()

 length of any number of elements, and elements can be added or removed over time; in other words, arrays are
 mutable. In this challenge, we will look at two methods with which we can programmatically modify an
 array: Array.push() and Array.unshift().

 Both methods take one or more elements as parameters and add those elements to the array the method is being
 called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning.
 Consider the following:

 let twentyThree = 'XXIII';
 let romanNumerals = ['XXI', 'XXII'];

 romanNumerals.unshift('XIX', 'XX');
 // now equals ['XIX', 'XX', 'XXI', 'XXII']

 romanNumerals.push(twentyThree);
 // now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
 Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

 TODO We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the
 todo; function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the
 todo; end so that the returned array contains representations of the numbers 1-9 in order.         */

function mixedNumbers(arr) {
    // change code below this line
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Remove Items from an Array with pop() and shift()

 Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). As you
 may have guessed by now, instead of adding, pop() removes an element from the end of an array, while shift() removes
 an element from the beginning. The key difference between pop() and shift() and their cousins push() and unshift(),
 is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

 Let's take a look:

 let greetings = ['whats up?', 'hello', 'see ya!'];

 greetings.pop();
 // now equals ['whats up?', 'hello']

 greetings.shift();
 // now equals ['hello']
 We can also return the value of the removed element with either method like this:

 let popped = greetings.pop();
 // returns 'hello'
 // greetings now equals []

 TODO We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the
 todo; function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed
 todo; elements to their corresponding variables, so that the returned array contains their values.     */

function popShift(arr) {
    let popped = arr.pop(); // change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Remove Items Using splice()

 Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what
 if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's
 where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements
 from anywhere in an array.

 splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of
 splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. And
 remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first
 parameter represents the index on the array from which to begin removing elements, while the second parameter
 indicates the number of elements to delete. For example:

 let array = ['today', 'was', 'not', 'so', 'great'];

 array.splice(2, 2);
 // remove 2 elements beginning with the 3rd element
 // array now equals ['today', 'was', 'great']
 splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

 let array = ['I', 'am', 'feeling', 'really', 'happy'];

 let newArray = array.splice(3, 2);
 // newArray equals ['really', 'happy']

 TODO We've defined a function, sumOfTen, which takes an array as an argument and returns the sum of that array's
 todo; elements. Modify the function, using splice(), so that it returns a value of 10.         */

function sumOfTen(arr) {
    // change code below this line
    let someIndex = arr.splice(1, 2);
    // change code above this line
    console.log(someIndex);
    return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Add Items Using splice()

 Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, we can go one step
 further with splice() — in addition to removing elements, we can use that third parameter, which represents one or more
 elements, to add them as well. This can be incredibly useful for quickly switching out an element, or a set of elements,
 for another. For instance, let's say you're storing a color scheme for a set of DOM elements in an array, and want to
 dynamically change a color based on some action:

 function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}

 let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

 colorScheme = colorChange(colorScheme, 2, '#332327');
 // we have removed '#bb7e8c' and added '#332327' in its place
 // colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

 This function takes an array of hex values, an index at which to remove an element, and the new color to replace
 the removed element with. The return value is an array containing a newly modified color scheme! While this example
 is a bit oversimplified, we can see the value that utilizing splice() to its maximum potential can have.

 TODO We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the
 todo; function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond'
 todo; in their respective places.          */

function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Copy Array Items Using slice()

 The next method we will cover is slice(). slice(), rather than modifying an array, copies, or extracts, a given number
 of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first
 is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will
 occur up to, but not including the element at this index). Consider this:

 let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

 let todaysWeather = weatherConditions.slice(1, 3);
 // todaysWeather equals ['snow', 'sleet'];
 // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

 In effect, we have created a new array by extracting elements from an existing array.

 todo; We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to
 todo; extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.        */

function forecast(arr) {
    // change code below this line

    return arr.slice(2, 4);
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Copy an Array with the Spread Operator

 While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks,
 ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly
 readable syntax. The spread syntax simply looks like this: ...

 In practice, we can use the spread operator to copy an array like so:

 let thisArray = [true, true, undefined, false, null];
 let thatArray = [...thisArray];
 // thatArray equals [true, true, undefined, false, null]
 // thisArray remains unchanged, and is identical to thatArray

 TODO We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function
 todo; is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't
 todo; work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have
 todo; already covered might come in handy here!).         */

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // change code below this line
        newArr.push([...arr]);
        // change code above this line
        num--;
    }
    return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Combine Arrays with the Spread Operator

 Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of
 one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only
 allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation
 extremely simple:

 let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

 let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
 // thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
 Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

 TODO We have defined a function spreadOut that returns the variable sentence, modify the function using the
 todo; spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].        */

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
    return sentence;
}

// do not change code below this line
console.log(spreadOut());

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Check For The Presence of an Element With indexOf()

 Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece
 of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with
 another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element
 on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of
 that element, or -1 if the element does not exist on the array.

 For example:

 let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

 fruits.indexOf('dates') // returns -1
 fruits.indexOf('oranges') // returns 2
 fruits.indexOf('pears') // returns 1, the first index at which the element exists

 todo| indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have
 todo| defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf()
 todo| so that it returns true if the passed element exists on the array, and false if it does not.     */

function quickCheck(arr, elem) {
    // change code below this line
    return arr.indexOf(elem) >= 0 ? true : false;
    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Iterate Through All an Array's Items Using For Loops

 Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more
 elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria.
 JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different
 results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the
 greatest amount of control is a simple for loop.

 Consider the following:

 function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

 greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
 // returns [12, 14, 80]

 Using a for loop, this function iterates through and accesses each element of the array, and subjects it to a simple
 test that we have created. In this way, we have easily and programmatically determined which data items are greater
 than 10, and returned a new array containing those items.


 todo | We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a
 todo | new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr.
 todo | Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested
 todo | within arr containing elem has been removed.            */

function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
        ;
    }
    ;
    // change code above this line
    return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Create complex multi-dimensional arrays

 Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, and there is
 plenty more to learn about working with arrays, much of which you will see in later sections. But before moving
 on to looking at Objects, lets take one more look, and see how arrays can become a bit more complex than what
 we have seen in previous challenges.

 One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or
 even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but
 fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with
 their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data
 structure, known as a multi-dimensional, or nested array. Consider the following example:

 let nestedArray = [ // top, or first level - the outer most array
 ['deep'], // an array within an array, 2 levels of depth
 [
 ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
 ],
 [
 [
 ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
 ],
 [
 [
 ['deepest-est?'] // an array nested 5 levels deep
 ]
 ]
 ]
 ];

 While this example may seem convoluted, this level of complexity is not unheard of, or even unusual,
 when dealing with large amounts of data.

 However, we can still very easily access the deepest levels of an array this complex with bracket notation:

 console.log(nestedArray[2][1][0][0][0]);
 // logs: deepest-est?
 And now that we know where that piece of data is, we can reset it if we need to:

 nestedArray[2][1][0][0][0] = 'deeper still';

 console.log(nestedArray[2][1][0][0][0]);
 // now logs: deeper still

 TODO | We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any
 TODO | combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of
 TODO | depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the
 TODO | fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.        */

let myNestedArray = [
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ["deep"]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]]]
];
// change code above this line
console.log(myNestedArray);

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Add Key-Value Pairs to JavaScript Objects

 At their most basic, objects are just collections of key-value pairs, or in other words, pieces of data mapped to
 unique identifiers that we call properties or keys. Let's take a look at a very simple example:

 let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};
 The above code defines an object called FCC_User that has four properties, each of which map to a specific value.
 If we wanted to know the number of followers FCC_User has, we can access that property by writing:

 let userData = FCC_User.followers;
 // userData equals 572
 This is called dot notation. Alternatively, we can also access the property with brackets, like so:

 let userData = FCC_User['followers']
 // userData equals 572
 Notice that with bracket notation, we enclosed followers in quotes. This is because the brackets actually allow us to
 pass a variable in to be evaluated as a property name (hint: keep this in mind for later!). Had we passed followers in
 without the quotes, the JavaScript engine would have attempted to evaluate it as a variable, and a ReferenceError:
 followers is not defined would have been thrown.

 TODO Using the same syntax, we can also add new key-value pairs to objects. We've created a foods object with three entries.
 todo; Add three more entries: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.      */

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// change code below this line
foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;
// change code above this line

console.log(foods);

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Modify an Object Nested Within an Object

 Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and
 their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:

 let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};

 nestedObject has three unique keys: id, whose value is a number, date whose value is a string, and data, whose
 value is an object which has yet another object nested within it. While structures can quickly become complex, we can
 still use the same notations to access the information we need.

 TODO Here we've defined an object, userActivity, which includes another object nested within it. You can modify
 todo properties on this nested object in the same way you modified properties in the last challenge. Set the value of the online key to 45.        */

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Access Property Names with Bracket Notation

 In the first object challenge we mentioned the use of bracket notation as a way to access property values using the
 evaluation of a variable. For instance, imagine that our foods object is being used in a program for a supermarket cash
 register. We have some function that sets the selectedFood and we want to check our foods object for the presence of
 that food. This might look like:

 let selectedFood = getCurrentFood(scannedItem);
 let inventory = foods[selectedFood];

 This code will evaluate the value stored in the selectedFood variable and return the value of that key in the foods
 object, or undefined if it is not present. Bracket notation is very useful because sometimes object properties are not
 known before runtime or we need to access them in a more dynamic way.

 TODO We've defined a function, checkInventory, which receives a scanned item as an argument. Return the
 TODO current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided
 TODO as an argument to checkInventory.         */

let foods1 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// do not change code above this line

function checkInventory(scannedItem) {
    // change code below this line
    return foods1[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Use the delete Keyword to Remove Object Properties

 Now you know what objects are and their basic features and advantages. In short, they are key-value stores which
 provide a flexible, intuitive way to structure data, and, they provide very fast lookup time. Throughout the rest of
 these challenges, we will describe several common operations you can perform on objects so you can become comfortable
 applying these useful data structures in your programs.

 In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can
 remove a key-value pair from an object.

 Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using
 the delete keyword like this:

 delete foods.apples;

 TODO Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.     */

let foods2 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// change code below this line
delete foods2.oranges;
delete foods2.plums;
delete foods2.strawberries;
// change code above this line

console.log(foods2);

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Check if an Object has a Property

 Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a
 specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method
 and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its
 presence in either of the following ways:

 users.hasOwnProperty('Alan');
 'Alan' in users;
 // both return true

 TODO We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users
 TODO object to as an argument. Finish writing this function so that it returns true only if the users object contains all
 TODO four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.            */

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    // change code below this line
    if (users.hasOwnProperty("Alan", "Jeff", "Sarah", "Ryan")) {
        return true;
    }
    return false;
    // change code above this line
}

console.log(isEveryoneHere(users));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement

 Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in
 JavaScript called a for...in statement. For our users object, this could look like:

 for (let user in users) {
  console.log(user);
};

 // logs:
 Alan
 Jeff
 Sarah
 Ryan
 In this statement, we defined a variable user, and as you can see, this variable was reset during each iteration
 to each of the object's keys as the statement looped through the object, resulting in each user's name being
 printed to the console.

 NOTE:
 Objects do not maintain an ordering to stored keys like arrays do; thus a keys position on an object, or the relative
 order in which it appears, is irrelevant when referencing or accessing that key.

 TODO We've defined a function, countOnline; use a for...in statement within this function to loop through
 TODO the users in the users object and return the number of users whose online property is set to true.        */

let users1 = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {
    let count = 0;
    // change code below this line
    for (let name in users1) {
        if (users1[name].online === true) {
            count++;
        }
    }
    return count;
    // change code above this line
}

console.log(countOnline(users1));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Generate an Array of All Object Keys with Object.keys()

 We can also generate an array which contains all the keys stored in an object using the Object.keys() method and
 passing in an object as the argument. This will return an array with strings representing each property in the object.
 Again, there will be no specific order to the entries in the array.

 TODO Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in
 todo; the object it receives as an argument.       */

let users2 = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // change code below this line
    return Object.keys(users2);
    // change code above this line
}

console.log(getArrayOfUsers(users2));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Data Structures: Modify an Array Stored in an Object

 Now you've seen all the basic operations for JavaScript objects. You can add, modify, and remove key-value pairs,
 check if keys exist, and iterate over all the keys in an object. As you continue learning JavaScript you will see even
 more versatile applications of objects. Additionally, the optional Advanced Data Structures lessons later in the
 curriculum also cover the ES6 Map and Set objects, both of which are similar to ordinary objects but provide some
 additional features. Now that you've learned the basics of arrays and objects, you're fully prepared to begin tackling
 more complex problems using JavaScript!

 TODO | Take a look at the object we've provided in the code editor. The user object contains three keys. The data key
 TODO | contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data
 TODO | structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the
 TODO | name of the friend argument to the array stored in user.data.friends and returns that array.            */

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // change code above this line
}

console.log(addFriend(user, 'Pete'));
console.log(addFriend(user, "Kevin"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Convert Celsius to Fahrenheit

 The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

 You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already
 defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm
 mentioned above to help convert the Celsius temperature to Fahrenheit.

 Don't worry too much about the function and return statements as they will be covered in future challenges. For
 now, only use operators that you have already learned.         */

function convertToF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

console.log(convertToF(30));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Reverse a String

 Reverse the provided string.

 You may need to turn the string into an array before you can reverse it.

 Your result must be a string.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Factorialize a Number

 Return the factorial of the provided integer.

 If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

 Factorials are often represented with the shorthand notation n!

 For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

 Only integers greater than or equal to zero will be supplied to the function.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function factorialize(num) {
    if (num == 0) {
        return 1;
    }
    return num * factorialize(num - 1);
};

console.log(factorialize(12));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Find the Longest Word in a String

 Return the length of the longest word in the provided sentence.

 Your response should be a number.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Return Largest Numbers in Arrays

 Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided
 array will contain exactly 4 sub-arrays.

 Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function largestOfFour(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
        var largestNumber = arr[n][0];
        for (var sb = 1; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNumber) {
                largestNumber = arr[n][sb];
            }
        }
        results[n] = largestNumber;
    }
    return results;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Confirm the Ending

 Check if a string (first argument, str) ends with the given target string (second argument, target).

 This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of
 this challenge, we would like you to use one of the JavaScript substring methods instead.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Repeat a String Repeat a String

 Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';
    // repeat after me
    while (num > 0) {
        accumulatedStr += str;
        num--;
    }
    return accumulatedStr;
}

console.log(repeatStringNumTimes("abc", 3));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Truncate a String

 Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return
 the truncated string with a ... ending.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function truncateString(str, num) {
    if (str.length > num) {
        if (num <= 3) {
            str = str.slice(0, num) + '...';
        } else {
            str = str.slice(0, num) + '...';
        }
    }
    return str;
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Finders Keepers

 Create a function that looks through an array (first argument) and returns the first element in the array
 that passes a truth test (second argument). If no element passes the test, return undefined.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function findElement(arr, func) {
    return arr.filter(func)[0];
};

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Boo who

 Check if a value is classified as a boolean primitive. Return true or false.

 Boolean primitives are true and false.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function booWho(bool) {
    return bool === true || bool === false;
}

console.log(booWho(null));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Title Case a Sentence

 Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

 For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
};

console.log(titleCase("I'm a little tea pot"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Slice and Splice

 You are given two arrays and an index.

 Use the array methods slice and splice to copy each element of the first array into the second array, in order.

 Begin inserting elements at index n of the second array.

 Return the resulting array. The input arrays should remain the same after the function runs.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Falsy Bouncer

 Remove all falsy values from an array.

 Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

 Hint: Try converting each value to a Boolean.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.     */

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Where do I Belong

 Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
 once it has been sorted. The returned value should be a number.

 For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less
 than 2 (index 1).

 Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like
 [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function (a, b) {
        return a - b;
    });
    for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num) ;
        return a;
    }
    return arr.length;
}

console.log(getIndexToIns([40, 60], 50));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Mutations

 Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

 For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

 The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

 Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

 Remember to use Read-Search-Ask if you get stuck. Write your own code.     */

function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0)
            return false;
    }
    return true;
}

console.log(mutation(["hello", "hey"]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Basic Algorithm Scripting: Chunky Monkey

 Write a function that splits an array (first argument) into groups the length of size (second argument) and
 returns them as a two-dimensional array.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.     */

function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
        return [arr];
    } else {
        return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
    }
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Create a Basic JavaScript Object

 Think about things people see everyday, like cars, shops, and birds. These are all objects: tangible things people
 can observe and interact with.

 What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

 These qualities, or properties, define what makes up an object. Note that similar objects share the same properties,
 but may have different values for those properties. For example, all cars have wheels, but not all cars have the
 same number of wheels.

 Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their
 real-world counterparts. Here's an example using these concepts to create a duck object:

 let duck = {
  name: "Aflac",
  numLegs: 2
};

 This duck object has two property/value pairs: a name of "Aflac" and a numLegs of 2.

 TODO Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.        */

let dog = {
    name: "Tiana",
    numLeg: 4
};
console.log(dog);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Use Dot Notation to Access the Properties of an Object

 The last challenge created an object with various properties, now you'll see how to access the values of those
 properties. Here's an example:

 let duck = {
  name: "Aflac",
  numLegs: 2
};
 console.log(duck.name);
 // This prints "Aflac" to the console

 Dot notation is used on the object name, duck, followed by the name of the property, name, to access the value of "Aflac".

 TODO Print both properties of the dog object below to your console.            */

let dog1 = {
    name: "Spot",
    numLegs: 4
};
// Add your code below this line
console.log(dog1.name);
console.log(dog1.numLegs);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Create a Method on an Object

 Objects can have a special type of property, called a method.

 Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

 let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
 duck.sayName();
 // Returns "The name of this duck is Aflac."
 The example adds the sayName method, which is a function that returns a sentence giving the name of the duck.

 Notice that the method accessed the name property in the return statement using duck.name. The next challenge
 will cover another way to do this.

 TODO Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."       */

let dog2 = {
    name: "Spot",
    numLegs: 1,
    sayLegs: function () {
        return "This dog has " + dog2.numLegs + " legs";
    }
};

console.log(dog2.sayLegs());

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Make Code More Reusable with the this Keyword

 The last challenge introduced a method to the duck object. It used duck.name dot notation to access the value for the
 name property within the return statement:

 sayName: function() {return "The name of this duck is " + duck.name + ".";}

 While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes,
 any code referencing the original name would need to be updated as well. In a short object definition, it isn't a
 problem, but if an object has many references to its properties there is a greater chance for error.

 A way to avoid these issues is with the this keyword:

 let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

 this is a deep topic, and the above example is only one way to use it. In the current context, this refers to the
 object that the method is associated with: duck.

 If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code.
 It makes the code reusable and easier to read.

 TODO Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.      */

let dog3 = {
    name: "Spot",
    numLegs: 5,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    }
};

console.log(dog3.sayLegs());

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Define a Constructor Function

 Constructors are functions that create new objects. They define properties and behaviors that will belong to
 the new object. Think of them as a blueprint for the creation of new objects.

 Here is an example of a constructor:

 function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
 This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively.

 Constructors follow a few conventions:

 Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
 Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this
 refers to the new object it will create.

 Constructors define properties and behaviors instead of returning a value as other functions might.

 todo; Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number,
 todo; respectively.        */

function Dog() {
    this.name = "Tiana";
    this.color = "tan";
    this.numLegs = 4;
};

console.log(Dog);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Use a Constructor to Create Objects

 Here's the Bird constructor from the previous challenge:

 function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

 let blueBird = new Bird();
 Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance
 of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly
 created object, giving unexpected results.

 Now blueBird has all the properties defined inside the Bird constructor:

 blueBird.name; // => Albert
 blueBird.color; // => blue
 blueBird.numLegs; // => 2
 Just like any other object, its properties can be accessed and modified:

 blueBird.name = 'Elvira';
 blueBird.name; // => Elvira

 TODO Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.       */

function Dog4() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

let hound = new Dog();
console.log(hound);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Extend Constructors to Receive Arguments

 The Bird and Dog constructors from last challenge worked well. However, notice that all Birds that are created with
 the Bird constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds
 with different values for name and color? It's possible to change the properties of each bird manually but that
 would be a lot of work:

 let swan = new Bird();
 swan.name = "Carlos";
 swan.color = "white";
 Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It
 would take a lot of time to create all the birds, then change the properties to different values for every one.

 To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

 function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
 Then pass in the values as arguments to define each unique bird into the Bird constructor:

 let cardinal = new Bird("Bruce", "red");

 This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs
 property is still set to 2.

 The cardinal has these properties:

 cardinal.name // => Bruce
 cardinal.color // => red
 cardinal.numLegs // => 2
 The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created,
 which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics
 and behavior and define a blueprint that automates their creation.

 TODO Create another Dog constructor. This time, set it up to take the parameters name and color, and have
 todo |the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings
 todo |as arguments for the name and color properties.      */

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Tiana", "tan");
console.log(terrier);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Verify an Object's Constructor with instanceof

 Anytime a constructor function creates a new object, that object is said to be an instance of its constructor.
 JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare
 an object to a constructor, returning true or false based on whether or not that object was created with
 the constructor. Here's an example:

 let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

 let crow = new Bird("Alexis", "black");

 crow instanceof Bird; // => true

 If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

 let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

 canary instanceof Bird; // => false

 TODO Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms.
 todo| Then, use instanceof to verify that it is an instance of House.          */

/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(4);
myHouse instanceof House;
console.log(myHouse);
console.log(House);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Understand Own Properties

 In the following example, the Bird constructor defines two properties: name and numLegs:

 function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

 let duck = new Bird("Donald");
 let canary = new Bird("Tweety");
 name and numLegs are called own properties, because they are defined directly on the instance object. That means that
 duck and canary each has its own separate copy of these properties.

 In fact every instance of Bird will have its own copy of these properties.

 The following code adds all of the own properties of duck to the array ownProps:

 let ownProps = [];

 for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

 console.log(ownProps); // prints [ "name", "numLegs" ]

 TODO Add the own properties of canary to the array ownProps.       */

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code

 Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable
 numLegs inside each Bird instance.

 This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would
 be a lot of duplicated variables.

 A better way is to use Bird’s prototype. The prototype is an object that is shared among ALL instances of Bird. Here's
 how to add numLegs to the Bird prototype:

 Bird.prototype.numLegs = 2;
 Now all instances of Bird have the numLegs property.

 console.log(duck.numLegs); // prints 2
 console.log(canary.numLegs); // prints 2
 Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects.

 Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in
 JavaScript has a prototype property which is part of the constructor function that created it.

 TODO Add a numLegs property to the prototype of Dog            */

function Dog(name) {
    this.name = name;
    Dog.prototype.numLegs = 4;
}


// Add your code above this line
let beagle = new Dog("Snoopy");
console.log(dog.numLeg);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Iterate Over All Properties

 You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined
 directly on the object instance itself. And prototype properties are defined on the prototype.

 function Bird(name) {
  this.name = name; //own property
}

 Bird.prototype.numLegs = 2; // prototype property

 let duck = new Bird("Donald");
 Here is how you add duck’s own properties to the array ownProps and prototype properties to the array prototypeProps:

 let ownProps = [];
 let prototypeProps = [];

 for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

 console.log(ownProps); // prints ["name"]
 console.log(prototypeProps); // prints ["numLegs"]

 TODO Add all of the own properties of beagle to the array ownProps. Add all of the prototype
 todo | properties of Dog to the array prototypeProps.          */

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs3 = 4;

let beagle1 = new Dog("snoopy");

let ownProps1 = [];
let prototypeProps = [];

for (let property in beagle1) {
    if (beagle.hasOwnProperty(property)) {
        ownProps1.push(property);
    } else {
        prototypeProps.push(property);
    }
}
console.log(prototypeProps);
console.log(dog.numLegs3);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Understand the Constructor Property

 There is a special constructor property located on the object instances duck and beagle that were created in the
 previous challenges:

 let duck = new Bird();
 let beagle = new Dog();

 console.log(duck.constructor === Bird); //prints true
 console.log(beagle.constructor === Dog); //prints true
 Note that the constructor property is a reference to the constructor function that created the instance.

 The advantage of the constructor property is that it's possible to check for this property to find out what kind of
 object it is. Here's an example of how this could be used:

 function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

 Note
 Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally
 better to use the instanceof method to check the type of an object.

 TODO Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property,
 todo | return true if the candidate is a Dog, otherwise return false.      */

function Dog(name) {
    this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

console.log(joinDogFraternity(Dog));

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Change the Prototype to a New Object

 Up until now you have been adding properties to the prototype individually:

 Bird.prototype.numLegs = 2;
 This becomes tedious after more than a few properties.

 Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

 Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
 A more efficient way is to set the prototype to a new object that already contains the properties. This way,
 the properties are added all at once:

 Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

 TODO Add the property numLegs and the two methods eat() and describe() to the prototype
 todo | of Dog by setting the prototype to a new object.            */

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Add your code below this line
    numLegs: 4,
    eat: function () {
        return "yummy";
    },
    describe: function () {
        return "My name is...";
    }
};

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype

 There is one crucial side effect of manually setting the prototype to a new object. It erased the constructor property!
 The code in the previous challenge would print the following for duck:

 console.log(duck.constructor)
 // prints ‘undefined’ - Oops!
 To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

 Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

 TODO Define the constructor property on the Dog prototype.     */

function Dog(name) {
    this.name = name;
}

// Modify the code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Understand Where an Object’s Prototype Comes From

 Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor
 function that created it. For example, here the Bird constructor creates the duck object:

 function Bird(name) {
  this.name = name;
}

 let duck = new Bird("Donald");
 duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

 Bird.prototype.isPrototypeOf(duck);
 // returns true

 TODO Use isPrototypeOf to check the prototype of beagle.       */

function Dog(name) {
    this.name = name;
}

let beagle2 = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle2);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Understand the Prototype Chain

 All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

 function Bird(name) {
  this.name = name;
}

 typeof Bird.prototype; // => object
 Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of
 Bird.prototype is Object.prototype:

 Object.prototype.isPrototypeOf(Bird.prototype);
 // returns true
 How is this useful? You may recall the hasOwnProperty method from a previous challenge:

 let duck = new Bird("Donald");
 duck.hasOwnProperty("name"); // => true
 The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then
 be accessed by duck. This is an example of the prototype chain.

 In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck.

 Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

 TODO Modify the code to show the correct prototype chain.          */

function Dog(name) {
    this.name = name;
}

let beagle4 = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle4);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself

 There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is
 because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

 Notice in the example below that the describe method is shared by Bird and Dog:

 Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

 Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

 The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a
 supertype (or parent) called Animal:

 function Animal() { };

 Animal.prototype = {
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
 Since Animal includes the describe method, you can remove it from Bird and Dog:

 Bird.prototype = {
  constructor: Bird
};

 Dog.prototype = {
  constructor: Dog
};

 TODO The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to
 todo | the Animal supertype.       */

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() {
}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("non nom nom");
    }
};

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Inherit Behaviors from a Supertype

 In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

 function Animal() { }
 Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
 This and the next challenge will cover how to reuse Animal's methods inside Bird and Dog without defining them again.
 It uses a technique called inheritance.

 This challenge covers the first step: make an instance of the supertype (or parent).

 You already know one way to create an instance of Animal using the new operator:

 let animal = new Animal();
 There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this
 challenge. Instead, here's an alternative approach without those disadvantages:

 let animal = Object.create(Animal.prototype);
 Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is
 like the "recipe" for creating an object. By setting the prototype of animal to be Animal's prototype, you are
 effectively giving the animal instance the same "recipe" as any other instance of Animal.

 animal.eat(); // prints "nom nom nom"
 animal instanceof Animal; // => true

 TODO Use Object.create to make two instances of Animal named duck and beagle.      */

function Animal() {
}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Add your code below this line

let duck3 = Object.create(Animal.prototype); // Change this line
let beagle5 = Object.create(Animal.prototype); // Change this line

console.log(duck3.eat()); // Should print "nom nom nom"
console.log(beagle5.eat()); // Should print "nom nom nom"

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent

 In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal:
 making a new instance of Animal.

 This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

 Bird.prototype = Object.create(Animal.prototype);
 Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes
 all the key "ingredients" from Animal.

 let duck = new Bird("Donald");
 duck.eat(); // prints "nom nom nom"
 duck inherits all of Animal's properties, including the eat method.

 TODO Modify the code so that instances of Dog inherit from Animal.     */

function Animal() {
}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() {
}

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle6 = new Dog();
console.log(beagle6.eat());  // Should print "nom nom nom"

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Reset an Inherited Constructor Property

 When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

 Here's an example:

 function Bird() { }
 Bird.prototype = Object.create(Animal.prototype);
 let duck = new Bird();
 duck.constructor // function Animal(){...}
 But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so,
 you can manually set Bird's constructor property to the Bird object:

 Bird.prototype.constructor = Bird;
 duck.constructor // function Bird(){...}

 TODO Fix the code so duck.constructor and beagle.constructor return their respective constructors.     */

function Animal() {
}

function Bird() {
}

function Dog() {
}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle7 = new Dog();

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Add Methods After Inheritance

 A constructor function that inherits its prototype object from a supertype constructor function can still have its
 own methods in addition to inherited methods.

 For example, Bird is a constructor that inherits its prototype from Animal:

 function Animal() { }
 Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

 function Bird() { }
 Bird.prototype = Object.create(Animal.prototype);
 Bird.prototype.constructor = Bird;
 In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird
 will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

 Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
 Now instances of Bird will have both eat() and fly() methods:

 let duck = new Bird();
 duck.eat(); // prints "nom nom nom"
 duck.fly(); // prints "I'm flying!"

 TODO Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set
 TODO | to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method
 TODO | should print "Woof!" to the console.            */

function Animal() {
}

Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog() {
}

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
};

// Add your code above this line

let beagle9 = new Dog();

beagle9.eat(); // Should print "nom nom nom"
beagle9.bark(); // Should print "Woof!"

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Override Inherited Methods

 In previous lessons, you learned that an object can inherit its behavior (methods) from another object by cloning
 its prototype object:

 ChildObject.prototype = Object.create(ParentObject.prototype);
 Then the ChildObject received its own methods by chaining them onto its prototype:

 ChildObject.prototype.methodName = function() {...};
 It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype
 using the same method name as the one to override.

 Here's an example of Bird overriding the eat() method inherited from Animal:

 function Animal() { }
 Animal.prototype.eat = function() {
  return "nom nom nom";
};
 function Bird() { }

 // Inherit all methods from Animal
 Bird.prototype = Object.create(Animal.prototype);

 // Bird.eat() overrides Animal.eat()
 Bird.prototype.eat = function() {
  return "peck peck peck";
};

 If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

 1. duck => Is eat() defined here? No.

 2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.

 3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.

 4. Object => JavaScript stopped searching before reaching this level.

 TODO Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."       */

function Bird() {
}

Bird.prototype.fly = function () {
    return "I am flying!";
};

function Penguin() {
}

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
};


// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects

 As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best
 solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird
 is not a type of Airplane and vice versa.

 For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

 let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
 The flyMixin takes any object and gives it the fly method.

 let bird = {
  name: "Donald",
  numLegs: 2
};

 let plane = {
  model: "777",
  numPassengers: 524
};

 flyMixin(bird);
 flyMixin(plane);
 Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

 bird.fly(); // prints "Flying, wooosh!"
 plane.fly(); // prints "Flying, wooosh!"
 Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

 TODO Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to
 TODO | give both bird and boat the ability to glide.           */

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Add your code below this line
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("Speed!");
    }
};
glideMixin(bird);
glideMixin(boat);

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally

 In the previous challenge, bird had a public property name. It is considered public because it can be accessed and
 changed outside of bird's definition.

 bird.name = "Duffy";
 Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and
 bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

 The simplest way to make properties private is by creating a variable within the constructor function. This changes the
 scope of that variable to be within the constructor function versus available globally. This way, the property can only
 be accessed and changed by methods also within the constructor function.

 function Bird() {
  let hatchedEgg = 10; // private property

  this.getHatchedEggCount = function() { // publicly available method that a bird object can use
    return hatchedEgg;
  };
}
 let ducky = new Bird();
 ducky.getHatchedEggCount(); // returns 10
 Here getHachedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible
 because hatchedEgg is declared in the same context as getHachedEggCount. In JavaScript, a function always has access to
 the context in which it was created. This is called closure.

 TODO Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight
 TODO | that returns the value of weight.           */

function Bird() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    };
}

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)

 A common pattern in JavaScript is to execute a function as soon as it is declared:

 (function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
 // Outputs "Chirp, chirp!" immediately
 Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function
 expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function
 expression or IIFE.

 TODO Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE). */

(function () {
    console.log("A cozy nest is ready");
})();

/* *******************************************************************************
****************************************************************************** */

/**TODO Object Oriented Programming: Use an IIFE to Create a Module

 An immediately invoked function expression (IIFE) is often used to group related functionality into a single object
 or module. For example, an earlier challenge defined two mixins:

 function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
 function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
 We can group these mixins into a module as follows:

 let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked
 Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This
 returned object contains all of the mixin behaviors as properties of the object.

 The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that
 can then be used by other parts of your code. Here is an example using it:

 motionModule.glideMixin(duck);
 duck.glide();

 TODO Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.      */
let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Learn About Functional Programming

 Functional programming is a style of programming where solutions are simple, isolated functions, without any
 side effects outside of the function scope.

 INPUT -> PROCESS -> OUTPUT

 Functional programming is about:

 1) Isolated functions - there is no dependence on the state of the program, which includes global variables that
 are subject to change

 2) Pure functions - the same input always gives the same output

 3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function
 are carefully controlled

 The members of freeCodeCamp happen to love tea.

 TODO | In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to
 TODO | get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.        */

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// Add your code below this line

const tea4TeamFCC = getTea(40); // :(

// Add your code above this line

console.log(tea4TeamFCC);

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Understand Functional Programming Terminology

 The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood
 swings are pretty common.

 With that information, we'll need to revisit the getTea function from last challenge to handle various tea requests.
 We can modify getTea to accept a function as a parameter to be able to change the type of tea it prepares. This makes
 getTea more flexible, and gives the programmer more control when client requests change.

 But first, let's cover some functional terminology:

 Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
 You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the
 criteria for how to filter an array.

 Functions that can be assigned to a variable, passed into another function, or returned from another function just
 like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

 The functions that take a function as an argument, or return a function as a return value are called higher order functions.

 When the functions are passed in to another function or returned from another function, then those functions which gets
 passed in or returned can be called a lambda.


 TODO | Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables,
 TODO | respectively. Note that the getTea function has been modified so it now takes a function as the first argument.

 TODO | Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.  */

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea1 = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27); // :(
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13); // :(

// Add your code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);

/* *******************************************************************************
****************************************************************************** */


/**TODO Functional Programming: Understand the Hazards of Using Imperative Code

 Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we
 get there, let's look at an imperative approach to programming to highlight where you may have issues.

 In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in
 programming is one that gives the computer a set of statements to perform a task.

 Often the statements change the state of the program, like updating global variables. A classic example is writing a
 for loop that gives exact directions to iterate over the indices of an array.

 In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by
 calling a method or function.

 JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should
 perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the
 details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.

 Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try
 to model this using some simple object-oriented code.

 A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each
 Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs),
 you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity)
 get added to the end of it.

 The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join().
 The array tabs is part of the Window object that stores the name of the open pages.

 TODO | Instructions
 TODO | Run the code in the editor. It's using a method that has side effects in the program, causing incorrect output. The final
 TODO | list of open tabs should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine',
 TODO | 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the output will be slightly different.
 TODO | Work through the code and see if you can figure out the problem, then advance to the next challenge to learn more.  */

// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
    this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
    var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
    var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
    return this;
};

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());

alert(finalTabs.tabs);

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Avoid Mutations and Side Effects Using Functional Programming

 If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose()
 function. Unfortunately, splice changes the original array it is called on, so the second call to it used a modified
 array, and gave unexpected results.

 This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the
 function changes the variable or something in the object.

 One of the core principle of functional programming is to not change things. Changes lead to bugs. It's easier to
 prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

 The previous example didn't have any complicated operations but the splice method changed the original array, and
 resulted in a bug.

 Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a
 side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

 Let's try to master this discipline and not alter any variable or object in our code.

 TODO Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.     */

// the global variable
var fixedValue = 4;

function incrementer() {
    // Add your code below this line
    return fixedValue + 1;

    // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Pass Arguments to Avoid External Dependence in a Function

 The last challenge was a step closer to functional programming principles, but there is still something missing.

 We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

 Another principle of functional programming is to always declare your dependencies explicitly. This means if a function
 depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

 There are several good consequences from this principle. The function is easier to test, you know exactly what input
 it takes, and it won't depend on anything else in your program.

 This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change
 and you can see where the potential traps are.

 Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

 TODO Let's update the incrementer function to clearly declare its dependencies.

 TODO Write the incrementer function so it takes an argument, and then increases the value by one.      */

// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer(value) {
    return value + 1;

    // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Refactor Global Variables Out of Functions

 So far, we have seen two distinct principles for functional programming:

 1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

 2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

 Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

 TODO | Refactor (rewrite) the code so the global array bookList is not changed inside either function.
 TODO | The add function should add the given bookName to the end of an array. The remove function should remove the given
 TODO | bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.      */

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
//New parameters should come before the bookName one

//Add your code below this line
function add(arr, bookName) {
    let newArr = [...arr];
    newArr.push(bookName);
    return newArr;

    // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr, bookName) {
    let newArr = [];
    if (bookList.indexOf(bookName) >= 0) {
        newArr.splice(newArr.indexOf(bookName), 1);
        return newArr;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Use the map Method to Extract Data from an Array

 So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having
 a function only depend on its input arguments.

 This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

 It would make sense to be able to pass them as arguments to other functions, and return a function from another function.
 Functions are considered First Class Objects in JavaScript, which means they can be used like any other object.
 They can be saved in variables, stored in an object, or passed as function arguments.

 Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are
 looking at Array.prototype.map(), or more simply map.

 Remember that the map method is a way to iterate over each item in an array. It creates a new array (without changing
 the original one) after applying a callback function to every element.

 TODO The watchList array holds objects with information on several movies. Use map to pull the title and rating
 TODO from watchList and save the new array in the rating variable. The code in the editor currently uses a for loop to
 TODO do this, replace the loop functionality with your map expression.         */

// the global variable
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Add your code below this line
let rating = watchList.map((item) => ({"title": item["Title"], "rating": item ["imdbRating"]}));
// Add your code above this line

console.log(rating);

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Implement map on a Prototype

 As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the
 same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

 In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

 It would teach us a lot about map to try to implement a version of it that behaves exactly like the Array.prototype.map()
 with a for loop or Array.prototype.forEach().

 Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

 TODO Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
 todo | You may use a for loop or the forEach method.           */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // Add your code below this line
    this.forEach(a => newArray.push(callback(a)));
    // Add your code above this line
    return newArray;

};

var new_s = s.myMap(function (item) {
    return item * 2;
});

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Use the filter Method to Extract Data from an Array

 Another useful array function is Array.prototype.filter(), or simply filter(). The filter method returns a new array
 which is at most as long as the original array, but usually has fewer items.

 Filter doesn't alter the original array, just like map. It takes a callback function that applies the logic inside the
 callback on each element of the array. If an element returns true based on the criteria in the callback function,
 then it is included in the new array.

 TODO | The variable watchList holds an array of objects with information on several movies. Use a combination of filter
 TODO | and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal
 TODO | to 8.0. Note that the rating values are saved as strings in the object and you may want to convert them into numbers
 TODO | to perform mathematical operations on them.     */

// the global variable
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Add your code below this line
var filteredList = watchList.map(function (e) {
    return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);
// Add your code above this line

console.log(filteredList);

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Implement the filter Method on a Prototype

 It would teach us a lot about the filter method if we try to implement a version of it that behaves exactly like
 Array.prototype.filter(). It can use either a for loop or Array.prototype.forEach().

 Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable
 to avoid that as well.

 TODO Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
 todo | You may use a for loop or the Array.prototype.forEach() method.     */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    var newArray = [];
    // Add your code below this line
    this.forEach(function (x) {
        if (callback(x) == true) {
            newArray.push(x);
        }
    });
    // Add your code above this line
    return newArray;

};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Return Part of an Array Using the slice Method

 The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the
 index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive).
 If the arguments are not provided, the default is to start at the beginning of the array through the end, which is
 an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

 Here's an example:

 var arr = ["Cat", "Dog", "Tiger", "Zebra"];
 var newArray = arr.slice(1, 3);
 // Sets newArray to ["Dog", "Tiger"]

 TODO Use the slice method in the sliceArray function to return part of the anim array given the
 TODO provided beginSlice and endSlice indices. The function should return an array.   */

function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
    return anim.slice(beginSlice, endSlice);
    // Add your code above this line
}

var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Remove Elements from an Array Using slice Instead of splice

 A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript
 offers the splice method for this, which takes arguments for the index of where to start removing items, then the number
 of items to remove. If the second argument is not provided, the default is to remove items through the end. However,
 the splice method mutates the original array it is called on. Here's an example:

 var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
 cities.splice(3, 1); // Returns "London" and deletes it from the cities array
 // cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]

 As we saw in the last challenge, the slice method does not mutate the original array, but returns a new one which can
 be saved into a variable. Recall that the slice method takes two arguments for the indices to begin and end the slice
 (the end is non-inclusive), and returns those items in a new array. Using the slice method instead of splice helps to
 avoid any array-mutating side effects.


 TODO | Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to
 TODO | a length of 3, and return a new array with only the first three items.
 TODO | Do not mutate the original array provided to the function.      */

function nonMutatingSplice(cities) {
    return cities.splice(0, 3);

}

var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Combine Two Arrays Using the concat Method

 Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that
 work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat,
 which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

 [1, 2, 3].concat([4, 5, 6]);
 // Returns a new array [1, 2, 3, 4, 5, 6]

 TODO Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original.
 TODO | The function should return the concatenated array.      */

function nonMutatingConcat(original, attach) {
    // Add your code below this line
    return first.concat(second);
    // Add your code above this line
}

var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Add Elements to the End of an Array Using concat Instead of push

 Functional programming is all about creating and using non-mutating functions.

 The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original
 arrays. Compare concat to the push method. Push adds an item to the end of the same array it is called on, which
 mutates that array. Here's an example:

 var arr = [1, 2, 3];
 arr.push([4, 5, 6]);
 // arr is changed to [1, 2, 3, [4, 5, 6]]
 // Not the functional programming way
 Concat offers a way to add new items to the end of an array without any mutating side effects.

 TODO Change the nonMutatingPush function so it uses concat to add newItem to the end of original
 TODO instead of push. The function should return an array.     */

function nonMutatingPush(original, newItem) {
    // Add your code below this line
    return first.concat(second);

    // Add your code above this line
}

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Use the reduce Method to Analyze Data

 Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve
 almost any array processing problem using the reduce method.

 This is not the case with the filter and map methods since they do not allow interaction between two different elements
 of the array. For example, if you want to compare elements of the array, or add them together, filter or map could not process that.

 The reduce method allows for more general forms of array processing, and it's possible to show that both filter and
 map can be derived as a special application of reduce.

 However, before we get there, let's practice using reduce first.

 TODO | The variable watchList holds an array of objects with information on several movies. Use reduce to find the average
 TODO | IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over
 TODO | it to pull what you need. You may need to create other variables, but save the final average into the variable averageRating.
 TODO | Note that the rating values are saved as strings in the object and need to be converted into numbers before
 TODO | they are used in any mathematical operations.           */

// the global variable
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Add your code below this line

var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;

// Add your code above this line

console.log(averageRating);

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Sort an Array Alphabetically using the sort Method

 The sort method sorts the elements of an array according to the callback function.

 For example:

 function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
 ascendingOrder([1, 5, 2, 3, 4]);
 // Returns [1, 2, 3, 4, 5]

 function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}
 reverseAlpha(['l', 'h', 'z', 'b', 's']);
 // Returns ['z', 's', 'l', 'h', 'b']

 Note: It's encouraged to provide a callback function to specify how to sort the array items. JavaScript's default
 sorting method is by string Unicode point value, which may return unexpected results.

 TODO Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.      */

function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function (a, b) {
        return a > b;
    });

    // Add your code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Return a Sorted Array Without Changing the Original Array

 A side effect of the sort method is that it changes the order of the elements in the original array.
 In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array
 to the one being sorted (remember that concat returns a new array), then run the sort method.

 TODO Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
 TODO The function should return a new array, and not mutate the globalArray variable.          */

var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Add your code below this line
    return [].concat(arr).sort(function (a, b) {
        return a - b;
    });

    // Add your code above this line
}

console.log(nonMutatingSort(globalArray));

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Split a String into an Array Using the split Method

 The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a
 character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get
 an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

 Here are two examples that split one string by spaces, then another by digits using a regular expression:

 var str = "Hello World";
 var bySpace = str.split(" ");
 // Sets bySpace to ["Hello", "World"]

 var otherString = "How9are7you2today";
 var byDigits = otherString.split(/\d/);
 // Sets byDigits to ["How", "are", "you", "today"]
 Since strings are immutable, the split method makes it easier to work with them.

 TODO Use the split method inside the splitify function to split str into an array of words. The function should
 TODO return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.   */

function splitify(str) {
    // Add your code below this line
    return str.split(/\W/);

    // Add your code above this line
}

console.log(splitify("Hello World,I-am code"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Combine an Array into a String Using the join Method

 The join method is used to join the elements of an array together to create a string. It takes an argument for the
 delimiter that is used to separate the array elements in the string.

 Here's an example:

 var arr = ["Hello", "World"];
 var str = arr.join(" ");
 // Sets str to "Hello World"

 TODO | Use the join method (among others) inside the sentensify function to make a sentence from the words in the
 TODO | string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to
 TODO | "I like Star Wars". For this challenge, do not use the replace method.      */

function sentensify(str) {
    // Add your code below this line
    return str.split(/\W/).join(" ");

    // Add your code above this line
}

console.log(sentensify("May-the-force-be-with-you"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs

 The last several challenges covered a number of useful array and string methods that follow functional programming
 principles. We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms.
 From computing averages to sorting, any array operation can be achieved by applying it. Recall that map and filter
 are special cases of reduce.

 Let's combine what we've learned to solve a practical problem.

 Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes.
 For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the
 title string in it (".../stop-using-reduce"). You may have already noticed this on the freeCodeCamp site.

 TODO Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
 TODO You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

 TODO The input is a string with spaces and title-cased words

 TODO The output is a string with the spaces between words replaced by a hyphen (-)

 TODO The output should be all lower-cased letters

 TODO The output should not have any spaces     */

// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    return title.split(/\W/).filter((obj) => {
        return obj !== '';
    }).join('-').toLowerCase();

}

// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria

 The every method works with arrays to check if every element passes a particular test. It returns a Boolean value -
 true if all values meet the criteria, false if not.

 For example, the following code would check if every element in the numbers array is less than 10:

 var numbers = [1, 5, 8, 0, 10, 11];
 numbers.every(function(currentValue) {
  return currentValue < 10;
});
 // Returns false

 TODO Use the every method inside the checkPositive function to check if every element in arr is positive.
 TODO The function should return a Boolean value.           */

function checkPositive(arr) {
    // Add your code below this line
    return arr.every(val => val > 0);

    // Add your code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria

 The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true
 if any of the values meet the criteria, false if not.

 For example, the following code would check if any element in the numbers array is less than 10:

 var numbers = [10, 50, 8, 220, 110, 11];
 numbers.some(function(currentValue) {
  return currentValue < 10;
});
 // Returns true

 TODO Use the some method inside the checkPositive function to check if any element in arr is positive.
 TODO The function should return a Boolean value.           */

function checkPositive(arr) {
    // Add your code below this line
    return arr.some(val => val > 0);
    // Add your code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Functional Programming: Introduction to Currying and Partial Application

 The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N
 arity into N functions of arity 1.

 In other words, it restructures a function so it takes one argument, then returns another function that takes the next
 argument, and so on.

 Here's an example:

 //Un-curried function
 function unCurried(x, y) {
  return x + y;
}

 //Curried function
 function curried(x) {
  return function(y) {
    return x + y;
  }
}
 curried(1)(2) // Returns 3

 This is useful in your program if you can't supply all the arguments to a function at one time. You can save each
 function call into a variable, which will hold the returned function reference that takes the next argument when it's
 available. Here's an example using the curried function in the example above:

 // Call a curried function in parts:
 var funcForY = curried(1);
 console.log(funcForY(2)); // Prints 3

 Similarly, partial application can be described as applying a few arguments to a function at a time and returning another
 function that is applied to more arguments.

 Here's an example:

 //Impartial function
 function impartial(x, y, z) {
  return x + y + z;
}
 var partialFn = impartial.bind(this, 1, 2);
 partialFn(10); // Returns 13

 TODO Fill in the body of the add function so it uses currying to add parameters x, y, and z.       */

function add(x) {
    // Add your code below this line
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }

    // Add your code above this line
}

console.log(add(10)(20)(30));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Sum All Numbers in a Range

 We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

 The lowest number will not always come first.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
        temp += i;
    }
    return (temp);
}

console.log(sumAll([1, 4]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Diff Two Arrays

 Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 In other words, return the symmetric difference of the two arrays.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Note
 You can return the array with its elements in any order.           */

function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        for (var i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }

    // Same, same; but different.
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Seek and Destroy

 You will be provided with an initial array (the first argument in the destroyer function), followed by one or more
 arguments. Remove all elements from the initial array that are of the same value as these arguments.

 Note
 You have to use the arguments object.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.     */

function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !args.includes(val);
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Wherefore art thou

 Make a function that looks through an array of objects (first argument) and returns an array of all objects that
 have matching name and value pairs (second argument). Each name and value pair of the source object has to be present
 in the object from the collection if it is to be included in the returned array.

 For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
 { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third
 object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.         */

function whatIsInAName(collection, source) {
    // What's in a name?
    var srcKeys = Object.keys(source);
    return collection.filter(function (obj) {
        return srcKeys.every(function (key) {
            return obj.hasOwnProperty(key) && obj [key] === source[key];
        });
    });
}

console.log(whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"}));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Spinal Tap Case

 Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.toLowerCase().split(/(?:_| )+/).join('-');
}

console.log(spinalCase('This Is Spinal Tap'));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Pig Latin

 Translate the provided string to pig latin.

 Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

 If a word begins with a vowel you just add "way" to the end.

 Input strings are guaranteed to be English words in all lowercase.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function translatePigLatin(str) {
    var pigLatin = '';
    var regex = /[aeiou]/gi;
    if (str[0].match(regex)) {
        pigLatin = str + 'way';
    } else if (str.match(regex) === null) {
        pigLatin = str + 'ay';
    } else {
        var vowelIndice = str.indexOf(str.match(regex)[0]);
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }
    return pigLatin;
}

console.log(translatePigLatin("consonant"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Search and Replace

 Perform a search and replace on the sentence using the arguments provided and return the new sentence.

 First argument is the sentence to perform the search and replace on.

 Second argument is the word that you will be replacing (before).

 Third argument is what you will be replacing the second argument with (after).

 Note
 Preserve the case of the first character in the original word when you are replacing it. For example if you mean to
 replace the word "Book" with the word "dog", it should be replaced as "Dog"

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function myReplace(str, before, after) {
    var index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    str = str.replace(before, after);
    return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: DNA Pairing

 The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

 Base pairs are a pair of AT and CG. Match the missing element to the provided character.

 Return the provided character as the first element in each array.

 For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

 The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function pairElement(str) {
    var map = {T: 'A', A: 'T', G: 'C', C: 'G'};
    var strArr = str.split('');
    for (var i = 0; i < strArr.length; i++) {
        strArr[i] = [strArr[i], map[strArr[i]]];
    }
    return strArr;
}

console.log(pairElement("GCG"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Missing letters

 Find the missing letter in the passed letter range and return it.

 If all letters are present in the range, return undefined.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function fearNotLetter(str) {
    var compare = str.charCodeAt(0), missing;
    str.split('').map(function (letter, index) {
        if (str.charCodeAt(index) == compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });
    return missing;
}

console.log(fearNotLetter("abcdefghj"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Sorted Union

 Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

 In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

 The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

 Check the assertion tests for examples.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function uniteUnique() {
    var concatArr = [];
    var i = 0;
    while (arguments[i]){
        concatArr = concatArr.concat(arguments[i]); i++;
    }
    var uniqueArray = concatArr.filter(function(item, pos) {
       return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Convert HTML Entities

 Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function convertHTML(str) {
    let htmlEntitles={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
    };
    // &colon;&rpar;
    return str.split('').map(entity => htmlEntitles[entity] || entity).join('');
}

console.log(convertHTML("Dolce & Gabbana"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

 Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

 The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the
 two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

 For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !==0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    return result;
}

console.log(sumFibs(1000));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Sum All Primes

 Sum all the prime numbers up to and including the provided number.

 A prime number is defined as a number greater than one and having only two divisors, one and itself. For example,
 2 is a prime number because it's only divisible by one and two.

 The provided number may not be a prime.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function sumPrimes(num) {
    function isPrime(number) {
        for (let i = 2; i < number; i++) {
            if(number % i === 0 && number!= i) {
                return false;
            }
        }
        return true;
    }
    if (num === 1){
        return 0;
    }
    if(isPrime(num) === false) {
        return sumPrimes(num - 1);
    }
    if(isPrime(num) === true) {
        return num + sumPrimes(num - 1);
    }
}

console.log(sumPrimes(10));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Smallest Common Multiple

 Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all
 sequential numbers in the range between these parameters.

 The range will be an array of two numbers that will not necessarily be in numerical order.

 For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all
 numbers between 1 and 3. The answer here would be 6.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function smallestCommons(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }
    var quot = 0;
    var loop = 1;
    var n;
    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }
        loop++;
    } while (n !== newArr.length);
    return quot;
}


console.log(smallestCommons([1,5]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Drop it

 Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the
 function func returns true when the iterated element is passed through it.

 Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
    // Drop them elements.
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Steamroller

 Flatten a nested array. You must account for varying levels of nesting.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function steamrollArray(arr) {
    let flat = [].concat(...arr);
    // I'm a steamroller, baby
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Binary Agents

 Return an English translated sentence of the passed binary string.

 The binary string will be space separated.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function binaryAgent(str) {
    str = str.split(' ');
    var power;
    var decValue = 0;
    var sentence = '';
    for (var s = 0; s < str.length; s++) {
        for (var t = 0; t < str[s].length; t++) {
            if (str[s][t] == 1) {
                power = Math.pow(2, +str[s].length - t - 1);
                decValue += power;
            }
        }
        sentence += (String.fromCharCode(decValue));
        decValue = 0;
    }
    return sentence;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110" +
    " 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Everything Be True

 Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

 In other words, you are given an array collection of objects. The predicate pre will be an object property and you
 need to return true if its value is truthy. Otherwise, return false.

 In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

 Remember, you can access object properties through either dot notation or [] notation.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Arguments Optional

 Create a function that sums two arguments together. If only one argument is provided, then return a function that
 expects one argument and returns the sum.

 For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

 Calling this returned function with a single argument will then return the sum:

 var sumTwoAnd = addTogether(2);

 sumTwoAnd(3) returns 5.

 If either argument isn't a valid number, return undefined.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function addTogether() {
    var args = Array.from(arguments);
    return args.some(n => typeof  n !== 'number') ? undefined:
        args.length > 1 ? args.reduce((acc, n) => acc += n, 0):
            (n) => typeof  n === "number" ? n + args[0]: undefined;
}

console.log(addTogether(3)(3));

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Make a Person

 Fill in the object constructor with the following methods below:

 getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
 Run the tests to see the expected output for each method.

 The methods that take an argument must accept only one argument and it has to be a string.

 These methods must be the only available means of interacting with the object.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };

    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };

    this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
    };
    this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function(name) {
        fullName = name;
    };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

/* *******************************************************************************
****************************************************************************** */

/**TODO Intermediate Algorithm Scripting: Map the Debris

 Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

 The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

 You can read about orbital periods on Wikipedia.

 The values should be rounded to the nearest whole number. The body being orbited is Earth.

 The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    for(var prop in arr) {
        var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) /GM));
        delete arr[prop].avgAlt;
        arr[prop].orbitalPeriod = orbitalPer;
    }
    return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

/* *******************************************************************************
****************************************************************************** */