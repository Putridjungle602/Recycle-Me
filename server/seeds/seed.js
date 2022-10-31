const db = require("../config/connection");
const { Activity, User } = require("../models");
const activityData = require("./activityData.json");
const userData = require("./userData.json");

db.once("open", async () => {
  await Activity.deleteMany({});
  await Activity.create(activityData);

  await User.deleteMany({});

  await User.insertMany(userData);

  await Activity.insertMany(activityData);

  console.log("Seeding Complete!");
  process.exit(0);
});
