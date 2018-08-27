// var fizzBuzz = function (num) {
//     for (var i=1; i <= num; i++) {
//         if (i % 15 === 0) {
//             console.log("fizzBuzz")
//         }
//         else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }
//     }
//
// }
//
// fizzBuzz(16);
// var writeOut = function(str) {
//     for (var i = 0; i <str.length; i++) {
//         console.log(str[i]);
//     }
//
// }
// var names = ["Brittany", "Mike", "Katy"];
// var cars = ["Porsche", "Mustang", "Audi"];
// var word = prompt("Please enter a word");
// writeOut(names);
// writeOut(cars);

// var visitCity = function(city) {
//     if (city === homeCity) {
//         console.log("Hey, " + homeCity + "!! I live there!")
//     } else {
//         console.log("Have you been to " + city + "? It is a great place!");
//     }
// }
//
// var homeCity = "San Antonio";
// var cities = [homeCity, "LA"];
//
// for (var i = 0; i<cities.length; i++) {
//     visitCity(cities[i]);
// }
//
// cities.forEach(visitCity);
// function fizzBuzz() {
//     for (var i = 1; i >= 16; i++) {
//         if(i % 3 == 0) {
//             console.log("fizz");
//         } else if ( i % 5 == 0) {
//             console.log("buzz");
//         } else if (i % 15 == 0) {
//             console.log("fizzBuzz");
//         } else {
//             console.log(i);
//         }
//
//     }
// }

// Challenge #1:
//
// Define a function named allIndexesOf that takes in two arguments.
// The first argument should be the array to search and the second argument should be the value you want to search for.
// If the item does not exist in the provided array, return an empty array;
//
// Given:
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

// function countAllOccurances(array, value) {
//     var count = 0;
//     array.forEach(function(element) {
//         if(element === value) {
//             count++;
//
//         }
//     });
//     return count;
// }
//
// console.log("number of apples in the fruist array is; " + countAllOccurances(fruits, "apple"));

// function allIndexesOf(array, value) {
//
//         if (array.indexOf(value) !== -1) {
//             console.log(array.indexOf(value));
//             console.log(array.lastIndexOf(value));
//
//         } else if (array.lastIndexOf(value) !== -1) {
//             console.log(array.lastIndexOf(value));
//
//         } else if (array.indexOf(value) === -1) {
//             console.log([]);
//
//         }
//
// }
// allIndexesOf(fruits, "apple");
// allIndexesOf(fruits, "guava");
// allIndexesOf(fruits, "pineapple");
//         function allIndexesOf(array, value) {
//             var output = [];
//
//             array.forEach(function(element, index) {
//                 if(element === value) {
//                     output.push(index);
//                 }
//
//             });
//             return output;
// }
//
//         console.log(allIndexesOf(fruits, "apple"));
// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]
//
//
// Challenge #2
// Define a function named removeAll(array, value) that takes in two arguments.
// The first argument should be an array and the second argument should be a value you wish to
//
// Given:
//     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
//
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
//
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.
// function removeAll(array, itemToRemove) {
//     var output = [];
//     array.forEach(function(element) {
//         if(itemToRemove !== element) {
//             output.push(element);
//         }
//     });
//     return output;
// }
//
// console.log(removeAll(bugs, "ant"));
// console.log(removeAll(bugs, "mosquito"));
// console.log(removeAll(bugs, "roach"));

function getMost(word) {
    var mostRepitions = 0;

    for (i = 0; i < word.length; i++) {
        var repitions = 1;
        for (j = 0; j < word.length; j++) {
            if (i != j && word[i] === word[j]) {
                repitions++;
            }
        }
        if (repitions > mostRepitions) {
            mostRepitions = repitions;
        }

    }
    return mostRepitions;

}


console.log(getMost("bananas"));