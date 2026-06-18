const mongoose = require('mongoose');
require('dotenv').config();
const DB_URL = process.env.DB_URL;

const connectDB = async ()=> {
  if (!DB_URL) {
    console.log("DB_URL is missing in dotenv!")
    process.exit(1);
  }
  try {
    await mongoose.connect(DB_URL);
    console.log("DB connected");
  } catch (err) {
    console.error('DB Error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;