(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
const names = ['Bill', 'Bob', 'Tom', 'Jerry']
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    const numOfNames = names.length;
    console.log ("Number of names => ", numOfNames);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
        
        for (let name of names) {
        console.log(name);
        }
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach((name)=>{
        console.log(name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    const first = (array) => {
        let result = array[0];
        return result;
    };
    const second = (array) => {
        let result = array[1];
        return result;
    };
    const last = (array) => {
        let arrayLength = array.length;
        let result = array[arrayLength - 1];
        return result;
    };
    console.log(first(names));
    console.log(second(names));
    console.log(last(names));
})();