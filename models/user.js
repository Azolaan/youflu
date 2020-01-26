const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  diseases: [String],
});

module.exports = mongoose.model('User', UserSchema);
