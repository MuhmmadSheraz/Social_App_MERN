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

    async deleteComment(_, { postId, commentId, username }, context) {
      const user = checkAuth(context);
      if (user) {
        let post = await Post.findById(postId);
        if (user.username === username) {
          console.log(typeof commentId);
          let updatedComments = post.comments.filter(
            (comment) => comment._id.toString() !== commentId
          );
          console.log(updatedComments);
          post.comments = updatedComments;
          post.save();
          return post;
        }
      } else {
        throw new Error("You Are Not Authorized To Perform Action");
      }
    },
  },
};
