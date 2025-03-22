import React from 'react';
import SelectedNote from './selectedNote';

const Note = ({ note, onDelete, onSelect}) => {
    const handleIsSelected = () => {
        onSelect(note.id);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(note.id);
    };

    return (
        <div className = "note" onClick={handleIsSelected}>
            <button onClick={handleDelete} className="closed">x</button>
            <div className = "note-content">
            <span>{note.name}</span>
            <p>{note.content}</p>
            
            </div>
            
        </div>
    );
};

export default Note;