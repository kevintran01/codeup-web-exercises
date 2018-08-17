"use strict";
var pricePerDay = 3.00
var littleMermaid = Number(prompt('How many days would you like to checkout "The little Mermaid?" (Please type a number only'));
var brotherBear = Number(prompt('How many days would you like to checkout "Brother Bear?" (Please type a number only)'));
var hercules = Number(prompt('How many days would you like to checkout "Hercules?" (Please type a number only)'));
var totalDays = brotherBear + littleMermaid + hercules;
var totalCost = totalDays * pricePerDay;
alert("Total will cost: $" + totalCost + " dollars")

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;
var totalsHours = googleHours + amazonHours + facebookHours;
var total = amazonHours*amazonRate + googleHours*googleRate + facebookHours*facebookRate;
alert("After working " + totalsHours + " hours at Google, Facebook and Amazon, we made: $" + total + "!");

var classHasSpace = true;
var scheduleWorksForStudent = false;
var canBeEnrolledInClass = classHasSpace && scheduleWorksForStudent;

var moreThanTwoItems = true;
var offerIsValid = true;
var isPremiumMember = false;
var offerCanBeApplied = offerIsValid && (moreThanTwoItems || isPremiumMember);

var username = 'codeup';
var password = 'notastrongpassword';
var passwordIsLongEnough = password.length >= 5;
var passwordContainsUsername = password.includes(username);
var usernameIsShortEnough = username.length <= 20;
var usernameHasWhiteSpace = username.trim() != username;
var passwordHasWhiteSpace = password.trim() != password;
var credentialsAreGood = passwordIsLongEnough && !passwordContainsUsername && usernameIsShortEnough && !usernameHasWhiteSpace &&!passwordHasWhiteSpace;
alert