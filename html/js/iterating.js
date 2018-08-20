"use strict";
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
     var writeOut = function (input) {
        for (var i = 0; i < input.length; i++) {
            console.log(input[i]);
        }
     }
     var names = ['Jim', 'Kevin', 'Jason', 'Jenny'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
     writeOut(names);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
     console.log(names[0]);
     console.log(names[1]);
     console.log(names[2]);
     console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
     for (var i = 0; i < names.length; i++) {
        console.log('The names at index ' + i + ' is: ' + (names[i]));
     }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
        names.forEach(function (name, index, array) {
        console.log(name, index, array);
    });

    /**
     * TODO: ???
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
       function first(array) {
        if(Array.isArray(array)) {
            return array[0];
        }
    }
    function second(array) {
        if(Array.isArray(array)) {
            return array[1];
        }
    }
    function last(array) {
        if(Array.isArray(array)) {
            return array[3];
        }
    }
    
    console.log(first(['Jim', 'Kevin', 'Jason', 'Jenny']));
    console.log(second(['Jim', 'Kevin', 'Jason', 'Jenny']));
    console.log(last(['Jim', 'Kevin', 'Jason', 'Jenny']));
