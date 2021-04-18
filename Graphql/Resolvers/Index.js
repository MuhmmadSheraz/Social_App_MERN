const PostResolver = require("./PostResolver");
const UserResolver = require("./UserResolver");

module.exports = {
  Query: {
    ...PostResolver.Querry,
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...PostResolver.Mutation,
  },
};
