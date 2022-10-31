const { Activity, User } = require("../models");

const resolvers = {
  Query: {
    tech: async () => {
      return Activity.find().sort({ createdAt: -1 });
    },
    activity: async (parent, { activityId }) => {
      return Activity.find({ _id: activityId });
    },
  },
  Mutation: {
    addActivity: async (parent, { activity, username }) => {
      return Activity.create({ activity, username });
    },
    removeActivity: async (parent, { activityId }) => {
      return Activity.findOneAndUpdate({ _id: activityId }, { new: true });
    },
  },
};

module.exports = resolvers;

// will need to come back and later and update to include points
