"use strict";

function isTen(i) {
    return i === i;
}

function double(i) {
    return i *= 2
}

function remove9()=[''] {
    romove9.splice(1);
}
console.log(remove9);


function capitilizeName(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase();
    })
}

function capitalizeAllNames(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
}


function countVowels(str1) {
    for (var x = 0; x < str1.length; x++) {
        if (countVowels(str1).indexOf(str1[x]) !== -1) {
        }
    }

    function averageSales() {
        var sum = 0;
        for (var i = 0; i < averageSales().length; i++) {
            sum += parseInt(averageSales()[i]);
        }
        var avg = sum / [i].length; {
            return avg;
        }

        function analyzeWord('') {
            var str = 0;
                return str.split(" ").length;
            }


/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */