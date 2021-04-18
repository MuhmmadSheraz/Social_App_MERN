const Post = require("../../Models/Post");
const authChecker = require("../../Utils/checkAuth");
module.exports = {
  Querry: {
    async getAllPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (error) {
        console.log("Get All Post Querry Error", error.message);
      }
    },
  },
  Mutation: {
    async createPost(_, { body }, context) {
      const user = authChecker(context);
      // add post here
      if (!body) {
        throw new Error("Post Body Must Not Be Empty");
      }
      const newPost = new Post({
        body,
        user: user.indexOf,
        username: user.username,
        createdAt: new Date().toISOString(),
      });
      const post = await newPost.save();
      return post;
    },
  },
};
