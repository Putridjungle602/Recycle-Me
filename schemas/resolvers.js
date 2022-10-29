const { Tech, Matchup } = require("../models");

const resolvers = {
  Query: {
    tech: async () => {
      return Activity.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Activity.find(params);
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    addPoints: async (parent, { _id, activityhNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`activity${techNum}_points`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
