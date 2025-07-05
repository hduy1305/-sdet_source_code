// Allow user to input a number, print out its an odd or even number
const readline = require("readline-sync");

let number ;
do {
    let input = Number(readline.question("Enter a number: "));
    number = input;
    if(isNaN(number)) console.log("Please enter a valid number")
    else break;
}while(isNaN(number));
let check = number % 2;

if(check == 1){
    console.log(number + " is an odd number");
} else{
    console.log(number + " is an even number");
}
