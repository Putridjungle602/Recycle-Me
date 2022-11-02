const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { dateFormatter } = require("../utils/format.js");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    accPoints: {
      type: Number,
      default: 0,
    },
    dateEarned: {
      type: Date,
      default: Date.now,
      get: (Timenow) => dateFormatter(Timenow),
    },
    activity: [
      {
        type: Schema.Types.ObjectId,
        ref: "Activity",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModifiedI("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
const User = model("User", userSchema);

module.exports = User;
