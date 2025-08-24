import React, { useState } from "react";
import { FaEdit, FaTrash, FaTag } from "react-icons/fa";
import './NoteCard.css';

const NoteCard = ({ title, description, tag, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = description.length > 150;
  const displayDescription = shouldTruncate && !isExpanded 
    ? description.substring(0, 150) + "..." 
    : description;

  return (
    <div className="note-card slide-up">
      <div className="note-header">
        <h3 className="note-title">
          {title}
        </h3>
        <div className="note-actions">
          <button
            onClick={onEdit}
            className="action-btn edit-btn"
            aria-label="Edit note"
          >
            <FaEdit />
          </button>
          <button
            onClick={onDelete}
            className="action-btn delete-btn"
            aria-label="Delete note"
          >
            <FaTrash />
          </button>
        </div>
      </div>
      
      {tag && (
        <div className="note-tag">
          <FaTag className="tag-icon" />
          <span className="tag-text">
            {tag}
          </span>
        </div>
      )}
      
      <p className="note-description">
        {displayDescription}
      </p>
      
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="expand-btn"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default NoteCard;
