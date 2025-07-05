const readline = require("readline-sync");

let height ;
let weight ;
do{
    let input = Number(readline.question("Enter your height in meters: "));
    height = input;
    if(isNaN(height) || height<0.15 || height > 3) console.log("Please enter a valid height");
    else break;
}while(isNaN(height));

do{
    let input = Number(readline.question("Enter your wright in kilograms: "));
    weight = input;

    if(isNaN(weight) || weight<2 || height > 450) console.log("Please enter a valid weight");
    else break;

}while(isNaN(weight));

let bmi = weight / (height * height);

console.log("Your BMI is: " + bmi);
if(bmi < 18.5){
    console.log("You are UNDERWEIGHT");
}else if(bmi<=24.9){
    console.log("You are NORMAL");
}else if(bmi<=29.9){
    console.log("You are OVERWEIGHT");
}else{
    console.log("You are OBESITY");
}
