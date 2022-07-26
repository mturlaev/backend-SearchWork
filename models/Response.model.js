const mongoose = require("mongoose");

const responseschema = mongoose.Schema({
    name: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    vacancy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Vacancy"
    },
    resume: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Resume"
    },
})

const Response = mongoose.model("Response", responseschema);

module.exports = Response;