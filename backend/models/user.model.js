const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // retira espaços em branco do começo e do final da string
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // quando buscar lista de usuario o campo não virá junta
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
