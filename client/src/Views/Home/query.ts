import gql from "graphql-tag";

export const FECH_POSTS_QUERY = gql`
  {
    getAllPosts {
      body
      username
      id
      createdAt
      comments {
        id
        body
        username
      }
      likes {
        username
        createdAt
      }
      likesCount
      commentsCount
    }
  }
`;
