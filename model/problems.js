const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemsetSchema = new Schema({
    problemNumber: {
        type: Number,
        required: true,
        unique: true
    },
    title: {

        type: String,
        required: true,
        trim: true
    },
    statement: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        default: "Easy"
    },
    topic: {
        type: String,
        enum: [
            "Algebra",
            "Geometry",
            "Calculus",
            "Combinatorics",
            "Number Theory",
            "Probability",
            "Other"
        ],
        default: "Other"
    },
    solution: {
        type: String,
        default: ""
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ProblemList = mongoose.model("ProblemList", problemsetSchema);
module.exports = ProblemList;