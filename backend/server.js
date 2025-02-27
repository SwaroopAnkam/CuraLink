require('dotenv').config();
const cors = require('cors');
const express = require('express');
const userRoutes = require("./routes/user");
const database = require("./config/database");

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware to parse JSON in request body
app.use(express.json());

// 1) Connect to MongoDB
database.dbConnect();


app.use("/api/v1/auth", userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
