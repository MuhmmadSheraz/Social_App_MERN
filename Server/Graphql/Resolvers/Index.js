const PostResolver = require("./PostResolver");
const UserResolver = require("./UserResolver");
const CommentResolver = require("./CommentResolver");
const LikeResolver = require("./LikeResolver");

module.exports = {
  // For Like and Comment Count
  Post: {
    likesCount(parent) {
      return parent.likes.length;
    },
    commentsCount(parent) {
      return parent.comments.length;
    },
  },
  Query: {
    ...PostResolver.Querry,
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...PostResolver.Mutation,
    ...CommentResolver.Mutation,
    ...LikeResolver.Mutation,
  },
  Subscription: {
    ...PostResolver.Subscritption,
  },
};
