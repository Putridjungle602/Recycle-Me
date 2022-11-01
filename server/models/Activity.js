const { Schema, model } = require("mongoose");
const { dateFormatter } = require("../utils/format.js");

const activitySchema = new Schema({
  activity: {
    type: String,
    required: "You need to enter an activity",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  
  points: {
    type: Int,
    required: true,
  },
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;
