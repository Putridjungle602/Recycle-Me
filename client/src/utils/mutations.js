//Extra things added -- need the mutation syntax and the useMutation method to convert the mutation
// import { UPDATEUSERPOINTS } from "../utils/mutations";
// import { useMutation } from "@apollo/client";
//-----

import { gql } from "@apollo/client";

export const UPDATEUSERPOINTS = gql`
  mutation Mutation($points: Int) {
    updateUserPoints(points: $points) {
      _id
      username
      email
      activity {
        _id
        activity
        description
        activityCompleted
        points
      }
      accPoints
      dateEarned
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
