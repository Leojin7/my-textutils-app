import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { AlertContext } from "../context/alert/alertContext";
import Notes from "./Notes";
import './AddNote.css';

const AddNote = () => {
  const { addNote } = useContext(noteContext);
  const { showAlert } = useContext(AlertContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      showAlert("Please enter both title and description", "error");
      return;
    }
    addNote(title, description, tag);
    setTitle("");
    setDescription("");
    setTag("");
    showAlert("Note added successfully!", "success");
  };

  return (
    <div className="add-note-container">
      <div className="add-note-form glass fade-in">
        <h1 className="form-title">Create New Note</h1>

        <form onSubmit={handleSubmit} className="note-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter a descriptive title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              rows="5"
              placeholder="Write your note content here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="tag" className="form-label">
              Tag (Optional)
            </label>
            <input
              type="text"
              id="tag"
              placeholder="e.g., work, personal, ideas..."
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="form-input"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Create Note
          </button>
        </form>
      </div>

      <Notes />
    </div>
  );
};

export default AddNote;
