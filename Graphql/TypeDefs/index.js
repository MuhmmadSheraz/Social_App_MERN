const { gql } = require("apollo-server-core");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getAllPosts: [Post]
  }
`;
