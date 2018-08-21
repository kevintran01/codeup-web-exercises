//factorial(5) ->
// example: 5! = 5*4*3*2*1

// var factorial = function (num) {
//     var product = 1;
//     for (var i = num; i > 1; i--) {
//         num *= i;
//     }
//     return num;
// }
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(7));
// console.log(factorial(8));
// console.log(factorial(9));
// console.log(factorial(10));

var summation = function (num) {
    var sum = 0;
    for (var i = num; i>0; i--) {
        sum +=i;
    }
    return sum;
}
console.log(summation(5));