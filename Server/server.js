const { ApolloServer, ApolloError, PubSub } = require("apollo-server");
const typeDefs = require("./Graphql/TypeDefs/index");
const resolvers = require("./Graphql/Resolvers/Index");
const { connectDB } = require("./Config/db.js");
const pubsub = new PubSub();
const PORT = process.env.PORT || 5000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});
connectDB();
server
  .listen({ port: PORT })
  .then((e) => {
    console.log(`Server Is Listing On ${e.url}`);
  })
  .catch((err) => {
    console.error(err);
  });
