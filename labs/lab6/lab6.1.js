
// 9.1

const readline = require("readline-sync");
const targetUrl = "https://jsonplaceholder.typicode.com/posts";

let userIdInput = readline.question("Input userId you want to find: ");
let postIdInput = readline.question("Input postId you want to see it's content: ");

getAllPosts(targetUrl);
getOnePost(targetUrl);

function getAllPosts(url){
    fetch(url)
        .then(getListUsers)
        .then(consoleUserWithUserInput)
}

function getListUsers(response){
    return response.json();
}

function consoleUserWithUserInput(listObject){
    let check = false;
    for(let object of listObject){
        if(object.userId == userIdInput){
            check = true;
            console.log(object);
            console.log(`--------------\n`);
        }
    }
    if(check == false){
        console.log(`No user was found with userId : ${userIdInput}`);
        return null;
    }
}


// resolve post


function getOnePost(url){
    fetch(url)
        .then(getListPosts)
        .then(consolePosts);
}

function getListPosts(response){
    return response.json();
}

function consolePosts(listObject){
    let check = false;
    for(let object of listObject){
        if(object.userId == userIdInput && object.id == postIdInput ){
            check = true;
            console.log(`Title : ${object.title}`);
            console.log(object.body)
            console.log(`--------------\n`);
            break;
        }
    }
    if(check == false){
        console.log(`No post was found with id ${postIdInput} from userId ${userIdInput}`);
        return null;
    }
}


// on my way to find out how to utilize the code