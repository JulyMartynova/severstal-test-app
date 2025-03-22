import React, { useState } from 'react';
import Note from './createNote';
import SelectedNote from './selectedNote';

const NoteList = ({ notes = [] }) => {
    const [notesState, setNotesState] = useState(notes);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [isCreating, setIsCreating] = useState(false);

    // Находим выбранную заметку
    const selectedNote = notesState.find((note) => note.id === selectedNoteId);

    // Обработчик создания новой заметки
    const handleCreated = () => {
        setIsCreating(true); // Устанавливаем состояние создания
        setSelectedNoteId(null); // Сбрасываем выбранную заметку
    };

    // Обработчик выбора заметки
    const handleSelected = (id) => {
        setSelectedNoteId(id);
        setIsCreating(false); // Сбрасываем состояние создания
    };

    // Обработчик удаления заметки
    const handleDelete = (id) => {
        setNotesState((prevNotes) => prevNotes.filter((note) => note.id !== id));
        if (selectedNoteId === id) {
            setSelectedNoteId(null); // Сбрасываем выбранную заметку, если она удалена
        }
    };

    // Обработчик сохранения заметки
    const handleSaveNote = (newNote) => {
        if (newNote.id) {
            // Обновляем существующую заметку
            setNotesState((prevNotes) =>
                prevNotes.map((note) =>
                    note.id === newNote.id ? newNote : note
                )
            );
        } else {
            // Добавляем новую заметку
            const noteWithId = { ...newNote, id: Date.now() };
            setNotesState((prevNotes) => [...prevNotes, noteWithId]);
        }
        setIsCreating(false); // Сбрасываем состояние создания
        setSelectedNoteId(null); // Сбрасываем выбранную заметку
    };

    return (
        <div className='notes'>
            {notesState.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    onSelect={handleSelected}
                    onDelete={handleDelete}
                />
            ))}
            

            {/* Отображаем SelectedNote для новой или выбранной заметки */}
            {(isCreating || selectedNote) && (
                <SelectedNote
                    note={selectedNote || { name: '', content: '' }} // Если создаем новую заметку, передаем пустой объект
                    onClose={() => {
                        setSelectedNoteId(null);
                        setIsCreating(false);
                    }}
                    onSave={handleSaveNote}
                />
            )}
            <button onClick={handleCreated} className="submit-button">Создать</button>
        </div>
    );
};

export default NoteList;