import React, { useState } from 'react';

const SelectedNote = ({ note, onClose, onSave }) => {
    const [name, setName] = useState(note.name || '');
    const [content, setContent] = useState(note.content || '');

    const handleSave = () => {
        const updatedNote = { ...note, name, content };
        onSave(updatedNote); // Передаем обновленную заметку в родительский компонент
    };
    const handleBold = () => {
        document.execCommand('bold', false, null)
    }

    return (
        <div className="selectedNoteOverlay">
            <div className="selectedNote">
            <button onClick={onClose} className="closed">x</button>
            <button onClick={handleBold}>Bold</button>
                <input
                    type="text"
                    value={name}
                    placeholder="Имя заметки"
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    value={content}
                    placeholder="Текст"
                    onChange={(e) => setContent(e.target.value)}
                />
                
                <button onClick={handleSave} className='submit-button'>Сохранить</button>
            </div>
        </div>
    );
};

export default SelectedNote;