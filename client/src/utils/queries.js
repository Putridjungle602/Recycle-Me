import { gql } from "@apollo/client";

export const ACTIVITIES = gql`
  query Activity {
    activity {
      _id
      activity
      activityCompleted
      description
      points
    }
  }
`;
