const Post = require("../../Models/Post");
const checkAuth = require("../../Utils/checkAuth");

module.exports = {
  Mutation: {
    async likeToggle(_, { username, postId }, context) {
      console.log("Like hit")
      const user = checkAuth(context);
      if (user) {
        console.log(user.username);
        console.log(username);
        let post = await Post.findById(postId);
        if (post.likes.find((like) => like.username === username)) {
          post.likes = post.likes.filter((like) => like.username !== username);
        } else {
          post.likes.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        await post.save();
        return post;
      } else {
        throw new Error("Not Authencticated ");
      }
    },
  },
};
