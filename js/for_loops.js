"use strict";
function showMultiplicationTable(number) {

    for (let i = 1; i <= 10; i++) {
        let number = 7;
        let results = number * i;
        console.log(`${number} * ${i} = ${results}`);
    }
}

showMultiplicationTable()

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
    let randomNumber = getRandomNumber(20, 200)
    if (randomNumber % 2 !== 0) {
        console.log(randomNumber + ' is an odd number')
    } else if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' is an even number')
    }
}
for (let i = 1; i <= 9; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += i;
    }
    console.log(line);
}
for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}
