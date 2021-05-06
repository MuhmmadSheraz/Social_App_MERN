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
export { LIKE_POST, DELETE_POST };
