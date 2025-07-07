const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://chirag:cheeku123@summer-mern.vtsvjgi.mongodb.net/?retryWrites=true&w=majority&appName=summer-mern",
    {
      dbName: "day16",
    }
  )
  .then(() => {
    console.log("-------  DB connected -------");
  })
  .catch((err) => {
    console.log("-----  DB connection error ------");
    console.log(err.message);
  });
