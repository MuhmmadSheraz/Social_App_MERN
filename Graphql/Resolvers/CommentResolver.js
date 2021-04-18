const Post = require("../../Models/Post");
const checkAuth = require("../../Utils/checkAuth");
module.exports = {
  Mutation: {
    async addComment(_, { body, postId }, context) {
      if (!body) throw new Error("Comment Must Not Be Empty");
      const user = checkAuth(context);
      if (user) {
        const post = await Post.findById(postId);
        if (post) {
          post.comments.unshift({
            body,
            username: user.username,
            createdAt: new Date().toISOString(),
          });
          await post.save();
          return post;
        } else {
          throw new Error("Post Not Found");
        }
      } else {
        throw new Error("Not Authenticated ");
      }
    },

    // async deleteComment(_, { commentId, username }, context) {},
  },
};
