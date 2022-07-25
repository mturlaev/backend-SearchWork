const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  activationLink: { 
    type: String,
  },
  role: {
    type: String,
    default: 'workman'
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User