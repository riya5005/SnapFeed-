const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log("Connected to database!!");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
}

module.exports = connectDB;
