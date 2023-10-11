let number = 2;

while (number <= 65536) {
    console.log(number);
    number *= 2;
}
let allCones = Math.floor(Math.random() * 50) + 50;

console.log("Starting inventory: " + allCones + " cones");

do {
    // Generate a random number between 1 and 5 representing the amount of cones being bought
    let conesToSell = Math.floor(Math.random() * 5) + 1;

    if (conesToSell <= allCones) {
        console.log(conesToSell + " cones sold...");
        allCones -= conesToSell;
    } else {
        console.log("Cannot sell you " + conesToSell + " cones, I only have " + allCones + "...");
    }

} while (allCones > 0);

console.log("Yay! I sold them all!");
