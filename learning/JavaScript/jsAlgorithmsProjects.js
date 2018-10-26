/**TODO JavaScript Algorithms and Data Structures Projects: Palindrome Checker

 Return true if the given string is a palindrome. Otherwise, return false.

 A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation,
 case, and spacing.

 Note
 You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into
 the same case (lower or upper case) in order to check for palindromes.

 We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

 We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

 Remember to use Read-Search-Ask if you get stuck. Write your own code.     */

function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

console.log(palindrome("eye"));

/* *******************************************************************************
****************************************************************************** */

/**TODO JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

 Convert the given number into a roman numeral.

 All roman numerals answers should be provided in upper-case.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function convertToRoman(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var romanized = '';

    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }
    return romanized;
}

console.log(convertToRoman(23));

/* *******************************************************************************
****************************************************************************** */

/**TODO JavaScript Algorithms and Data Structures Projects: Caesars Cipher

 One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the
 meanings of the letters are shifted by some set amount.

 A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

 Write a function which takes a ROT13 encoded string as input and returns a decoded string.

 All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.        */

function rot13(str) { // LBH QVQ VG!
return str.split('')
    .map.call(str, function(char) {
        let x = char.charCodeAt(0);
        if (x < 65 || x > 90) {
            return String.fromCharCode(x);
        }
        else if (x < 78) {
            return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x - 13);
    }).join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));

/* *******************************************************************************
****************************************************************************** */

/**TODO JavaScript Algorithms and Data Structures Projects: Telephone Number Validator

 Return true if the passed string looks like a valid US phone number.

 The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following
 are examples of valid formats for US numbers (refer to the tests below for other variants):

 555-555-5555
 (555)555-5555
 (555) 555-5555
 555 555 5555
 5555555555
 1 555 555 5555
 For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to
 validate or reject the US phone number based on any combination of the formats provided above. The area code is required.
 If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US
 phone number; otherwise return false.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.            */

function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    // Good luck!
    return regex.test(str);
}

console.log(telephoneCheck("1 555 555 5555"));

/* *******************************************************************************
****************************************************************************** */

/**TODO JavaScript Algorithms and Data Structures Projects: Cash Register

 Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
 payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

 cid is a 2D array listing available currency.

 The checkCashRegister() function should always return an object with a status key and a change key.

 Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

 Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

 Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest
 order, as the value of the change key.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.            */

var denom = [
    {name: 'ONE HUNDRED', val: 100.00},
    {name: 'TWENTY', val: 20.00},
    {name: 'TEN', val: 10.00},
    {name: 'FIVE', val: 5.00},
    {name: 'ONE', val: 1.00},
    {name: 'QUARTER', val: 0.25},
    {name: 'DIME', val: 0.10},
    {name: 'NICKEL', val: 0.05},
    {name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
    var output = {status: null, change: [] };
    var change = cash - price;

    var register = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });

    if(register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }
    if (register.total < change) {
        output.status = 'INSUFFICENT_FUNDS';
        return output;
    }
    var change_arr = denom.reduce(function(acc, curr) {
        var value = 0;
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;
            change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            acc.push([ curr.name, value ]);
        }
        return acc;
    }, []);
    if (change_arr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    output.status = 'OPEN';
    output.change = change_arr;
    return output;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

/* *******************************************************************************
****************************************************************************** */