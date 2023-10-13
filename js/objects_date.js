'use strict';

// todo:
// Create an array of months for printing dates
const 	months = [
		"January", "February", "March",
		"April", "May", "June",
		"July", "August", "September",
		"October", "November", "December"
	];
// todo:
// Create the date corresponding to your birthday using the JavaScript Date object.
// let jsBirthday
let myBday = new Date(1993, 5, 4);

// todo:
// Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
// See link below for methods needed:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter
console.log('Here is my birthday using JavaScript: ' + myBday);