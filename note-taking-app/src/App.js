import React, { useState } from 'react';
import { authenticateUser, registerUser } from 'auth-library';
import { addNote, getNotes, markNoteAsDone, deleteNote, toggleFavoriteNote } from 'notes-library';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [noteText, setNoteText] = useState('');

  const handleLogin = () => {
    const user = authenticateUser(username, password);
    if (user) {
      setIsAuthenticated(true);
      setNotes(getNotes());
      setMessage('');
    } else {
      setMessage('Invalid username or password');
    }
  };

  const handleRegister = () => {
    const result = registerUser(username, password);
    if (result === 'User already exists') {
      setMessage(result);
    } else {
      setMessage('Registration successful, please log in');
      setIsRegistering(false);
    }
  };

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      addNote(noteText);
      setNotes(getNotes());
      setNoteText(''); // Clear the input field after adding the note
    }
  };

  const handleMarkNoteAsDone = (index) => {
    markNoteAsDone(index);
    setNotes(getNotes());
  };

  const handleDeleteNote = (index) => {
    deleteNote(index);
    setNotes(getNotes());
  };

  const handleToggleFavoriteNote = (index) => {
    toggleFavoriteNote(index);
    setNotes(getNotes());
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="auth-form">
          <h1>{isRegistering ? 'Register' : 'Login'}</h1>
          {message && <p>{message}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegistering ? (
            <button onClick={handleRegister}>Register</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Already have an account? Login' : 'New here? Register'}
          </button>
        </div>
      ) : (
        <div className="notes-section">
          <h1>Notes</h1>
          <input
            type="text"
            placeholder="Write a note"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <button onClick={handleAddNote}>Add Note</button>
          <ul>
            {notes.map((note, index) => (
              <li key={index} className={note.favorite ? 'favorite' : ''}>
                <span style={{ textDecoration: note.done ? 'line-through' : 'none' }}>
                  {note.text}
                </span>
                {!note.done && (
                  <>
                    <button onClick={() => handleMarkNoteAsDone(index)}>Done</button>
                    <button onClick={() => handleDeleteNote(index)}>Delete</button>
                    <button onClick={() => handleToggleFavoriteNote(index)}>
                      {note.favorite ? 'Unfavorite' : 'Favorite'}
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
