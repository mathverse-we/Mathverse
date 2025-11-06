const mongoose = require("mongoose");
const initData = require("./probData.js");
const ProblemList = require("../model/problems.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/mathverse";

Main()
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})

async function Main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await ProblemList.deleteMany({});
    await ProblemList.insertMany(initData.data);
    console.log("Database Initialized");
}

initDB();
