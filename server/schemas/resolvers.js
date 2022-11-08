const { Activity, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        let userData = await User.findOne({ _id: context.user._id }).select(
          "-__V-password"
        );
        return userData;
      }
      throw new AuthenticationError("not logged in");
    },
    activity: async () => {
      let activities = await Activity.find();
      return activities;
    },
    //
    username: async () => {
      let data = await User.find();
      console.log(data);
      return data;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const userData = await User.create(args);
      const token = signToken(userData);
      return { token, userData };
    },
    login: async (parent, { email, password }) => {
      let foundUser = await User.findOne({ email });

      if (!foundUser) {
        throw new AuthenticationError("incorrect credentials");
      }

      let checkPassword = await foundUser.isCorrectPassword(password);

      if (!checkPassword) {
        throw new AuthenticationError("incorrect credentials");
      }

      const token = signToken(foundUser);

      return { token, foundUser };
    },
    createActivity: async (parent, { name, points }) => {
      return Activity.create({ name, points });
    },
    removeActivity: async (parent, { activityId }) => {
      return Activity.findOneAndUpdate({ _id: activityId }, { new: true });
    },
    // User.findOneAndUpdate({ _id: context._id }, { $inc: {'earnedPoints': 100 } }, {new: true },)
    updateUserPoints: async (parent, { points }, context) => {
      if (context.user) {
        let updateData = User.findOneAndUpdate(
          { _id: context.user._id },
          { $inc: { accPoints: points } },
          { new: true }
        );
        return updateData;
      }
      throw new AuthenticationError("user not logged in");
    },
  },
};

module.exports = {
  resolvers,
};
