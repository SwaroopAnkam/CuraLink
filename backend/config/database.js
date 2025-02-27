const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");

    // Listen for connection errors after initial connection
    mongoose.connection.on("error", (err) => {
      console.error("Mongoose Connection Error:", err);
    });
  } catch (error) {
    console.error("Database Connection Failed:", error);
    process.exit(1);
  }
};
