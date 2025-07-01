let a;
let b;
a=1;
b=2;
console.log(a+b);

const readline = require("readline-sync");
const rl = readline.createInterface({
  input: process.stdin, // Standard input
  output: process.stdout // Standard output             
});

rl.question('Enter a number: ', (input) => {
  const number = parseInt(input, 10);
  if (isNaN(number)) {
    console.log('Please enter a valid number.');
  } else {
    console.log(`You entered: ${number}`);
  }
  rl.close();
});
