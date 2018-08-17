/*Given:
    var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    var fruits = ["mosquito", "ant", "scorpion", "ant", "mosquito", "typo", "reference error", "type error"];
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < bugs.length; i++)
        if (arr[i] === "ant")
            a.push(i);*/


var fruits = ["apple", "banana", "apple", "oranges", "apple", "pineapple"];

function getAllIndexes(array, value) {
    var indexes = [], i = -1;
    while ((i = array.indexOf(value, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

var indexes = getAllIndexes(fruits, "apple");
var indexes1 = getAllIndexes(fruits, "dragonfruit");
console.log(indexes)
console.log((indexes1))

var str = "I like going out to parties with friends or watching TV!";
var n = str.length("watching");
console.log(n);


boolean ()



function letters (a, b, c);
var



var str = "The Quick Brown For Jumps Over The Lazy Dog";
var res = str.toUpperCase(Quick, m, s, er, laz);
console.log(res);

