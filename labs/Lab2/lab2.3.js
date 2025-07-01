const readline = require("readline-sync");
let height = Number(readline.question("Enter your height in meters: "));
let weight = Number(readline.question("Enter your wright in kilograms: "));
let bmi = weight / (height * height);
console.log("Your BMI is: " + bmi);
if(bmi < 18.5){
    console.log("You are UNDERWEIGHT");
    let leastWeightIncrease = 18.5*height*height;
    let reasonableWeightMin = 22*height*height;
    let reasonableWeightMax = 24*height*height;
    console.log("You should increase atleast " + leastWeightIncrease - weight + "kilos.");
    console.log("And then keep yourself around " + reasonableWeightMin + " to " + reasonableWeightMax + ".");
    
}else if(bmi<24.9){
    console.log("You are NORMAL");
    let reasonableWeightMin = 22*height*height;
    let reasonableWeightMax = 24*height*height;
    console.log("You are good. Stay fit");
    console.log("But i recommend to keep yourself around " + reasonableWeightMin + " to " + reasonableWeightMax + " is the best. ");
}else if(nmi<29.9){
    console.log("You are OVERWEIGHT");
    let leastWeightDecrease = 24.89*height*height;
    let reasonableWeightMin = 22*height*height;
    let reasonableWeightMax = 24*height*height;
    console.log("You should decrease atleast " + weight - leastWeightDecrease + "kilos." );
    console.log("After that you can maintain your weight around " + reasonableWeightMin + " to " + reasonableWeightMax + " is the best. ");
}else{
    console.log("You are OBESITY");
    let leastWeightDecrease = 24.89*height*height;
    let reasonableWeightMin = 22*height*height;
    let reasonableWeightMax = 24*height*height;
    console.log("You should decrease atleast " + weight - leastWeightDecrease + "kilos to stay normal." );
    if(weight - leastWeightDecrease > 50){
        console.log("I see that is alot of weight to decrease in a short term but not impossible. Keep track of it.");
        
    }
    console.log("After that you can maintain your weight around " + reasonableWeightMin + " to " + reasonableWeightMax + " is the best. ");
}