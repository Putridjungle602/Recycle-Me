const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    accPoints: Int
    dateEarned: String
    activity: [Activity]
  }

  type Activity {
    _id: ID
    activity: String
    description: String
    activityCompleted: Boolean
    points: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    activity: [Activity]
    username: [User]
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeActivity(activityId: ID!): Activity
    createActivity(name: String!, points: Int!): Activity
    updateUserPoints(points: Int): User
  }
`;

module.exports = typeDefs;
