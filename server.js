const { ApolloServer, ApolloError } = require("apollo-server");
const typeDefs = require("./Graphql/TypeDefs/index");
const resolvers = require("./Graphql/Resolvers/Index");
const { connectDB } = require("./Config/db.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});
connectDB();
server.listen({ port: 5000 }).then((e) => {
  console.log(`Server Is Listing On ${e.url}`);
});
