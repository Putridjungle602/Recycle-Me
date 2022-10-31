const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    activity: [
      {
        type: Schema.Types.ObjectId,
        ref: "Activity",
      },
    ],
    points: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  }
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
  // }
);

const User = model("User", userSchema);

module.exports = User;
