import gql from "graphql-tag";
export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!, $email: String!) {
    loginUser(
      loginInput: { username: $username, password: $password, email: $email }
    ) {
      token
      id
      username
    }
  }
`;
