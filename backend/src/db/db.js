// const mongoose=require("mongoose");

// async function connectDB(){
//     await mongoose.connect("mongodb+srv://backendProject-1:FTmHo71Eo7FOk3JV@cluster0.7fipupe.mongodb.net/project-1")
//     console.log("Connected to database!!")

// }

// module.exports=connectDB;


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
