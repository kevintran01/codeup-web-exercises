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

 Code	Output
 \'	    single quote
 \"	    double quote
 \\	    backslash
 \n	    newline
 \r	    carriage return
 \t	    tab
 \b	    backspace
 \f	    form feed

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

myStr =  "Hello World";

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
 var myArray = [["Kevin", 20],["Britt", 20]];

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
 var myArray = [50,60,70];

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
 var myArray = [18,64,99];

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
 var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

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