const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    accPoints: Int
    dateEarned: String
    activity: String
  }

  type Activity {
    _id: ID
    activity: String
    description: String
    activityCompleted: Boolean
    points: Int
  }

  type Query {
    activity: [Activity]
    username: User
  }

  type Mutation {
    removeActivity(activityId: ID!): Activity
    createActivity(name: String!, points: Int!): Activity
  }
`;

module.exports = typeDefs;
