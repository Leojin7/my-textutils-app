const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// Route 1: Get all notes for logged-in user
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 2: Add a new note for logged-in user
router.post('/addnote', fetchuser, [
  body('title', 'Title must be at least 3 characters').isLength({ min: 3 }),
  body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, description } = req.body;
    const note = new Notes({
      title,
      description,
      user: req.user.id
    });
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// Route 3: Update an existing note using POST "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, [
  body('title', 'Title must be at least 3 characters').optional().isLength({ min: 3 }),
  body('description', 'Description must be at least 5 characters').optional().isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, tag } = req.body;

  try {

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized to update this note" });
    }


    const updatedNote = {};
    if (title) updatedNote.title = title;
    if (description) updatedNote.description = description;
    if (tag) updatedNote.tag = tag;

    // Update the note
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: updatedNote },
      { new: true }  // return  updated note
    );

    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// Route 4: Delete an existing note using DELETE "/api/notes/deletenote/:id". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    // Check if the logged-in user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized to delete this note" });
    }

    // Delete the note
    await Notes.findByIdAndDelete(req.params.id);

    res.json({ message: "Note deleted successfully", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



module.exports = router;
