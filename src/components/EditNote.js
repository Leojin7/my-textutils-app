import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { AlertContext } from "../context/alert/alertContext";

const EditNote = ({ note, isOpen, onClose }) => {
  const { editNote } = useContext(noteContext);
  const { showAlert } = useContext(AlertContext);
  
  const [editedNote, setEditedNote] = useState({
    title: note?.title || "",
    description: note?.description || "",
    tag: note?.tag || "general"
  });

  const handleChange = (e) => {
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editedNote.title.length < 5) {
      showAlert("Title must be at least 5 characters", "error");
      return;
    }
    if (editedNote.description.length < 5) {
      showAlert("Description must be at least 5 characters", "error");
      return;
    }
    
    try {
      await editNote(note._id, editedNote.title, editedNote.description, editedNote.tag);
      showAlert("Note updated successfully!", "success");
      onClose();
    } catch (error) {
      console.error("Error updating note:", error);
      showAlert("Failed to update note. Please try again.", "error");
    }
  };

  const handleClose = () => {
    setEditedNote({
      title: note?.title || "",
      description: note?.description || "",
      tag: note?.tag || "general"
    });
    onClose();
  };

  if (!isOpen || !note) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Edit Note</h3>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedNote.title}
              onChange={handleChange}
              placeholder="Enter note title"
              required
              minLength={5}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={editedNote.description}
              onChange={handleChange}
              placeholder="Enter note description"
              rows="5"
              required
              minLength={5}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={editedNote.tag}
              onChange={handleChange}
              placeholder="Enter tag (optional)"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Save Changes
            </button>
          </div>
        </form>

        <style>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-content {
            background: white;
            border-radius: 8px;
            padding: 0;
            width: 90%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          }

          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            border-bottom: 1px solid #e5e7eb;
          }

          .modal-header h3 {
            margin: 0;
            color: #1f2937;
            font-size: 1.25rem;
            font-weight: 600;
          }

          .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #6b7280;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: background-color 0.2s;
          }

          .close-btn:hover {
            background-color: #f3f4f6;
            color: #374151;
          }

          form {
            padding: 24px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group label {
            display: block;
            margin-bottom: 6px;
            font-weight: 500;
            color: #374151;
            font-size: 14px;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 14px;
            transition: border-color 0.2s, box-shadow 0.2s;
            box-sizing: border-box;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }

          .form-group textarea {
            resize: vertical;
            min-height: 100px;
            font-family: inherit;
          }

          .modal-actions {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
            margin-top: 24px;
          }

          .btn-cancel,
          .btn-save {
            padding: 10px 20px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid;
          }

          .btn-cancel {
            background: white;
            color: #6b7280;
            border-color: #d1d5db;
          }

          .btn-cancel:hover {
            background: #f9fafb;
            border-color: #9ca3af;
          }

          .btn-save {
            background: #3b82f6;
            color: white;
            border-color: #3b82f6;
          }

          .btn-save:hover {
            background: #2563eb;
            border-color: #2563eb;
          }

          .btn-save:disabled {
            background: #9ca3af;
            border-color: #9ca3af;
            cursor: not-allowed;
          }
        `}</style>
      </div>
    </div>
  );
};

export default EditNote;
