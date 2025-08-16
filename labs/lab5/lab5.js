const readline = require("readline-sync");

menu();

function menu(){
    let exit = false;
    while(!exit){
        let optionInput = Number(readline.question("1.Count how many times does that word repeat in your string.\n0. Exit\nYour option: "));
        switch(optionInput){
            case 1:
                let returnObject = countWords(getUserInput());
                console.log(returnObject);
                break;
                
            case 0:
                console.log("See you later");
                exit = true;
                break;
                
            default:
                console.log("Can not resolve your Input. Try again!");

        }
        console.log("-----------------------");
    }
}

function getUserInput(){
    let userInput = readline.question("Enter a string: ");
    return userInput;
}

function countWords(userInput){
    
    let processedInput = userInput.trim().replace(/[.,!?;:()]/g, "");
    if(processedInput === "") return "You typed nothing!";
    let words = processedInput.split(/\s+/);

    let wordsCount = {};
    for(let i = 0;i<words.length;i++){
        if(wordsCount[words[i]] >= 1){
            wordsCount[words[i]]++;
        }else wordsCount[words[i]] = 1;
    } 
    
    return wordsCount;
}
