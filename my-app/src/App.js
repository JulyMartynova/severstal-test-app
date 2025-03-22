import logo from './logo.svg';
import './App.css';
import NoteList  from './pages/noteList';

function App() {
  const notes = [
    { id: 1, name: 'Заметка 1', content: 'Текст 1' },
    { id: 2, name: 'Заметка 2', content: 'Текст 2' },
  ]

  return (
    <div>
      <NoteList notes={notes}></NoteList>
    </div>
  );
  
}

export default App;
