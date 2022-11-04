const { Activity, User } = require("../models");

const resolvers = {
  Query: {
    activity: async () => {
      return Activity.find().sort({ createdAt: -1 });
    },
    //
    username: async () => {
      return User.find().sort({});
    },
  },
  Mutation: {
    createActivity: async (parent, { name, points }) => {
      return Activity.create({ name, points });
    },
    removeActivity: async (parent, { activityId }) => {
      return Activity.findOneAndUpdate({ _id: activityId }, { new: true });
    },
  },
};

module.exports = resolvers;
