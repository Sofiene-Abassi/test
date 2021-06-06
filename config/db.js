const mongoose = require("mongoose");

mongoose
  .connect(
    //** cmt set up ur db */
    "mongodb+srv://sofiene:sofiene1234@cluster0.olwez.mongodb.net/lostfound",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
