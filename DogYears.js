/*
This is a sample project called "Dog Years" from codecademy
*/

var myAge = 100;
var earlyYears = 2;
earlyYears *= 10.5;

var laterYears = myAge - 2;
laterYears *= 4;

//console.log(earlyYears);
//console.log(laterYears);

var myAgeInDogYears = earlyYears + laterYears;
var myName = 'BOB'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
