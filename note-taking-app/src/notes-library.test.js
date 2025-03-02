import { addNote, getNotes, markNoteAsDone } from 'notes-library';

describe('notes-library', () => {
  beforeEach(() => {
    // Clear notes before each test
    jest.clearAllMocks();
  });

  test('should add and retrieve notes', () => {
    addNote('Note 1');
    addNote('Note 2');
    const notes = getNotes();
    expect(notes).toEqual([
      { text: 'Note 1', done: false },
      { text: 'Note 2', done: false },
    ]);
  });

  test('should mark note as done', () => {
    addNote('Note 1');
    addNote('Note 2');
    markNoteAsDone(1); // Mark the second note as done (index 1)
    const notes = getNotes();
    expect(notes[1].done).toBe(true);
  });

  test('should not mark note as done if index is out of bounds', () => {
    addNote('Note 1');
    addNote('Note 2');
    markNoteAsDone(5); // Attempt to mark a note at an out-of-bounds index
    const notes = getNotes();
    expect(notes[0].done).toBe(false); // The first note should remain unchanged
    expect(notes[1].done).toBe(false); // The second note should remain unchanged
  });
});
