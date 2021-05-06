const Post = require("../../Models/Post");
const authChecker = require("../../Utils/checkAuth");
module.exports = {
  Querry: {
    async getAllPosts() {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      } catch (error) {
        console.log("Get All Post Querry Error", error.message);
      }
    },
  },
  Mutation: {
    async createPost(_, { body }, context) {
      try {
        const user = authChecker(context);
        console.log(user);
        if (!body) {
          throw new Error("Post Body Must Not Be Empty");
        }
        const newPost = new Post({
          body,
          user: user.id,
          username: user.username,
          createdAt: new Date().toISOString(),
        });
        const post = await newPost.save();

        return post;
      } catch (error) {
        return error.message;
      }
    },
    async deletePost(_, { id }, context) {
      const user = authChecker(context);
      try {
        const post = await Post.findById(id);
        if (user.username === post.username) {
          await post.delete();

          return "Post deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        console.log(err.message)
        throw new Error(err);
      }
    },
  },
  Subscritption: {
    realTimePost: {
      subscribe: (_, __, { pubsub }) =>
        pubsub.asyncIterator(["REAL_TIME NEW_POST"]),
    },
  },
};
