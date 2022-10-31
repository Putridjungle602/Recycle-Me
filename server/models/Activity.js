const { Schema, model } = require("mongoose");
const { dateFormatter } = require("../utils/format.js");

const activitySchema = new Schema(
  {
    activity: {
      type: String,
      required: "You need to enter an activity",
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (Timenow) => dateFormatter(Timenow),
    },
    points: {
      type: Int,
      required: true,
    },
  }
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
  // }
);

const Activity = model("Activity", activitySchema);

module.exports = Activity;
