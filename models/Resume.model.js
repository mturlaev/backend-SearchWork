const mongoose = require("mongoose");

const resumesSchema = mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  image: String,
  phone: String,
  email: String,
  address: String,
  categoryId: [
    {
      // stack ю хьун Мохьмад
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
  ],
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  position: String,
  experience: Number,
  education: Boolean,
  counter: {
    type: Number,
    default: 0,
  },
});

const Resume = mongoose.model("Resume", resumesSchema);

module.exports = Resume;
