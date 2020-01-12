const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: null,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
