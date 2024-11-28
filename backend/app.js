const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users");
const vendorRoutes = require("./routes/vendors");
const adminRoutes = require("./routes/admin");
const cors = require("cors");






dotenv.config();

const app = express();
// Allow requests from specific origins

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3001", // Allow your frontend URL
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Allowed headers
  }));
// MongoDB Connection
const connectDB = require("./config/db");
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/admin", adminRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
