const { Schema, model } = require("mongoose");

const matchupSchema = new Schema({
  activity: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  pointsTotal: {
    type: Number,
    default: 0,
  },
});

const Matchup = model("Matchup", matchupSchema);

module.exports = Matchup;
