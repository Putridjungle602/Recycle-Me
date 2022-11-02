const { Activity, User } = require("../models");

const resolvers = {
  Query: {
    activity
    : async () => {
      return await User.find({}).populate(points).populate({
        path: 'points', 
        populate: 'username'
      });
    },
    activity
    : async () => {
      return Activity.find().sort({ createdAt: -1 });
    },
    activity: async (parent, { activityId }) => {
      return Activity.find({ _id: activityId });
    },
    username: async () => {
      return User.find().sort({ })
    }
  },
  Mutation: {
    createActivity: async (parent, { activity, username, points }) => {
      return Activity.create({ activity, username, points });
    },
    removeActivity: async (parent, { activityId }) => {
      return Activity.findOneAndUpdate({ _id: activityId }, { new: true });
    },
  },
};

module.exports = resolvers;

