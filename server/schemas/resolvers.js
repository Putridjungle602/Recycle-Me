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
      return Activity.find().sort({ createdAt: -1 });
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
    updateUserPoints: async(parent,{_id, points}) => {
      return await User.findByIdAndUpdate(_id, {points}, {new: true})
    }
  },
};

module.exports = {
  resolvers,
};
