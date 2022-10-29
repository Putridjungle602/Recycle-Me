const db = require("../config/connection");
const { Activity } = require("../models");
const { User } = require("./models");
const { Points } = require("./models");

const activityData = require("./activityData.json");
const userData = require("./userData.json");

db.once("open", async () => {
  await Activity.deleteMany({});

  const activities = await Activity.insertMany(activityData);

  console.log("Activities seeded!");
  process.exit(0);
});
