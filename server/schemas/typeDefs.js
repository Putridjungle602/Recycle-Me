const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    accPoints: Int
    earnedWhen: Date
    activities: [Activity]
  }

  type Activity {
    _id: ID
    activity: String
    points: Int
    username: User
  }

  type Query {
    activity: [Activity]
    username(userId: ID!): Activity
  }

  type Mutation {
    createActivity(activity!: String, username: String!): Activity
    createUser(userId: ID!, username: String!): Activity
    removeActivity(activityId: ID!): Activity
    removeUser(userId: ID!, activityId: ID!): Activity
  }
`;

module.exports = typeDefs;

// I will come back and add points later, keeping it simple for now
