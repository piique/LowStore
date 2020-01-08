const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: null,
  },
});

const Food = mongoose.model("Food", UserSchema);
module.exports = Food;