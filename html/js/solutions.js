"use strict";

 function isTen(i) {
     return i === i;
 }

 function double(i) {
     return i *= 2
 }

 function remove9()

 = ['']
 {
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
         var avg = sum / [i].length;
         {
             return avg;
         }

         function analyzeWord(

         ''
     )
         {
             var str = 0;
             return str.split(" ").length;
         }


// function isTen(input) {
//     return input === 10;
// }
//
// function double(input) {
//     return input * 2;
// }
//
// function remove9s(array) {
//     var output = [];
//
//     array.forEach(function (number) {
//         if (number === 9) {
//
//         }
//     });
// }
//
// function capitalizeName(name) {
//     // split the name into an array of name pieces
//     //operate on each name piece
//     //that operration would be to capitalize the first and only the first character
//     //put together the name pieces into a string
//     //
//
//     var namePieces = name.split(" ");
//     var nameArray = [];
//     namePieces.forEach(function (piece, index) {
//         var capitalizedPiece = piece[0].toUpperCase() + piece.substring(1).toLowerCase();
//         nameArray.push(capitalizedPiece);
//     });
//
//     var output = nameArray.join(" ");
//     return output;
//


/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */