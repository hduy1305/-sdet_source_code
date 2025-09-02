const Post = require("./PostModel");

class RequestHandler{
    async getTargetPost(userId, postId) {
        let userFetch = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if(userFetch.ok === false){
            return null;
        }
        
        let filterPost = await this.getAllPosts(userId);

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

    async getAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        let postFetch = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let allPosts = await postFetch.json()
        let filterPost = allPosts.filter(function (post){
            return post.userId === userId;
        });
        return filterPost;
    }

}

module.exports = RequestHandler;