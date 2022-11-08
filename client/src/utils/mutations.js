import { gql } from "@apollo/client";

export const UPDATEUSERPOINTS = gql`
  mutation UpdateUserPoints($points: Int) {
    updateUserPoints(points: $points) {
      accPoints
      activity {
        activity
      }
      dateEarned
      email
      username
      _id
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        accPoints
        activity {
          _id
          activity
          activityCompleted
          description
          points
        }
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
