const { Schema, model } = require("mongoose");
const { dateFormatter } = require("../utils/format.js");

// Schema to create a reaction model
const pointSchema = new Schema(
  {
    pointId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
    },
    pointsEarned: {
      type: Int,
      required: true,
    },
    dateEarned: {
      type: Date,
      default: Date.now(),
      get: (Timenow) => dateFormatter(Timenow),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.export = reactionSchema;
