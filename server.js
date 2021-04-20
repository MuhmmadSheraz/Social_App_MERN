const { ApolloServer, ApolloError, PubSub } = require("apollo-server");
const typeDefs = require("./Graphql/TypeDefs/index");
const resolvers = require("./Graphql/Resolvers/Index");
const { connectDB } = require("./Config/db.js");
const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});
connectDB();
server.listen({ port: 5000 }).then((e) => {
  console.log(`Server Is Listing On ${e.url}`);
});
