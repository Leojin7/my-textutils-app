import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { AlertContext } from "../context/alert/alertContext";
import NoteCard from "./NoteCard";
import EditNote from "./EditNote";
import './Notes.css';

const Notes = () => {
  const { notes, deleteNote } = useContext(noteContext);
  const { showAlert } = useContext(AlertContext);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleEdit = (note) => {
    setSelectedNote(note);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedNote(null);
  };

  const handleDelete = async (note) => {
    if (window.confirm(`Are you sure you want to delete the note "${note.title}"?`)) {
      try {
        await deleteNote(note._id);
        showAlert("Note deleted successfully!", "success");
      } catch (error) {
        console.error("Error deleting note:", error);
        showAlert("Failed to delete note. Please try again.", "error");
      }
    }
  };

  return (
    <div className="notes-container">
      {notes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="empty-title">No notes yet</h3>
          <p className="empty-description">Create your first note to get started</p>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title}
              description={note.description}
              tag={note.tag}
              onEdit={() => handleEdit(note)}
              onDelete={() => handleDelete(note)}
            />
          ))}
        </div>
      )}

      <EditNote
        note={selectedNote}
        isOpen={editModalOpen}
        onClose={handleCloseEditModal}
      />
    </div>
  );
};

export default Notes;
