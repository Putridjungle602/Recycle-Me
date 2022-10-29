const connection = require("../config/connection");
const { Activity, User } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await Activity.get({});

  // Drop existing users
  await User.delete({});

  // Drop existing activities
  await Activity.delete({});

  const users = [];

  await Activity.collection.insertOne({
    activity: "rode bike",
    points: 50,
    users: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(activities);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
