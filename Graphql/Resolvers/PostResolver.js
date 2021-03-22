const Post = require("../../Models/Post");

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
};
