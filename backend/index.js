// Code  for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database
const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb://localhost:27017/",
//   {
//     dbName: "yourDB-name",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) =>
//     err ? console.log(err) : console.log("Connected to yourDB-name database")
// );

// // Schema for users of app
// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });
// const User = mongoose.model("users", UserSchema);
// User.createIndexes();

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
});

app.listen(5000, () => {
  console.log("Server is running");
});
