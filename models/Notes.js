
const moongoose = require('mongoose');
const { use } = require('react');
const { Schema } = moongoose;
const UserSchema = new moongoose.Schema({


  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  tag: {
    type: String,
    default: "General"
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }


});


const User = moongoose.model('user', UserSchema);
User.createIndexes(); // Ensure indexes are created for the User model
module.exports = moongoose.model('User', UserSchema);