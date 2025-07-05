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

let bmi = (weight / (height * height)).toFixed(2);
console.log("Your BMI is: " + bmi);
if(bmi < 18.5){
    console.log("You are UNDERWEIGHT");
    let leastWeightIncrease = (18.5*height*height).toFixed(2);
    let reasonableWeightMin = (22*height*height).toFixed(2);
    let reasonableWeightMax = (24*height*height).toFixed(2);
    let toIncrease = leastWeightIncrease - weight;
    console.log("You should increase atleast " + toIncrease.toFixed(2) + "kilos.");
    console.log("And then keep yourself around " + reasonableWeightMin + " to " + reasonableWeightMax + ".");
    
}else if(bmi<=24.9){
    console.log("You are NORMAL");
    let reasonableWeightMin = (22*height*height).toFixed(2);
    let reasonableWeightMax = (24*height*height).toFixed(2);
    console.log("You are good. Stay fit");
    if(weight < reasonableWeightMin || weight > reasonableWeightMax) console.log("But i recommend to keep yourself around " + reasonableWeightMin + " to " + reasonableWeightMax + " is the best. ");
}else if(bmi<=29.9){
    console.log("You are OVERWEIGHT");
    let leastWeightDecrease = (24.89*height*height).toFixed(2);
    let reasonableWeightMin = (22*height*height).toFixed(2);
    let reasonableWeightMax = (24*height*height).toFixed(2);
    let toDecrease = weight - leastWeightDecrease;
    console.log("You should decrease atleast " + toDecrease.toFixed(2) + " kilos." );
    console.log("After that you can maintain your weight around " + reasonableWeightMin + " to " + reasonableWeightMax + " is the best. ");
}else{
    console.log("You are OBESITY");
    let leastWeightDecrease = (24.89*height*height).toFixed(2);
    let reasonableWeightMin = (22*height*height).toFixed(2);
    let reasonableWeightMax = (24*height*height).toFixed(2);
    let toDecrease = (weight - leastWeightDecrease);
    console.log("You should decrease atleast " + toDecrease + "kilos to stay normal." );
    if(weight - leastWeightDecrease > 50){
        console.log("I see that is alot of weight to decrease in a short term but not impossible. Keep track of it.");
        
    }
    console.log("After that you can maintain your weight around " + reasonableWeightMin + " to " + reasonableWeightMax + " is the best. ");
}