const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type username {
    _id: ID!
    name: String!
  }

  type Activity {
    _id: ID!
    activity: String!
    createdAt: Date
    points: Int
  }

  type Query {
    activity: [Activity]
    activity(activityId: ID!): ActivityA
  }

  type Mutation {
    createActivity(activity: String!, username: String!): Activity
    createUser(userId: ID!, username: String!): Activity
    removeActivity(activityId: ID!): Activity
    removeUser(userId: ID!, activityId: ID!): Activity
  }
`;

module.exports = typeDefs;

// I will come back and add points later, keeping it simple for now
