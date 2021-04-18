const PostResolver = require("./PostResolver");
const UserResolver = require("./UserResolver");
const CommentResolver = require("./CommentResolver");

module.exports = {
  Query: {
    ...PostResolver.Querry,
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...PostResolver.Mutation,
    ...CommentResolver.Mutation,
  },
};
