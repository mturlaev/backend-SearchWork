const mongoose = require("mongoose");

const responseschema = mongoose.Schema({
    name: {
        type: String,
        default: "Откликнуться"
    },
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
    checked: {
        type: Boolean,
        default: false
    }
})

const Response = mongoose.model("Response", responseschema);

module.exports = Response;