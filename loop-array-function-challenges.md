Loop and Array challenges

Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.

Make a function called coinFlip() that returns either 0 or 1, randomly
Make a function called rollDie() that returns an integer between 1 and 6. 
Make a function called twoDice() that returns the sum of rolling two six sided dice.
Make a function called twentySidedDie() that returns a random integer between 1 and 20.
Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
Make a function called tetrahedron() that returns a random integer between 1 and 4.

Use what you know about functions, loops, and arrays to complete the following:

Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.


Make a function called 
    listOfRollsFromDieFunc(numberOfRoles, diceFunction) that takes in two arguments:
    The first argument is the number of rolls you want to make.
    The second argument is a function that contains the function definition for the type of die you want to roll.
    For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.