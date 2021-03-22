const PostResolver = require("./PostResolver");

module.exports = {
  Query: {
    ...PostResolver.Querry,
  },
};
