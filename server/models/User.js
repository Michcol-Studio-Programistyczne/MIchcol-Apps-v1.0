// server/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // ewentualnie rola (osobisty/firma), imię, nazwisko itp.
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
