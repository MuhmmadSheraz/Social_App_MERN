const { gql } = require("apollo-server-core");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
  }
  type Comment {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  input LoginInput {
    username: String!
    password: String!
    email: String!
  }
  type Query {
    getAllPosts: [Post]!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    loginUser(loginInput: LoginInput): User!
    createPost(body: String!): Post!
    deletePost(id: ID!): String!
    addComment(body: String!, postId: ID!): Post!
    deleteComment(
      postId: String!
      commentId: String!
      username: String!
    ): String!
    likeToggle(postId: String!, username: String!): Post!
  }
`;
