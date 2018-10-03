/** TODO Basic JavaScript: Comment Your JavaScript Code

/** here are two ways to write comments in JavaScript:

Using // will tell JavaScript to ignore the remainder of the text on the current line:

        // This is an in-line comment.

You can make a multi-line comment beginning with /* and ending with

/* This is a
multi-line comment */

/*TODO Create a // style comment that contains at least five letters.

// This is a in-line comment in JavaScript

TODO Create a multi-line style comment that contains at least five letters.

/* This is a
multi-line comment in JavaScript.  */

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Declare JavaScript Variables

 In computer science, data is anything that is meaningful to the computer.
 JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object.

 For example, computers distinguish between numbers, such as the number 12, and strings,
 such as "12", "dog", or "123 cats", which are collections of characters.
 Computers can perform mathematical operations on a number, but not on a string.

 Variables allow computers to store and manipulate data in a dynamic fashion.
 They do this by using a "label" to point to the data rather than using the data itself.
 Any of the seven data types may be stored in a variable.

 Variables are similar to the x and y variables you use in mathematics,
 which means they're a simple name to represent the data we want to refer to.
 Computer variables differ from mathematical variables in that they can store different values at different times.

 We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

 var ourName;
 creates a variable called ourName. In JavaScript we end statements with semicolons.

 Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

TODO Use the var keyword to create a variable called myName */

var myName;

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Storing Values with the Assignment Operator

 In JavaScript, you can store a value in a variable with the assignment operator.

 myVariable = 5;

 This assigns the Number value 5 to myVariable.

 Assignment always goes from right to left. Everything to the right of the = operator
 is resolved before the value is assigned to the variable to the left of the operator.

 myVar = 5;
 myNum = myVar;

 This assigns 5 to myVar and then resolves myVar to 5 again and assigns it to myNum.

 TODO Assign the value 7 to variable a.

 TODO Assign the contents of a to variable b. */

var a = 7;

console.log(b = a);

/* *******************************************************************************
 ****************************************************************************** */

/**TODO Basic JavaScript: Initializing Variables with the Assignment Operator

 It is common to initialize a variable to an initial value in the same line as it is declared.

 var myVar = 0;

 Creates a new variable called myVar and assigns it an initial value of 0.

 TODO Define a variable a with var and initialize it to a value of 9. */

var a = 9;
console.log(a);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Understanding Uninitialized Variables

 When JavaScript variables are declared, they have an initial value of undefined.
 If you do a mathematical operation on an undefined variable your result will be NaN
 which means "Not a Number". If you concatenate a string with an undefined variable,
 you will get a literal string of "undefined".

 TODO Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined. */

// Initialize these three variables

var a = 5;
var b = 10;
var c = "I am a";

// undefined example
var d;

// Do not change code below this line

console.log(a = a + 1);
console.log(b = b + 5);
console.log(c = c + " String!");
console.log(d);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Understanding Case Sensitivity in Variables
 In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

 MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same
 name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

 Best Practice
 Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have
 the first word in lowercase and the first letter of each subsequent word is capitalized.

 Examples:

 var someVariable;
 var anotherVariableName;
 var thisVariableNameIsSoLong;

 TODO Modify the existing declarations and assignments so their names use camelCase. Do not create any new variables.

 // Declarations
 var StUdLyCapVaR;
 var properCamelCase;
 var TitleCaseOver;

 // Assignments
 STUDLYCAPVAR = 10;
 PRoperCAmelCAse = "A String";
 tITLEcASEoVER = 9000; */

// Declarations

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

console.log(studlyCapVar);
console.log(properCamelCase);
console.log(titleCaseOver);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Add Two Numbers with JavaScript

 Number is a data type in JavaScript which represents numeric data.

 Now let's try to add two numbers using JavaScript.

 JavaScript uses the + symbol as addition operation when placed between two numbers.

 Example

 myVar = 5 + 10; // assigned 15

 TODO Change the 0 so that sum will equal 20.

 var sum = 10 + 0;                              */

var sum = 10 + 10;

console.log(sum);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Subtract One Number from Another with JavaScript

 We can also subtract one number from another.

 JavaScript uses the - symbol for subtraction.

 Example

 myVar = 12 - 6; // assigned 6

 TODO Change the 0 so the difference is 12.

var difference = 45 - 0;            */

var difference = 45 - 33;

console.log(difference);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Multiply Two Numbers with JavaScript

 We can also multiply one number by another.

 JavaScript uses the * symbol for multiplication of two numbers.

 Example

 myVar = 13 * 13; // assigned 169

 TODO Change the 0 so that product will equal 80.

 var product = 8 * 0;                 */

var product = 8 * 10;

console.log(product);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Divide One Number by Another with JavaScript

 We can also divide one number by another.

 JavaScript uses the / symbol for division.

 Example

 myVar = 16 / 2; // assigned 8

 TODO Change the 0 so that the quotient is equal to 2.

 var quotient = 66 / 0;             */

var quotient = 66/33;

console.log(quotient);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Increment a Number with JavaScript

 You can easily increment or add one to a variable with the ++ operator.

 i++;

 is the equivalent of

 i = i + 1;

 Note
 The entire line becomes i++;, eliminating the need for the equal sign.

 TODO Change the code to use the ++ operator on myVar.

 var myVar = 87;

 // Only change code below this line
 myVar = myVar + 1;             */

var myVar = 87;

myVar++;

console.log(myVar);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Decrement a Number with JavaScript

 You can easily decrement or decrease a variable by one with the -- operator.

 i--;

 is the equivalent of

 i = i - 1;

 Note
 The entire line becomes i--;, eliminating the need for the equal sign.

 TODO Change the code to use the -- operator on myVar.

 var myVar = 11;

 // Only change code below this line
 myVar = myVar - 1;             */

var myVar = 11;

myVar--;

console.log(myVar);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Create Decimal Numbers with JavaScript

 We can store decimal numbers in variables too. Decimal numbers are sometimes
 referred to as floating point numbers or floats.

 Note
 Not all real numbers can accurately be represented in floating point.
 This can lead to rounding errors. Details Here.

 TODO Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7). */

var myDecimal = 5.7;

console.log(myDecimal);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Multiply Two Decimals with JavaScript

 In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

 Let's multiply two decimals together to get their product.

 TODO Change the 0.0 so that product will equal 5.0.

 var product = 2.0 * 0.0;           */

var product = 2.0 * 2.5;

console.log(product);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Divide One Decimal by Another with JavaScript

 Now let's divide one decimal by another.

 TODO Change the 0.0 so that quotient will equal to 2.2.

 var quotient = 0.0 / 2.0; // Fix this line         */

var quotient = 4.4 / 2.0;

console.log(quotient);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Finding a Remainder in JavaScript

 The remainder operator % gives the remainder of the division of two numbers.

 Example

 5 % 2 = 1 because
 Math.floor(5 / 2) = 2 (Quotient)
 2 * 2 = 4
 5 - 4 = 1 (Remainder)
 Usage
 In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

 17 % 2 = 1 (17 is Odd)
 48 % 2 = 0 (48 is Even)

 Note
 The remainder operator is sometimes incorrectly referred to as the "modulus" operator.
 It is very similar to modulus, but does not work properly with negative numbers.

 TODO Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator. */

var remainder = 11 % 3;

console.log(remainder);

// Console log will be 2.

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Compound Assignment With Augmented Addition

 In programming, it is common to use assignments to modify the contents of a variable.
 Remember that everything to the right of the equals sign is evaluated first, so we can say:

 myVar = myVar + 5;

 to add 5 to myVar. Since this is such a common pattern, there are operators
 which do both a mathematical operation and assignment in one step.

 One such operator is the += operator.

 var myVar = 1;
 myVar += 5;
 console.log(myVar); // Returns 6

TODO Convert the assignments for a, b, and c to use the += operator.

 var a = 3;
 var b = 17;
 var c = 12;

 // Only modify code below this line

 a = a + 12;
 b = 9 + b;
 c = c + 7;             */

var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a += 12;
b += 9;
c += 7;

console.log(a);
console.log(b);
console.log(c);

/**
 a should equal 15
 b should equal 26
 c should equal 19          */

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Compound Assignment With Augmented Subtraction

 Like the += operator, -= subtracts a number from a variable.

 myVar = myVar - 5;

 will subtract 5 from myVar. This can be rewritten as:

 myVar -= 5;

TODO Convert the assignments for a, b, and c to use the -= operator.

 var a = 11;
 var b = 9;
 var c = 3;

 // Only modify code below this line

 a = a - 6;
 b = b - 15;
 c = c - 1;                 */

var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b -= 15;
c -= 1;

console.log(a);
console.log(b);
console.log(c);

/**
 a should equal 5
 b should equal -6
 c should equal 2   */

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Compound Assignment With Augmented Multiplication

 The *= operator multiplies a variable by a number.

 myVar = myVar * 5;

 will multiply myVar by 5. This can be rewritten as:

 myVar *= 5;

 TODO Convert the assignments for a, b, and c to use the *= operator.

 var a = 5;
 var b = 12;
 var c = 4.6;

 // Only modify code below this line

 a = a * 5;
 b = 3 * b;
 c = c * 10;            */

var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= 3;
c *= 10;

console.log(a);
console.log(b);
console.log(c);

/**
 a should equal 25
 b should equal 36
 c should equal 46          */

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Compound Assignment With Augmented Division

 The /= operator divides a variable by another number.

 myVar = myVar / 5;

 Will divide myVar by 5. This can be rewritten as:

 myVar /= 5;

 TODO Convert the assignments for a, b, and c to use the /= operator.

 var a = 48;
 var b = 108;
 var c = 33;

 // Only modify code below this line

 a = a / 12;
 b = b / 4;
 c = c / 11;                    */

var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;

console.log(a);
console.log(b);
console.log(c);

/**
a should equal 4
b should equal 27
c should equal 3            */

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Declare String Variables

 Previously we have used the code

 var myName = "your name";

 "your name" is called a string literal. It is a string because it is a series
 of zero or more characters enclosed in single or double quotes.

 TODO Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.

 // Example
 var firstName = "Alan";
 var lastName = "Turing";

 // Only change code below this line           */

var myFirstName = "Kevin";
var myLastName = " Tran";

var fullName = myFirstName + myLastName;

console.log(fullName);

/* *******************************************************************************
 ****************************************************************************** */

