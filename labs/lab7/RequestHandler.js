const Post = require("./PostModel");

class RequestHandler{

    //https://jsonplaceholder.typicode.com
    constructor(baseUrl){
        this._baseUrl = baseUrl;
    }

    async getTargetPost(userId, postId) {
        let userFetch = await fetch(`${this._baseUrl}/users/${userId}`);
        if(userFetch.ok === false){
            return null;
        }
        
        let filterPost = await this._getAllPosts(userId);

        let postModel = new Post();
        for(let post of filterPost){
            if(post.id === postId){
                postModel.title = post.title;
                postModel.body = post.body;
                break;
            }
        }

        return postModel;
    }

    async getAllPosts(userId){
        let arrayPosts = [];
        let allPosts = await this._getAllPosts(userId);
        for(let post of allPosts){
            let postObject = new Post();
            postObject._body = post.body;
            postObject._title = post.title;
            arrayPosts.push(postObject);
        }
        return arrayPosts;
    }

    async _getAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        let postFetch = await fetch(`${this._baseUrl}/posts`);
        let allPosts = await postFetch.json()
        let filterPost = allPosts.filter(function (post){
            return post.userId === userId;
        });
        return filterPost;
    }

}

module.exports = RequestHandler;

// const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];