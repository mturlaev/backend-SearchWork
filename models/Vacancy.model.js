const mongoose = require("mongoose");

const vacancySchema = mongoose.Schema({
  name: String,
  text: String,
  salary: Number,
  city: String,
  company: String,
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  categoryId: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
  ],
  counter: {
    type: Number,
    default: 0,
  },
});

const Vacancy = mongoose.model("Vacancy", vacancySchema);

module.exports = Vacancy;
