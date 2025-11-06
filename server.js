const express = require("express");
const app = express();

// This is library for Node.js that help us to connect with mongo db with node.js
const mongoose = require("mongoose");

// This help us to work on our project paths in any OS System....
const path = require("path");

const ejsMate = require("ejs-mate");

const problems = require("./model/problems");

const MONGO_URL = "mongodb://127.0.0.1:27017/mathverse";

Main()
    .then(() =>  console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

async function Main(){
    await mongoose.connect(MONGO_URL);
}

// Set your currunt path to view folder
app.set("views" , path.join(__dirname, "views"));

// Set for static file path to public folder
app.use(express.static(path.join(__dirname, "public")));

// This tells Express that your app will use EJS as its template engine.
app.set("view engine" , "ejs");

app.engine("ejs" , ejsMate);

app.get("/" , (req, res) =>{
    res.render("pages/home");
})

app.get("/problemset" , async (req, res) =>{
    const allproblems = await problems.find({});
    res.render("pages/problemset", {allproblems});
})

app.get("/problemset/:id", async(req, res) => {
    const {id} = req.params;
    const problem = await problems.findById(id);
    res.render("pages/problemShow" , {problem});
})

app.get("/edu" , (req, res) =>{
    res.render("pages/edu");
})

app.get("/competition" , (req, res) =>{
    res.render("pages/competition");
})

app.get("/user" , (req, res) =>{
    res.render("pages/user");
})

app.get("/rating" , (req, res) =>{
    res.render("pages/rating");
})
app.get("/talk" , (req, res) =>{
    res.render("pages/talk");
})

app.listen(1000 , () =>{
    console.log("App is Listening!");
});

