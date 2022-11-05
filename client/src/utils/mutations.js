import { gql } from '@apollo/client';

export const UPDATEUSERPOINTS = gql`
mutation updateUserPoints($points: Int!, $id: ID) {
    updateUserPoints(points: $points, _id: $id) {
      _id
      username
      email
      password
      dateEarned
      accPoints
    }
  }
`;