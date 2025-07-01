//Allow user to input a number, print out it’s an odd or even number

const readline = require("readline-sync");

let number = Number(readline.question("Enter a number: "));
let check = number % 2;
if(check == 1){
    console.log(number + "is an odd number");
} else{
    console.log(number + "is an even number");
}
