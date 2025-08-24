import React, { useState, useEffect } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";

  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null); // Store logged-in user info

  // Fetch logged-in user details
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token, user not logged in");
      return;
    }
    try {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
        }

      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        console.log("Logged-in user data:", userData);
      } else {
        console.error("Failed to fetch user:", response.status);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  // Fetch all notes
  const fetchAllNotes = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Unauthorized – please login");
      setNotes([]); // Clear notes if no token
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
        }

      });
      if (response.ok) {
        const json = await response.json();
        setNotes(json);
      } else if (response.status === 401) {
        console.error("Unauthorized – please login");
        setNotes([]); // Clear notes on unauthorized
      } else {
        console.error("Failed to fetch notes");
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // On component mount, fetch user and notes if logged in
  useEffect(() => {
    fetchUser();
    fetchAllNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add a new note
  const addNote = async (title, description, tag = '') => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Unauthorized – please login");
      return;
    }
    
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          title: title.trim(),
          description: description.trim(),
          tag: tag ? tag.trim() : 'general' // Ensure tag is never undefined
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setNotes((prevNotes) => [data, ...prevNotes]);
      } else {
        // Handle validation errors from the server
        const errorMsg = data.errors ? 
          data.errors.map(err => err.msg).join(', ') : 
          (data.error || 'Failed to add note');
        console.error("Failed to add note:", errorMsg);
        // You might want to show this error to the user
        alert(`Error: ${errorMsg}`);
      }
    } catch (error) {
      console.error("Error adding note:", error);
      alert("An error occurred while adding the note. Please try again.");
    }
  };

  // Delete note function (unchanged)
  const deleteNote = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Unauthorized – please login");
      return;
    }
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
        },

      });
      const json = await response.json();
      if (response.ok) {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      } else {
        console.error("Failed to delete note:", json.error || json.message);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit note function (unchanged)
  const editNote = async (id, updatedTitle, updatedDescription, updatedTag) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Unauthorized – please login");
      return;
    }
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
        },

        body: JSON.stringify({ title: updatedTitle, description: updatedDescription, tag: updatedTag }),
      });
      const json = await response.json();
      if (response.ok) {
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note._id === id
              ? { ...note, title: updatedTitle, description: updatedDescription, tag: updatedTag }
              : note
          )
        );
      } else {
        console.error("Failed to update note:", json.error || json.message);
      }
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, user, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
