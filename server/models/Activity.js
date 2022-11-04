const { Schema, model } = require("mongoose");

const activitySchema = new Schema({
  activity: {
    type: String,
    required: "You need to enter an activity",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  description: {
    type: String,
    required: "Please enter a description",
    minlength: 1,
    maxlength: 280,
  },
  activityCompleted: {
    type: Boolean,
  },
  points: {
    type: Number,
    required: true,
  },
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;
