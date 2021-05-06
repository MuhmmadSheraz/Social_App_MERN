import gql from "graphql-tag";

const LIKE_POST = gql`
  mutation likeToggle($postId: String!, $username: String!) {
    likeToggle(postId: $postId, username: $username) {
      id
      likesCount
      likes {
        id
        username
      }
    }
  }
`;
const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`;
const DELETE_COMMENT = gql`
  mutation deleteComment(
    $postId: String!
    $commentId: String!
    $username: String!
  ) {
    deleteComment(postId: $postId, commentId: $commentId, username: $username) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentsCount
    }
  }
`;

const COMMENT_POST = gql`
  mutation addComment($postId: ID!, $body: String!) {
    addComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentsCount
    }
  }
`;
export { LIKE_POST, DELETE_POST, COMMENT_POST, DELETE_COMMENT };
