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
