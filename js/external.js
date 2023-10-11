console.log('Hello from external JavaScript');
alert('welcome to my website!');
let userInput1 = prompt('what is your favorite color?');
console.log(userInput1 + " is my favorite color too!");

//You have rented some movies for your kids:
// The little mermaid (for 3 days), Brother Bear (for 5 days, if they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

let userInput = prompt('How many movie are you renting?');
console.log('user entered: ' + userInput);
let userOwes = userInput * 3;
alert('that will be ' + userOwes + ' dollars a night');
console.log('user owes $ ' + userOwes);
let userTotal = userOwes + prompt('How many nights');
alert("your total is $" + userTotal)
console.log(userTotal);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?

let Google = 400;
let Amazon =  380;
let Facebook = 350;
let userInput2 = prompt('Which company did you work for?');
console.log(userInput2);
let userHours = prompt('How many hours did you work?');
console.log(userHours);
if (userInput2 === Facebook); {
    alert ('Thank you, you earned $' + (Facebook * userHours));
};
else if(userInput2 === Google); {
    alert('Thank you, you earned $' + (Google * userHours));
};
else (userInput2 === Amazon); {
    alert('Thank you, you earned $' + (Amazon * userHours));
};

