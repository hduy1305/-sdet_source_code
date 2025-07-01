const readline = require("readline-sync");
let height = Number(readline.question("Enter your height in meters: "));
let weight = NUmber(readline.question("Enter your wright in kilograms: "));
let bmi = weight / height * height;

console.log("Your BMI is: " + bmi);
if(bmi < 18.5){
    console.log("You are UNDERWEIGHT");
}else if(bmi<24.9){
    console.log("You are NORMAL");
}else if(nmi<29.9){
    console.log("You are OVERWEIGHT");
}else{
    console.log("You are OBESITY");
}
