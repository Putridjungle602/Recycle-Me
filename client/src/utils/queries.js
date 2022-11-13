import {gql} from '@apollo/client';

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

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            accPoints
            dateEarned
        }
    }
`;
