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

        let targetPost = filterPost.find(function (post){
            return post.id === postId;
        })
        if(targetPost){
            const {body, title} = targetPost
            postModel = new Post(body, title);
        }
        else return null;

        return postModel;
    }

    async getAllPosts(userId){
        let arrayPosts = [];
        let allPosts = await this._getAllPosts(userId);
        for(let post of allPosts){
            const {body, title} = post
            let postObject = new Post(body, title);
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