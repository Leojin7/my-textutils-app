const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/User');

// route 1: get all the notes
router.get('/fetchallnotes', async (req, res) => {

  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);

});


module.exports = router;
