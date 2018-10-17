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

var quotient = 66 / 33;

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

/** TODO Basic JavaScript: Escaping Literal Quotes in Strings

 When you are defining a string you must start and end with a single or double quote.
 What happens when you need a literal quote: " or ' inside of your string?

 In JavaScript, you can escape a quote from considering it as an end of string quote by
 placing a backslash (\) in front of the quote.

 var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

 This signals to JavaScript that the following quote is not the end of the string, but should instead appear
 inside the string. So if you were to print this to the console, you would get:

 Alan said, "Peter is learning JavaScript".

 TODO Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

 I am a "double quoted" string inside "double quotes".

 Variable myStr should contain the string: I am a "double quoted" string inside "double quotes".     */

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myStr);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Quoting Strings with Single Quotes

 String values in JavaScript may be written with single or double quotes, as long as you start and
 end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

 doubleQuoteStr = "This is a string";
 singleQuoteStr = 'This is also a string';

 The reason why you might want to use one type of quote over the other is if you want to use both in a
 string. This might happen if you want to save a conversation in a string and have the conversation in quotes.
 Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.

 conversation = 'Finn exclaims to Jake, "Algebraic!"';

 However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string
 has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle,
 the string will stop early and throw an error.

 goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
 badStr = 'Finn responds, "Let's go!"'; // Throws an error

 In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

 Note
 The backslash \ should not be be confused with the forward slash /. They do not do the same thing.

 TODO Change the provided string to a string with single quotes at the beginning and end and no escape characters.

 Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to
 single quotes so you can remove the escape characters.

 var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";           */

var myStr = '<a href="http://www.example.com" target="_blank"link</a>';

console.log(myStr);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Escape Sequences in Strings

 Quotes are not the only characters that can be escaped inside a string. There are two reasons to
 use escaping characters: First is to allow you to use characters you might not otherwise be able to type out,
 such as a backspace. Second is to allow you to represent multiple quotes in a string without JavaScript
 misinterpreting what you mean. We learned this in the previous challenge.

 Code    Output
 \'        single quote
 \"        double quote
 \\        backslash
 \n        newline
 \r        carriage return
 \t        tab
 \b        backspace
 \f        form feed

 Note that the backslash itself must be escaped in order to display as a backslash.

 TODO Assign the following three lines of text into the single variable myStr using escape sequences.

 FirstLine
 \SecondLine
 ThirdLine

 You will need to use escape sequences to insert special characters correctly. You will also need
 to follow the spacing as it looks above, with no spaces between escape sequences or words.

 Here is the text with the escape sequences written out.

 "FirstLine newline tab backslash SecondLine newline ThirdLine"         */

var myStr = "FirstLine\n\tSecondLine\nThirdLine";

console.log(myStr);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Concatenating Strings with Plus Operator

 In JavaScript, when the + operator is used with a String value, it is called the concatenation operator.
 You can build a new string out of other strings by concatenating them together.

 Example

 'My name is Alan,' + ' I concatenate.'

 Note:
 Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll
 need to add them yourself.

 TODO Build myStr from the strings "This is the start. " and "This is the end." using the + operator. */

var myStr = "This is the start." + " This is the end.";

console.log(myStr);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Concatenating Strings with the Plus Equals Operator

 We can also use the += operator to concatenate a string onto the end of an existing string variable.
 This can be very helpful to break a long string over several lines.

 Note
 Watch out for spaces. Concatenation does not add spaces between concatenated strings,
 so you'll need to add them yourself.

 TODO Build myStr over several lines by concatenating these two strings:
 "This is the first sentence. " and "This is the second sentence." using the += operator.
 Use the += operator similar to how it is shown in the editor. Start by assigning the first string to myStr,
 then add on the second string.     */

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

console.log(myStr);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Constructing Strings with Variables

 Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator
 (+), you can insert one or more variables into a string you're building.

 TODO Set myName to a string equal to your name and build myStr with myName between the strings "My name is " and " and I am well!" */

var myName = "Kevin Tran";
var myStr = "My name is " + myName + " and I am well!";

console.log(myStr);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Appending Variables to Strings

 Just as we can build a string over multiple lines out of string literals,
 we can also append variables to a string using the plus equals (+=) operator.

 TODO Set someAdjective and append it to myStr using the += operator.

 someAdjective should be set to a string at least 3 characters long     */

var someAdjective = "awesome and very useful!";
var myStr = "Learning to code is ";

console.log(myStr += someAdjective);

/* *******************************************************************************
 ****************************************************************************** */

/** TODO Basic JavaScript: Find the Length of a String

 You can find the length of a String value by writing .length after the string variable or string literal.

 "Alan Peter".length; // 10

 For example, if we created a variable var firstName = "Charles", we could find
 out how long the string "Charles" is by using the firstName.length property.

 TODO Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.

 // Example
 var firstNameLength = 0;
 var firstName = "Ada";

 firstNameLength = firstName.length;        */

    // Setup
var lastNameLength;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;

console.log(lastNameLength);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Use Bracket Notation to Find the First Character in a String

 Bracket notation is a way to get a character at a specific index within a string.

 Most modern programming languages, like JavaScript, don't start counting at 1 like humans do.
 They start at 0. This is referred to as Zero-based indexing.

 For example, the character at index 0 in the word "Charles" is "C". So if var firstName = "Charles",
 you can get the value of the first letter of the string by using firstName[0].

 TODO Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

 Hint
 Try looking at the firstLetterOfFirstName variable declaration if you get stuck.

 // Example
 var firstLetterOfFirstName = "";
 var firstName = "Ada";

 firstLetterOfFirstName = firstName[0];     */

    // Setup
var firstLetterOfLastName;
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

console.log(firstLetterOfLastName);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Understand String Immutability

 In JavaScript, String values are immutable, which means that they cannot be altered once created.

 For example, the following code:

 var myStr = "Bob";
 myStr[0] = "J";

 cannot change the value of myStr to "Job", because the contents of myStr cannot be altered.
 Note that this does not mean that myStr cannot be changed, just that the individual characters of a string
 literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

 var myStr = "Bob";
 myStr = "Job";

 TODO Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

 // Setup
 var myStr = "Jello World";

 // Only change code below this line

 myStr[0] = "H"; // Fix Me       */

// Setup
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World";

console.log(myStr);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Use Bracket Notation to Find the Nth Character in a String

 You can also use bracket notation to get the character at other positions within a string.

 Remember that computers start counting at 0, so the first character is actually the zeroth character.

 TODO Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

 Hint
 Try looking at the secondLetterOfFirstName variable declaration if you get stuck.

 // Example
 var firstName = "Ada";
 var secondLetterOfFirstName = firstName[1];

 The thirdLetterOfLastName variable should have the value of v.
 */

    // Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

console.log(thirdLetterOfLastName);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Use Bracket Notation to Find the Last Character in a String

 In order to get the last letter of a string, you can subtract one from the string's length.

 For example, if var firstName = "Charles", you can get the value of the last letter of
 the string by using firstName[firstName.length - 1].

 TODO Use bracket notation to find the last character in the lastName variable.

 Hint
 Try looking at the lastLetterOfFirstName variable declaration if you get stuck.

 // Example
 var firstName = "Ada";
 var lastLetterOfFirstName = firstName[firstName.length - 1];

 lastLetterOfLastName should be "e".        */

    // Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String

 You can use the same principle we just used to retrieve the last
 character in a string to retrieve the Nth-to-last character.

 For example, you can get the value of the third-to-last letter of the var firstName = "Charles"
 string by using firstName[firstName.length - 3]

 TODO Use bracket notation to find the second-to-last character in the lastName string.

 Hint
 Try looking at the thirdToLastLetterOfFirstName variable declaration if you get stuck.

 // Example
 var firstName = "Ada";
 var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

 secondToLastLetterOfLastName should be "c".        */

    // Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

console.log(secondToLastLetterOfLastName);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Word Blanks

 We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks".
 You will create an (optionally humorous) "Fill in the Blanks" style sentence.

 In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs,
 adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

 Consider this sentence - "It was really ____, and we ____ ourselves ____".
 This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add
 words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

 var sentence = "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly.";

 TODO In this challenge, we provide you with a noun, a verb, an adjective and an adverb.
 You need to form a complete sentence using words of your choice, along with the words we provide.

 You will need to use the string concatenation operator + to build a new string, using the
 provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed
 string to the result variable.

 You will also need to account for spaces in your string, so that the final sentence
 has spaces between all the words. The result should be a complete sentence.

 wordBlanks("dog", "big", "ran", "quickly") should contain all of the passed in words
 separated by non-word characters (and any additional words in your madlib).            */

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "My smart " + myNoun + " " + myVerb + " " + myAdverb + " " + myAdjective + ".";

    // Your code above this line
    // return result;
    console.log(result);
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays

 With JavaScript array variables, we can store several pieces of data in one place.

 You start an array declaration with an opening square bracket, end it with a closing
 square bracket, and put a comma between each entry, like this:

 var sandwich = ["peanut butter", "jelly", "bread"].

 TODO Modify the new array myArray so that it contains both a string and a number (in that order).

 Hint
 Refer to the example code in the text editor if you get stuck.

 // Example
 var ourArray = ["John", 23];            */

    // Only change code below this line.
var myArray = ["Kevin", 20];

console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Nest one Array within Another Array

 You can also nest arrays within other arrays, like this: [["Bulls", 23], ["White Sox", 45]].
 This is also called a Multi-dimensional Array.

 TODO Create a nested array called myArray.

 // Example
 var ourArray = [["the universe", 42], ["everything", 101010]];             */

    // Only change code below this line.
var myArray = [["Kevin", 20], ["Britt", 20]];

console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Access Array Data with Indexes

 We can access the data inside arrays using indexes.

 Array indexes are written in the same bracket notation that strings use, except that
 instead of specifying a character, they are specifying an entry in the array. Like strings,
 arrays use zero-based indexing, so the first element in an array is element 0.

 Example

 var array = [50,60,70];
 array[0]; // equals 50
 var data = array[1]; // equals 60

 Note
 There shouldn't be any spaces between the array name and the square brackets, like array [0].
 Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

 TODO Create a variable called myData and set it to equal the first value of myArray using bracket notation.

 // Example
 var ourArray = [50,60,70];
 var ourData = ourArray[0]; // equals 50         */

    // Setup
var myArray = [50, 60, 70];

// Only change code below this line.
var myData = myArray[0];

console.log(myData);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Modify Array Data With Indexes

 Unlike strings, the entries of arrays are mutable and can be changed freely.

 Example

 var ourArray = [50,40,30];
 ourArray[0] = 15; // equals [15,40,30]
 Note
 There shouldn't be any spaces between the array name and the square brackets, like array [0].
 Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

 TODO Modify the data stored at index 0 of myArray to a value of 45.

 // Example
 var ourArray = [18,64,99];
 ourArray[1] = 45; // ourArray now equals [18,45,99].        */

    // Setup
var myArray = [18, 64, 99];

// Only change code below this line.
myArray[0] = 45;

console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Access Multi-Dimensional Arrays With Indexes

 One way to think of a multi-dimensional array, is as an array of arrays.
 When you use brackets to access your array, the first set of brackets refers to the
 entries in the outer-most (the first level) array, and each additional pair of brackets refers
 to the next level of entries inside.

 Example

 var arr = [
 [1,2,3],
 [4,5,6],
 [7,8,9],
 [[10,11,12], 13, 14]
 ];
 arr[3]; // equals [[10,11,12], 13, 14]
 arr[3][0]; // equals [10,11,12]
 arr[3][0][1]; // equals 11

 Note
 There shouldn't be any spaces between the array name and the square brackets, like array
 [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly,
 this may confuse other programmers reading your code.

 TODO Using bracket notation select an element from myArray such that myData is equal to 8.       */

    // Setup
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];

console.log(myData);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Manipulate Arrays With push()

 An easy way to append data to the end of an array is via the push() function.

 .push() takes one or more parameters and "pushes" them onto the end of the array.

 var arr = [1,2,3];
 arr.push(4);
 // arr is now [1,2,3,4]

 TODO Push ["dog", 3] onto the end of the myArray variable.

 // Example
 var ourArray = ["Stimpson", "J", "cat"];
 ourArray.push(["happy", "joy"]);
 // ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]    */

    // Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);

console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Manipulate Arrays With pop()

 Another way to change the data in an array is with the .pop() function.

 .pop() is used to "pop" a value off of the end of an array. We can store this "popped off"
 value by assigning it to a variable. In other words, .pop() removes the last element
 from an array and returns that element.

 Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

 var threeArr = [1, 4, 6];
 var oneDown = threeArr.pop();
 console.log(oneDown); // Returns 6
 console.log(threeArr); // Returns [1, 4]

 TODO Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.

 // Example
 var ourArray = [1,2,3];
 var removedFromOurArray = ourArray.pop();
 // removedFromOurArray now equals 3, and ourArray now equals [1,2]        */

    // Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

console.log(removedFromMyArray);
console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Manipulate Arrays With shift()

 pop() always removes the last element of an array. What if you want to remove the first?

 That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

 TODO Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

 // Example
 var ourArray = ["Stimpson", "J", ["cat"]];
 var removedFromOurArray = ourArray.shift();
 // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].      */

    // Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

console.log(removedFromMyArray);
console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Manipulate Arrays With unshift()

 Not only can you shift elements off of the beginning of an array, you can also unshift
 elements to the beginning of an array i.e. add elements in front of the array.

 .unshift() works exactly like .push(), but instead of adding the element at the end of the array,
 unshift() adds the element at the beginning of the array.

 TODO Add ["Paul",35] to the beginning of the myArray variable using unshift().

 // Example
 var ourArray = ["Stimpson", "J", "cat"];
 ourArray.shift(); // ourArray now equals ["J", "cat"]
 ourArray.unshift("Happy");
 // ourArray now equals ["Happy", "J", "cat"]          */

    // Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);

console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Shopping List

 Create a shopping list in the variable myList. The list should be a
 multi-dimensional array containing several sub-arrays.

 The first element in each sub-array should contain a string with the name of the item.
 The second element should be a number representing the quantity i.e.

 ["Chocolate Bar", 15]

 TODO There should be at least 5 sub-arrays in the list.         */

var myList = [["Chicken Beast", 1], ["Brown Rice", 2], ["Broccoli", 3], ["Low-Fat Yogurt", 4], ["Fruits", 5], ["Vegetables", 6]];

console.log(myList);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Write Reusable JavaScript with Functions

 In JavaScript, we can divide up our code into reusable parts called functions.

 Here's an example of a function:

 function functionName() {
  console.log("Hello World");
}

 You can call or invoke this function by using its name followed by parentheses, like this:

 functionName();

 Each time the function is called it will print out the message "Hello World" on the dev console.
 All of the code between the curly braces will be executed every time the function is called.

 TODO Create a function called reusableFunction which prints "Hi World" to the dev console.
 TODO Call the function.

 // Example
 function ourReusableFunction() {
  console.log("Heyya, World");
}

 ourReusableFunction();   */

// Only change code below this line
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Passing Values to Functions with Arguments

 Parameters are variables that act as placeholders for the values that are to be input to
 a function when it is called. When a function is defined, it is typically defined along
 with one or more parameters. The actual values that are input (or "passed") into a function
 when it is called are known as arguments.

 Here is a function with two parameters, param1 and param2:

 function testFun(param1, param2) {
  console.log(param1, param2);
}

 Then we can call testFun:

 testFun("Hello", "World");

 We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal
 "Hello" and param2 will equal "World". Note that you could call testFun again with different
 arguments and the parameters would take on the value of the new arguments.

 TODO Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
 TODO Call the function with two numbers as arguments.

 // Example
 function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
 ourFunctionWithArgs(10, 5); // Outputs 5

 // Only change code below this line.    */

function functionWithArgs(a, b, c) {
    console.log(a + b + c);
}

functionWithArgs(1, 2, 1);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Global Scope and Functions

 In JavaScript, scope refers to the visibility of variables. Variables which are defined
 outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

 Variables which are used without the var keyword are automatically created in the global scope.
 This can create unintended consequences elsewhere in your code or when running a function again.
 You should always declare your variables with var.

 TODO Using var, declare a global variable myGlobal outside of any function. Initialize it with a value of 10.

 TODO Inside function fun1, assign 5 to oopsGlobal without using the var keyword.   */

    // Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

console.log(fun2());

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Local Scope and Functions

 Variables which are declared within a function, as well as the function parameters have
 local scope. That means, they are only visible within that function.

 Here is a function myTest with a local variable called loc.

 function myTest() {
  var loc = "foo";
  console.log(loc);
}
 myTest(); // logs "foo"
 console.log(loc); // loc is not defined

 loc is not defined outside of the function.

 TODO Declare a local variable myVar inside myLocalScope.
 todo Run the tests and then follow the instructions commented out in the editor.   */

function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar = "I love Bacon";
    console.log(myVar);
}

myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// console.log(myVar);

// Now remove the console log line to pass the test

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Global vs. Local Scope in Functions

 It is possible to have both local and global variables with the same name. When you do this,
 the local variable takes precedence over the global variable.

 In this example:

 var someVar = "Hat";
 function myFun() {
  var someVar = "Head";
  return someVar;
}

 The function myFun will return "Head" because the local version of the variable is present.

 TODO Add a local variable to myOutfit function to override the value of outerWear with "sweater".   */

    // Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";


    // Only change code above this line
    return outerWear;
}

console.log(myOutfit());

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Return a Value from a Function with Return

 We can pass values into a function with arguments. You can use a return statement to send
 a value back out of a function.

 Example

 function plusThree(num) {
  return num + 3;
}
 var answer = plusThree(5); // 8
 plusThree takes an argument for num and returns a value equal to num + 3.

 TODO Create a function timesFive that accepts one argument, multiplies it by 5,
 todo; and returns the new value. See the last line in the editor for an example of how
 todo; you can test your timesFive function.

 // Example
 function minusSeven(num) {
  return num - 7;
}

 // Only change code below this line   */
function timesFive(x) {
    return x * 5;
}

console.log(timesFive(10));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Understanding Undefined Value returned from a Function

 A function can include the return statement but it does not have to.
 In the case that the function doesn't have a return statement, when you call it,
 the function processes the inner code but the returned value is undefined.

 Example

 var sum = 0;
 function addSum(num) {
  sum = sum + num;
}

 var returnedValue = addSum(3); // sum will be modified but returned value is undefined
 addSum is a function without a return statement. The function will change the global sum variable
 but the returned value of the function is undefined

 TODO Create a function addFive without any arguments. This function adds 5 to the sum variable,
 todo; but its returned value is undefined.

 // Example
 var sum = 0;
 function addThree() {
  sum = sum + 3;
}                                      */

    // Only change code below this line
var sum = 1;

function addFive() {
    sum = sum + 5;
}

// Only change code above this line
var returnedValue = addFive();

console.log(returnedValue);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Assignment with a Returned Value

 If you'll recall from our discussion of Storing Values with the Assignment Operator,
 everything to the right of the equal sign is resolved before the value is assigned.
 This means we can take the return value of a function and assign it to a variable.

 Assume we have pre-defined a function sum which adds two numbers together, then:

 ourSum = sum(5, 12);

 will call sum function, which returns a value of 17 and assigns it to ourSum variable.

 TODO Call the processArg function with an argument of 7 and assign its return value to the variable processed.

 // Example
 var changed = 0;

 function change(num) {
  return (num + 5) / 3;
}

 changed = change(10);                           */

    // Setup
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
var processed = processArg(7);

console.log(processed);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Stand in Line

 In Computer Science a queue is an abstract Data Structure where items are kept in order.
 New items can be added at the back of the queue and old items are taken off from the front of the queue.

 todo; Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

 todo; Add the number to the end of the array, then remove the first element of the array.

 todo; The nextInLine function should then return the element that was removed.            */

function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var removed = arr.shift();
    console.log(removed);  // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Understanding Boolean Values

 Another data type is the Boolean. Booleans may only be one of two values: true or false.
 They are basically little on-off switches, where true is "on" and false is "off." These
 two states are mutually exclusive.

 Note
 Boolean values are never written with quotes. The strings "true" and "false" are not Boolean
 and have no special meaning in JavaScript.

 TODO Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked. */

function welcomeToBooleans() {

// Only change code below this line.

    return true; // Change this line

// Only change code above this line.
}

console.log(welcomeToBooleans());

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Use Conditional Logic with If Statements

 If statements are used to make decisions in code. The keyword if tells JavaScript to execute the
 code in the curly braces under certain conditions, defined in the parentheses. These conditions
 are known as Boolean conditions and they may only be true or false.

 When the condition evaluates to true, the program executes the statement inside the curly braces.
 When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

 Pseudocode

 if (condition is true) {
  statement is executed
}
 Example

 function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
 test(true); // returns "It was true"
 test(false); // returns "It was false"

 When test is called with a value of true, the if statement evaluates myCondition to see
 if it is true or not. Since it is true, the function returns "It was true". When we call
 test with a value of false, myCondition is not true and the statement in the curly braces is
 not executed and the function returns "It was false".

 TODO Create an if statement inside the function to return "Yes, that was true"
 todo; if the parameter wasThatTrue is true and return "No, that was false" otherwise.

 // Example
 function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}                                      */

// Setup
function trueOrFalse(wasThatTrue) {

    // Only change code below this line.
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";

    // Only change code above this line.

}

// Change this value to test
console.log(trueOrFalse(true));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Comparison with the Equality Operator

 There are many Comparison Operators in JavaScript. All of these operators return a
 boolean true or false value.

 The most basic operator is the equality operator ==. The equality operator compares two
 values and returns true if they're equivalent or false if they are not. Note that equality
 is different from assignment (=), which assigns the value at the right of the operator to a variable in the left.

 function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
 If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will
 execute, and the function will return "Equal". Otherwise, the function will return "Not Equal".

 In order for JavaScript to compare two different data types (for example, numbers and strings),
 it must convert one type to another. This is known as "Type Coercion". Once it does, however, it
 can compare terms as follows:

 1 == 1 // true
 1 == 2 // false
 1 == '1' // true
 "3" == 3 // true

 TODO Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12. */

//Setup
function testEquals(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

//Change this value to test
console.log(testEquals(10));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Comparison with the Strict Equality Operator

 Strict equality (===) is the counterpart to the equality operator (==). However, unlike
 the equality operator, which attempts to convert both values being compared to a common
 type, the strict equality operator does not perform a type conversion.

 If the values being compared have different types, they are considered unequal, and the
 strict equality operator will return false.

 Examples

 3 === 3 // true
 3 === '3' // false

 In the second example, 3 is a Number type and '3' is a String type.

 TODO Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7 */

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(testStrict(10));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Practice comparing different values

 In the last two challenges, we learned about the equality operator (==) and the strict
 equality operator (===). Let's do a quick review and practice using these operators some more.

 If the values being compared are not of the same type, the equality operator will perform
 a type conversion, and then evaluate the values. However, the strict equality operator will
 compare both the data type and value as-is, without converting one type to the other.

 Examples

 3 == '3' // returns true because JavaScript performs type conversion from string to number
 3 === '3' // returns false because the types are different and type conversion is not performed
 Note
 In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

 typeof 3 // returns 'number'
 typeof '3' // returns 'string'

 TODO The compareEquality function in the editor compares two values using the equality operator.
 todo; Modify the function so that it returns "Equal" only when the values are strictly equal.    */

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, 10));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Comparison with the Inequality Operator

 The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal"
 and returns false where equality would return true and vice versa. Like the equality operator,
 the inequality operator will convert data types of values while comparing.

 Examples

 1 != 2 // true
 1 != "1" // false
 1 != '1' // false
 1 != true // false
 0 != false // false

 TODO Add the inequality operator != in the if statement so that the function will return
 todo; "Not Equal" when val is not equivalent to 99                     */

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "True - Not Equal";
    }
    return "False - Equal";
}

// Change this value to test
console.log(testNotEqual(10));

/* *******************************************************************************
****************************************************************************** */


/** TODO Basic JavaScript: Comparison with the Strict Inequality Operator

 The strict inequality operator (!==) is the logical opposite of the strict equality operator.
 It means "Strictly Not Equal" and returns false where strict equality would return true and vice
 versa. Strict inequality will not convert data types.

 Examples

 3 !== 3 // false
 3 !== '3' // true
 4 !== 3 // true

 TODO Add the strict inequality operator to the if statement so the function will return
 todo; "Not Equal" when val is not strictly equal to 17                 */

// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line

    if (val !== 17) {

        // Only Change Code Above this Line

        return "True - Not Equal";
    }
    return "False - Equal";
}

// Change this value to test
console.log(testStrictNotEqual(10));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Comparison with the Greater Than Operator

 The greater than operator (>) compares the values of two numbers. If the number to the left
 is greater than the number to the right, it returns true. Otherwise, it returns false.

 Like the equality operator, greater than operator will convert data types of values while comparing.

 Examples

 5 > 3 // true
 7 > '3' // true
 2 > 3 // false
 '1' > 9 // false

 TODO Add the greater than operator to the indicated lines so that the return statements make sense.                */

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(10));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Comparison with the Greater Than Or Equal To Operator

 The greater than or equal to operator (>=) compares the values of two numbers. If the
 number to the left is greater than or equal to the number to the right, it returns true.
 Otherwise, it returns false.

 Like the equality operator, greater than or equal to operator will convert data types while comparing.

 Examples

 6 >= 6 // true
 7 >= '3' // true
 2 >= 3 // false
 '7' >= 9 // false

 TODO Add the greater than or equal to operator to the indicated lines so that the return statements make sense.        */

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(10));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Comparison with the Less Than Operator

 The less than operator (<) compares the values of two numbers. If the number to the left is
 less than the number to the right, it returns true. Otherwise, it returns false. Like the equality
 operator, less than operator converts data types while comparing.

 Examples

 2 < 5 // true
 '3' < 7 // true
 5 < 5 // false
 3 < 2 // false
 '8' < 4 // false

 TODO Add the less than operator to the indicated lines so that the return statements make sense.       */

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
console.log(testLessThan(10));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Comparison with the Less Than Or Equal To Operator

 The less than or equal to operator (<=) compares the values of two numbers. If the number
 to the left is less than or equal to the number to the right, it returns true. If the number
 on the left is greater than the number on the right, it returns false. Like the equality operator,
 less than or equal to converts data types.

 Examples

 4 <= 5 // true
 '7' <= 7 // true
 5 <= 5 // true
 3 <= 2 // false
 '8' <= 4 // false

 TODO Add the less than or equal to operator to the indicated lines so that the return statements make sense.       */

function testLessOrEqual(val) {
    if (val) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

// Change this value to test
console.log(testLessOrEqual(10));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Comparisons with the Logical And Operator

 Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns
 true if and only if the operands to the left and right of it are true.

 The same effect could be achieved by nesting an if statement inside another if:

 if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
 return "No";
 will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:

 if (num > 5 && num < 10) {
  return "Yes";
}
 return "No";

 TODO Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and
 todo; greater than or equal to 25. Otherwise, will return "No".

 function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

 // Change this value to test
 testLogicalAnd(10);                                */

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

// Change this value to test
console.log(testLogicalAnd(25));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Comparisons with the Logical Or Operator

 The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

 The logical or operator is composed of two pipe symbols (|). This can typically be found between
 your Backspace and Enter keys.

 The pattern below should look familiar from prior waypoints:

 if (num > 10) {
  return "No";
}
 if (num < 5) {
  return "No";
}
 return "Yes";
 will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

 if (num > 10 || num < 5) {
  return "No";
}
 return "Yes";

 TODO Combine the two if statements into one statement which returns "Outside" if val is not between
 todo; 10 and 20, inclusive. Otherwise, return "Inside".                */

function testLogicalOr(val) {
    // Only change code below this line

    if (val > 20 || val < 10) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

// Change this value to test
console.log(testLogicalOr(15));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Introducing Else Statements

 When a condition for an if statement is true, the block of code following it is executed.
 What about when that condition is false? Normally nothing would happen. With an else statement,
 an alternate block of code can be executed.

 if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

 TODO Combine the if statements into a single if/else statement.            */

function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

// Change this value to test
console.log(testElse(4));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Introducing Else If Statements

 If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

 if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

 TODO Convert the logic to use else if statements.              */

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

// Change this value to test
console.log(testElseIf(7));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Logical Order in If Else Statements

 Order is important in if, else if statements.

 The function is executed from top to bottom so you will want to be careful of what statement comes first.

 Take these two functions as an example.

 Here's the first:

 function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
 And the second just switches the order of the statements:

 function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
 While these two functions look nearly identical if we pass a number to both we get different outputs.

 foo(0) // "Less than one"
 bar(0) // "Less than two"

 TODO Change the order of logic in the function so that it will return the correct statements in all cases.     */

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

// Change this value to test
console.log(orderMyLogic(7));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Chaining If Else Statements

 if/else statements can be chained together for complex logic. Here is pseudocode
 of multiple chained if / else if statements:

 if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
 TODO Write chained if/else if statements to fulfill the following conditions:

 num < 5 - return "Tiny"
 num < 10 - return "Small"
 num < 15 - return "Medium"
 num < 20 - return "Large"
 num >= 20 - return "Huge"                      */

function testSize(num) {
    //Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

console.log(testSize(21));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Golf Code

 In the game of golf each hole has a par meaning the average number of strokes a golfer
 is expected to make in order to sink the ball in a hole to complete the play. Depending
 on how far above or below par your strokes are, there is a different nickname.

 TODO Your function will be passed par and strokes arguments. Return the correct string according
 todo; to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

 Strokes                Return
 1                        "Hole-in-one!"
 <= par - 2                "Eagle"
 par - 1                "Birdie"
 par                    "Par"
 par + 1                "Bogey"
 par + 2                "Double Bogey"
 >= par + 3                "Go Home!"

 TODO par and strokes will always be numeric and positive. We have added an array
 todo; of all the names for your convenience.               */

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= (par - 2)) {
        return names[1];
    } else if (strokes === (par - 1)) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === (par + 1)) {
        return names[4];
    } else if (strokes === (par + 2)) {
        return names[5];
    } else if (strokes >= (par + 3)) {
        return names[6];
    }
    return "Change Me";
    // Only change code above this line
}

// Change these values to test

console.log(golfScore(4, 1)); //hole in one
console.log(golfScore(4, 2)); //eagle
console.log(golfScore(4, 3)); //birdie
console.log(golfScore(4, 4)); //par
console.log(golfScore(4, 5)); //bogey
console.log(golfScore(4, 6)); //double bogey
console.log(golfScore(4, 7)); //go home

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Selecting from Many Options with Switch Statements

 If you have many options to choose from, use a switch statement. A switch statement tests
 a value and can have many case statements which define various possible values. Statements are
 executed from the first matched case value until a break is encountered.

 Here is a pseudocode example:

 switch(num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}

 case values are tested with strict equality (===). The break tells JavaScript to
 stop executing statements. If the break is omitted, the next statement will be executed.

 TODO Write a switch statement which tests val and sets answer for the following conditions:
 1 - "alpha"
 2 - "beta"
 3 - "gamma"
 4 - "delta"                        */

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line


    // Only change code above this line
    return answer;
}

// Change this value to test
caseInSwitch(1);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Selecting from Many Options with Switch Statements

 If you have many options to choose from, use a switch statement. A switch statement tests
 a value and can have many case statements which define various possible values. Statements are
 executed from the first matched case value until a break is encountered.

 Here is a pseudocode example:

 switch(num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}

 case values are tested with strict equality (===). The break tells JavaScript to stop
 executing statements. If the break is omitted, the next statement will be executed.

 TODO Write a switch statement which tests val and sets answer for the following conditions:
 1 - "alpha"
 2 - "beta"
 3 - "gamma"
 4 - "delta"                    */

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
    }
    // Only change code above this line
    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Adding a Default Option in Switch Statements

 In a switch statement you may not be able to specify all possible values as case statements.
 Instead, you can add the default statement which will be executed if no matching case
 statements are found. Think of it like the final else statement in an if/else chain.

 A default statement should be the last case.

 switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

 TODO Write a switch statement to set answer for the following conditions:
 "a" - "apple"
 "b" - "bird"
 "c" - "cat"
 default - "stuff"                                      */

function switchOfStuff(val) {
    var answer = "";

    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
    }
    return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("kevin"));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Multiple Identical Options in Switch Statements

 If the break statement is omitted from a switch statement's case, the following
 case statement(s) are executed until a break is encountered. If you have multiple
 inputs with the same output, you can represent them in a switch statement like this:

 switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

 Cases for 1, 2, and 3 will all produce the same result.

 TODO Write a switch statement to set answer for the following ranges:
 1-3 - "Low"
 4-6 - "Mid"
 7-9 - "High"

 Note
 You will need to have a case statement for each number in the range.           */

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }
    // Only change code above this line
    return answer;
}

// Change this value to test
console.log(sequentialSizes(9));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Replacing If Else Chains with Switch

 If you have many options to choose from, a switch statement can be easier to write than
 many chained if/else if statements. The following:

 if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
 can be replaced with:

 switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

 TODO Change the chained if/else if statements into a switch statement.

 function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

 // Change this value to test
 chainToSwitch(7);                          */

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
    }

    // Only change code above this line
    return answer;
}

// Change this value to test
console.log(chainToSwitch(7));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Returning Boolean Values from Functions

 You may recall from Comparison with the Equality Operator that all comparison operators
 return a boolean true or false value.

 Sometimes people use an if/else statement to do a comparison, like this:

 function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
 But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

 function isEqual(a,b) {
  return a === b;
}

 TODO Fix the function isLess to remove the if/else statements.

 function isLess(a, b) {
    // Fix this code
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

 // Change these values to test
 isLess(10, 15);                     */

function isLess(a, b) {
    // Fix this code
    return a < b;
}

// Change these values to test
console.log(isLess(10, 15));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Return Early Pattern for Functions

 When a return statement is reached, the execution of the current function stops and control
 returns to the calling location.

 Example

 function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
 myFun();

 The above outputs "Hello" to the console, returns "World", but "byebye" is never output,
 because the function exits at the return statement.

 TODO Modify the function abTest so that if a or b are less than 0 the function will immediately
 todo; exit with a value of undefined.              */

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(4, 4));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Counting Cards

 In the casino game Blackjack, a player can gain an advantage over the house by keeping
 track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

 Having more high cards remaining in the deck favors the player. Each card is assigned a value
 according to the table below. When the count is positive, the player should bet high. When the
 count is zero or negative, the player should bet low.

 Count Change        Cards
 +1                    2, 3, 4, 5, 6
 0                    7, 8, 9
 -1                    10, 'J', 'Q', 'K', 'A'

 TODO You will write a card counting function. It will receive a card parameter, which can be a number
 or a string, and increment or decrement the global count variable according to the card's value (see table).
 The function will then return a string with the current count and the string Bet if the count is positive,
 or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should
 be separated by a single space.

 Example Output
 -3 Hold
 5 Bet

 Hint
 Do NOT reset count to 0 when value is 7, 8, or 9.
 Do NOT return an array.
 Do NOT include quotes (single or double) in the output.                */

var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Build JavaScript Objects

 You may have heard the term object before.

 Objects are similar to arrays, except that instead of using indexes to access and modify their data,
 you access the data in objects through what are called properties.

 Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

 Here's a sample cat object:

 var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

 In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However,
 you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

 var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

 However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

 TODO Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".

 You can set these object properties to whatever values you want, as long "name" is a string, "legs" and "tails" are
 numbers, and "friends" is an array.

 // Example
 var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};              */

    // Only change code below this line.

var myDog = {
        "name": "Tiana",
        "legs": 4,
        "tails": 1,
        "friends": ["Everyone!"]
    };

console.log(myDog.name);
console.log(myDog.legs);
console.log(myDog.tails);
console.log(myDog.friends);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Accessing Object Properties with Dot Notation

 There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

 Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

 Here is a sample of using dot notation (.) to read an object's property:

 var myObj = {
  prop1: "val1",
  prop2: "val2"
};
 var prop1val = myObj.prop1; // val1
 var prop2val = myObj.prop2; // val2

 TODO Read in the property values of testObj using dot notation. Set the variable
 todo; hatValue equal to the object's property hat and set the variable shirtValue
 todo; equal to the object's property shirt.                    */

// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj["shirt"];    // Change this line

console.log(hatValue);
console.log(shirtValue);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Accessing Object Properties with Bracket Notation

 The second way to access the properties of an object is bracket notation ([]). If the property
 of the object you are trying to access has a space in its name, you will need to use bracket notation.

 However, you can still use bracket notation on object properties without spaces.

 Here is a sample of using bracket notation to read an object's property:

 var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

 myObj["Space Name"]; // Kirk
 myObj['More Space']; // Spock
 myObj["NoSpace"]; // USS Enterprise

 Note that property names with spaces in them must be in quotes (single or double).

 TODO Read the values of the properties "an entree" and "the drink" of testObj
 todo; using bracket notation and assign them to entreeValue and drinkValue respectively.       */

    // Setup
var testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
    };

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

console.log(entreeValue);
console.log(drinkValue);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Accessing Object Properties with Variables

 Another use of bracket notation on objects is to access a property which is stored as the
 value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

 Here is an example of using a variable to access a property:

 var dogs = {
  Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};

 var myDog = "Hunter";
 var myBreed = dogs[myDog];
 console.log(myBreed); // "Doberman"
 Another way you can use this concept is when the property's name is collected
 dynamically during the program execution, as follows:

 var someObj = {
  propName: "John"
};

 function propPrefix(str) {
  var s = "prop";
  return s + str;
}

 var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
 console.log(someObj[someProp]); // "John"

 Note that we do not use quotes around the variable name when using it to access the
 property because we are using the value of the variable, not the name.

 TODO Use the playerNumber variable to look up player 16 in testObj using bracket notation. Then assign that name to the player variable. */

// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

console.log(player);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Updating Object Properties

 After you've created a JavaScript object, you can update its properties at any time
 just like you would update any other variable. You can use either dot or bracket notation to update.

 For example, let's look at ourDog:

 var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
 Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property:

 ourDog.name = "Happy Camper"; or

 ourDog["name"] = "Happy Camper";

 Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper".

 TODO Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.

 // Example
 var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

 ourDog.name = "Happy Camper";          */

    // Setup
var myDog = {
        "name": "Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
    };

// Only change code below this line.

myDog.name = "Happy Coder";

console.log(myDog.name);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Add New Properties to a JavaScript Object

 You can add new properties to existing JavaScript objects the same way you would modify them.

 Here's how we would add a "bark" property to ourDog:

 ourDog.bark = "bow-wow";

 or

 ourDog["bark"] = "bow-wow";

 Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".

 TODO Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

 // Example
 var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

 ourDog.bark = "bow-wow";           */

    // Setup
var myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
    };

// Only change code below this line.
var dogSound = myDog.bark = "woof";

console.log(dogSound);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Delete Properties from a JavaScript Object

 We can also delete properties from objects like this:

 delete ourDog.bark;

 TODO Delete the "tails" property from myDog. You may use either dot or bracket notation.

 // Example
 var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

 delete ourDog.bark;                */

    // Setup
var myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"],
        "bark": "woof"
    };

// Only change code below this line.

delete myDog.tails;

console.log(myDog);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Using Objects for Lookups

 Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data,
 you can use an object to "lookup" values rather than a switch statement or an if/else chain. This
 is most useful when you know that your input data is limited to a certain range.

 Here is an example of a simple reverse alphabet lookup:

 var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
 alpha[2]; // "Y"
 alpha[24]; // "C"

 var value = 2;
 alpha[value]; // "Y"

 TODO Convert the switch statement into an object called lookup. Use it to look up val and
 todo; assign the associated string to the result variable.                 */

// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    return lookup[val];

    // Only change code above this line
    return result;
}

// Change this value to test
console.log(phoneticLookup("charlie"));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Testing Objects for Properties

 Sometimes it is useful to check if the property of a given object exists or not. We can use
 the .hasOwnProperty(propname) method of objects to determine if that object has the given property
 name. .hasOwnProperty() returns true or false if the property is found or not.

 Example

 var myObj = {
  top: "hat",
  bottom: "pants"
};

 myObj.hasOwnProperty("top"); // true
 myObj.hasOwnProperty("middle"); // false

 TODO Modify the function checkObj to test myObj for checkProp. If the property is
 todo; found, return that property's value. If not, return "Not Found".         */

    // Setup
var myObj = {
        gift: "pony",
        pet: "kitten",
        bed: "sleigh"
    };

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp) == true) {
        return myObj[checkProp];
    }
    else {
        return "Not Found";
    }
}

// Test your code by modifying these values
console.log(checkObj("gift"));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Manipulating Complex Objects

 Sometimes you may want to store data in a flexible Data Structure. A JavaScript
 object is one way to handle flexible data. They allow for arbitrary combinations
 of strings, numbers, booleans, arrays, functions, and objects.

 Here's an example of a complex data structure:

 var ourMusic = [
 {
   "artist": "Daft Punk",
   "title": "Homework",
   "release_year": 1997,
   "formats": [
     "CD",
     "Cassette",
     "LP"
   ],
   "gold": true
 }
 ];

 This is an array which contains one object inside. The object has various
 pieces of metadata about an album. It also has a nested "formats" array. If you
 want to add more album records, you can do this by adding records to the top level array.

 Objects hold data in a property, which has a key-value format. In the example above,
 "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk".

 JavaScript Object Notation or JSON is a related data interchange format used to store data.

 {
   "artist": "Daft Punk",
   "title": "Homework",
   "release_year": 1997,
   "formats": [
     "CD",
     "Cassette",
     "LP"
   ],
   "gold": true
 }

 Note
 You will need to place a comma after every object in the array, unless it is the last object in the array.

 TODO Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.  */

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // Add record here
    {
        "artist": "Kevin Tran",
        "title": "High-life",
        "release_year": 2018,
        "formats": [
            "CD",
            "DVD"
        ],
    }
];

console.log(myMusic[1]);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Accessing Nested Objects

 The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

 Here is a nested object:

 var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },

  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

 ourStorage.cabinet["top drawer"].folder2; // "secrets"
 ourStorage.desk.drawer; // "stapler"

 TODO Access the myStorage object and assign the contents of the glove
 todo; box property to the gloveBoxContents variable. Use bracket notation for properties with a space in their name. */

// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

console.log(gloveBoxContents);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Accessing Nested Arrays

 As we have seen in earlier examples, objects can contain both nested objects and
 nested arrays. Similar to accessing nested objects, Array bracket notation can
 be chained to access nested arrays.

 Here is an example of how to access a nested array:

 var ourPets = [
 {
   animalType: "cat",
   names: [
     "Meowzer",
     "Fluffy",
     "Kit-Cat"
   ]
 },
 {
   animalType: "dog",
   names: [
     "Spot",
     "Bowser",
     "Frankie"
   ]
 }
 ];
 ourPets[0].names[1]; // "Fluffy"
 ourPets[1].names[0]; // "Spot"

 TODO Retrieve the second tree from the variable myPlants using object dot and array bracket notation.      */

    // Setup
var myPlants = [
        {
            type: "flowers",
            list: [
                "rose",
                "tulip",
                "dandelion"
            ]
        },
        {
            type: "trees",
            list: [
                "fir",
                "pine",
                "birch"
            ]
        }
    ];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

console.log(secondTree);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Record Collection

 You are given a JSON object representing a part of your musical album collection.
 Each album has several properties and a unique id number as its key. Not all albums
 have complete information.

 Write a function which takes an album's id (like 2548), a property prop (like "artist"
 or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

 If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

 Your function must always return the entire collection object.

 There are several rules for handling incomplete data:

 If prop is "tracks" but the album doesn't have a "tracks" property, create an empty
 array before adding the new value to the album's corresponding property.

 If prop is "tracks" and value isn't empty (""), push the value onto the end of the
 album's existing tracks array.

 If value is empty (""), delete the given prop property from the album.

 TODO Hints
 Use bracket notation when accessing object properties with variables.

 Push is an array method you can read about on Mozilla Developer Network.

 You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher. */

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (prop === "tracks" && value !== "") {
        if (collection[id][prop]) {
            collection[id][prop].push(value);
        }
        else {
            collection[id][prop] = [value];
        }
    } else if (value !== "") {
        collection[id][prop] = value;
    } else {
        delete collection[id][prop];
    }
    return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Iterate with JavaScript While Loops

 You can run the same code multiple times by using a loop.

 The first type of loop we will learn is called a "while" loop because it runs "while"
 a specified condition is true and stops once that condition is no longer true.

 var ourArray = [];
 var i = 0;
 while(i < 5) {
  ourArray.push(i);
  i++;
}

 Let's try getting a while loop to work by pushing values to an array.

 TODO Push the numbers 0 through 4 to myArray using a while loop.           */

    // Setup
var myArray = [];
var i = 0;
// Only change code below this line.
while (i <= 4) {
    myArray.push(i);
    i++;
};

console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Iterate with JavaScript For Loops

 You can run the same code multiple times by using a loop.

 The most common type of JavaScript loop is called a "for loop" because it runs "for" a specific number of times.

 For loops are declared with three optional expressions separated by semicolons:

 for ([initialization]; [condition]; [final-expression])

 The initialization statement is executed one time only before the loop starts. It is
 typically used to define and setup your loop variable.

 The condition statement is evaluated at the beginning of every loop iteration and will
 continue as long as it evaluates to true. When condition is false at the start of the iteration,
 the loop will stop executing. This means if condition starts as false, your loop will never execute.

 The final-expression is executed at the end of each loop iteration, prior to the next condition
 check and is usually used to increment or decrement your loop counter.

 In the following example we initialize with i = 0 and iterate while our condition i < 5 is
 true. We'll increment i by 1 in each loop iteration with i++ as our final-expression.

 var ourArray = [];
 for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

 ourArray will now contain [0,1,2,3,4].

 TODO Use a for loop to work to push the values 1 through 5 onto myArray.

 // Example
 var ourArray = [];

 for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}               */

 // Setup
 var myArray = [];

 // Only change code below this line.

for (var j = 1; j <= 5; j++) {
    myArray.push(j)
}

console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Iterate Odd Numbers With a For Loop

 For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

 We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

 var ourArray = [];
 for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
 ourArray will now contain [0,2,4,6,8].

 Let's change our initialization so we can count by odd numbers.

 TODO Push the odd numbers from 1 through 9 to myArray using a for loop.

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}                               */

// Setup
var myArray = [];

// Only change code below this line.
for (j = 1; j <= 9; j += 2) {
    myArray.push(j);
}

console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Count Backwards With a For Loop

 A for loop can also count backwards, so long as we can define the right conditions.

 In order to count backwards by twos, we'll need to change our initialization, condition, and final-expression.

 We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

 var ourArray = [];
 for (var i=10; i > 0; i-=2) {
  ourArray.push(i);
}

 ourArray will now contain [10,8,6,4,2].

 Let's change our initialization and final-expression so we can count backward by twos by odd numbers.

 TODO Push the odd numbers from 9 through 1 to myArray using a for loop.

 // Example
 var ourArray = [];

 for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}                               */

 // Setup
 var myArray = [];

 // Only change code below this line.
for (var i = 9; i >= 1; i -= 2) {
    myArray.push(i);
}
console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Iterate Through an Array with a For Loop

 A common task in JavaScript is to iterate through the contents of an array.
 One way to do that is with a for loop. This code will output each element of the array arr to the console:

 var arr = [10,9,8,7,6];
 for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

 Remember that Arrays have zero-based numbering, which means the last index of the array
 is length - 1. Our condition for this loop is i < arr.length, which stops when i is at length - 1.

 TODO Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

 // Example
 var ourArr = [ 9, 10, 11, 12];
 var ourTotal = 0;

 for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}                           */

 // Setup
 var myArr = [ 2, 3, 4, 5, 6];
 var total = 0;
 // Only change code below this line
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
console.log(total);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Nesting For Loops

 If you have a multi-dimensional array, you can use the same logic as the prior waypoint
 to loop through both the array and any sub-arrays. Here is an example:

 var arr = [
 [1,2], [3,4], [5,6]
 ];
 for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

 This outputs each sub-element in arr one at a time. Note that for the inner loop, we
 are checking the .length of arr[i], since arr[i] is itself an array.

 TODO Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr */

 function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
    for(var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product = product * arr[i][j];
        }
    }
  // Only change code above this line
  return product;
}

 // Modify values below to test your code
 console.log(multiplyAll([1,2]));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Iterate with JavaScript Do...While Loops

 You can run the same code multiple times by using a loop.

 The next type of loop you will learn is called a "do...while" loop because it first will "do"
 one pass of the code inside the loop no matter what, and then it runs "while" a specified condition
 is true and stops once that condition is no longer true. Let's look at an example.

 var ourArray = [];
 var i = 0;
 do {
  ourArray.push(i);
  i++;
} while (i < 5);

 This behaves just as you would expect with any other type of loop, and the resulting array will look
 like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves
 when the condition fails on the first check. Let's see this in action.

 Here is a regular while loop that will run the code in the loop as long as i < 5.

 var ourArray = [];
 var i = 5;
 while (i < 5) {
  ourArray.push(i);
  i++;
}

 Notice that we initialize the value of i to be 5. When we execute the next line, we notice
 that i is not less than 5. So we do not execute the code inside the loop. The result is that
 ourArray will end up with nothing added to it, so it will still look like this [] when all the
 code in the example above finishes running.

 Now, take a look at a do...while loop.

 var ourArray = [];
 var i = 5;
 do {
  ourArray.push(i);
  i++;
} while (i < 5);

 In this case, we initialize the value of i as 5, just like we did with the while loop. When we get to the
 next line, there is no check for the value of i, so we go to the code inside the curly braces and execute it.
 We will add one element to the array and increment i before we get to the condition check. Then, when we get
 to checking if i < 5 see that i is now 6, which fails the conditional check. So we exit the loop and are done.
 At the end of the above example, the value of ourArray is [5].

 Essentially, a do...while loop ensures that the code inside the loop will run at least once.

 Let's try getting a do...while loop to work by pushing values to an array.

 TODO Change the while loop in the code to a do...while loop so that the loop will push the number 10 to myArray,
 todo; and i will be equal to 11 when your code finishes running.               */

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(myArray);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Profile Lookup

 We have an array of objects representing different people in our contacts lists.

 A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

 The function should check if name is an actual contact's firstName and the given property (prop)
 is a property of that contact.

 If both are true, then return the "value" of that property.

 If name does not correspond to any contacts then return "No such contact"

 If prop does not correspond to any valid properties of a contact found to match name then return "No such property"        */

 //Setup
 var contacts = [
 {
     "firstName": "Akira",
     "lastName": "Laine",
     "number": "0543236543",
     "likes": ["Pizza", "Coding", "Brownie Points"]
 },
 {
     "firstName": "Harry",
     "lastName": "Potter",
     "number": "0994372684",
     "likes": ["Hogwarts", "Magic", "Hagrid"]
 },
 {
     "firstName": "Sherlock",
     "lastName": "Holmes",
     "number": "0487345643",
     "likes": ["Intriguing Cases", "Violin"]
 },
 {
     "firstName": "Kristian",
     "lastName": "Vos",
     "number": "unknown",
     "likes": ["JavaScript", "Gaming", "Foxes"]
 }
 ];


 function lookUpProfile(name, prop){
// Only change code below this line
     for (var x = 0; x < contacts.length; x++){
         if (contacts[x].firstName === name) {
             if (contacts[x].hasOwnProperty(prop)) {
                 return contacts[x][prop];
             } else {
                 return "No such property";
             }
         }
     }
     return "No such contact";
// Only change code above this line
}

 // Change these values to test your function
 console.log(lookUpProfile("Akira", "likes"));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Generate Random Fractions with JavaScript

 Random numbers are useful for creating random behavior.

 JavaScript has a Math.random() function that generates a random decimal number between 0
 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1

 Note
 Like Storing Values with the Equal Operator, all function calls will be resolved before the
 return executes, so we can return the value of the Math.random() function.

 TODO Change randomFraction to return a random number instead of returning 0.       */

function randomFraction() {

    // Only change code below this line.

    return math.random();

    // Only change code above this line.
}

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Generate Random Whole Numbers with JavaScript

 It's great that we can generate random decimal numbers, but it's even more useful if we use it to
 generate random whole numbers.

 Use Math.random() to generate a random decimal.
 Multiply that random decimal by 20.
 Use another function, Math.floor() to round the number down to its nearest whole number.
 Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's
 impossible to actually get 20. This technique will give us a whole number between 0 and 19.

 Putting everything together, this is what our code looks like:

 Math.floor(Math.random() * 20);

 We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function
 to round the value down to the nearest whole number.

 TODO Use this technique to generate and return a random whole number between 0 and 9.          */

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    // Only change code below this line.

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum(20));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Generate Random Whole Numbers within a Range

 Instead of generating a random number between zero and a given number like we did before,
 we can generate a random number that falls within a range of two specific numbers.

 To do this, we'll define a minimum number min and a maximum number max.

 Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

 Math.floor(Math.random() * (max - min + 1)) + min

 TODO Create a function called randomRange that takes a range myMin and myMax and returns a
 todo; random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

 // Example
 function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

 ourRandomRange(1, 9);                  */

 // Only change code below this line.

 function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

 // Change these values to test your function
 var myRandom = randomRange(5, 10);

 console.log(myRandom);

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Use the parseInt Function

 The parseInt() function parses a string and returns an integer. Here's an example:

 var a = parseInt("007");

 The above function converts the string "007" to an integer 7. If the first character in the string
 can't be converted into a number, then it returns NaN.

 TODO Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it. */

function convertToInteger(str) {
return parseInt(str);

}

console.log(convertToInteger("56"));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Use the parseInt Function with a Radix

 The parseInt() function parses a string and returns an integer. It takes a second argument for the
 radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

 The function call looks like:

 parseInt(string, radix);

 And here's an example:

 var a = parseInt("11", 2);

 The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.

 TODO Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.          */

 function convertToInteger(str) {
  return parseInt(str, 2)
}

 console.log(convertToInteger("10011"));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Use the Conditional (Ternary) Operator

 The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

 The syntax is:

 condition ? statement-if-true : statement-if-false;

 The following function uses an if-else statement to check a condition:

 function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

 This can be re-written using the conditional operator:

 function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

 TODO Use the conditional operator in the checkEqual function to check if two numbers are equal or not.
 todo; The function should return either true or false. */

function checkEqual(a, b) {
return a == b ? true : false;
}

console.log(checkEqual(1, 2));

/* *******************************************************************************
****************************************************************************** */

/** TODO Basic JavaScript: Use Multiple Conditional (Ternary) Operators

 In the previous challenge, you used a single conditional operator. You can also chain them
 together to check for multiple conditions.

 The following function uses if, else if, and else statements to check multiple conditions:

 function findGreaterOrEqual(a, b) {
  if(a === b) {
    return "a and b are equal";
  }
  else if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
 The above function can be re-written using multiple conditional operators:

 function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

 TODO Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero. */

 function checkSign(num) {

     return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";

}

 console.log(checkSign(10));

/* *******************************************************************************
****************************************************************************** */