const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => { 
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await User.deleteMany({});
  
  // Create a default user
  const defaultUser = new User({
    email: "demo@example.com",
    username: "demo"
  });
  
  // Register the user with a password
  const registeredUser = await User.register(defaultUser, "demo123");
  
  // Update all listings to use the new user's ID
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: registeredUser._id,
  }));
  
  await Listing.insertMany(initData.data);
  console.log("data was reinitialized");
  console.log("Default user created with username: demo, password: demo123");
};

initDB();