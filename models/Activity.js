const { Schema, model } = require("mongoose");
const { dateFormatter } = require("../utils/format.js");
const pointSchema = require("./Points");

const activitySchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (Timenow) => dateFormatter(Timenow),
    },
    activityText: {
      type: String,
      required: true,
      length: 1 - 280,
    },
    points: [pointSchema],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

activitySchema.virtual("pointCount").get(function () {
  return this.points.length;
});

const activity = model("Activity", activitySchema);

module.exports = Activity;
