const readline = require("readline-sync");

const targetUrl = "https://jsonplaceholder.typicode.com/posts";

let userIdInput = readline.question("Input userId you want to find: ");
let postIdInput = readline.question("Input postId you want to see it's content: ");

getAllPosts(targetUrl);
getOnePost(targetUrl);

async function getAllPosts(url){
    const response = await fetch(url);
    const listObject = await response.json();
    let found = false;

    for(object of listObject){
        if(object.userId == userIdInput){
            found = true;
            console.log(object);
            console.log(`--------------------------`);
        }
    }
    if(found == false){
        console.log(`No user was found with userId : ${userIdInput}`);
    }
}

async function getOnePost(url){
    const response = await fetch(url);
    const listObject = await response.json();
    let found = false;

    for(object of listObject){
        if(object.userId == userIdInput && object.id == postIdInput){
            found = true;
            console.log(`--------------------------`);
            console.log(`Title : ${object.title}`);
            console.log(object.body);
            console.log(`--------------------------`);
            break;
        }
    }
    if(found == false){
        console.log(`No post was found with postId : ${postIdInput} , and userId : ${userIdInput}`);
    }
}