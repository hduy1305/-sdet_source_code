const Post = require("./PostModel");
const RequestHandler = require("./RequestHandler");
const readline = require("readline-sync");

lab11();

async function lab11(){
    message();
    let userOption = getUserInput();
    let requestHandler = new RequestHandler();

    if(userOption === "1"){
        let userId = Number(readline.question("Input userId: "));
        console.log(await requestHandler.getAllPosts(userId));
    }else if(userOption === "2"){
        let userId = Number(readline.question("Input userId: "));
        let postId = Number(readline.question("Input postId: "));
        let user = await requestHandler.getTargetPost(userId, postId);
        if(user !== null) console.log(`Title: ${user._title}\n Content: ${user._body}`);
        else console.log("Not Found");
    }else{
        console.log(`No option was found!`)
    }
}

function message(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    console.log(`This lab get you user's list posts \nand one post you want to get from that user with this API: \n ${url}`);
}

function getUserInput(){
    console.log(` 1. Get all Posts from User\n 2. Get 1 specific Post from User`);
    let userInput = readline.question("Input your option: ");
    return userInput;
}

