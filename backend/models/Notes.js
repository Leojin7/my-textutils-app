const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  title: {                  // This is the note's title
    type: String,
    required: true
  },
  description: {            // This is the note's content
    type: String,
    required: true
  },
  tag: {                    // Optional tag for categorization
    type: String,
    default: "General"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('notes', NotesSchema);
