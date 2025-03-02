'use strict';

var notes = [];

function addNote(note) {
  var newNote = {
    text: note,
    done: false,
    favorite: false
  };
  notes.push(newNote);
  return notes;
}

function getNotes() {
  return notes;
}

function markNoteAsDone(index) {
  if (index >= 0 && index < notes.length) {
    notes[index].done = true;
  }
  return notes;
}

function deleteNote(index) {
  if (index >= 0 && index < notes.length) {
    notes.splice(index, 1);
  }
  return notes;
}

function toggleFavoriteNote(index) {
  if (index >= 0 && index < notes.length) {
    notes[index].favorite = !notes[index].favorite;
  }
  return notes;
}

exports.addNote = addNote;
exports.getNotes = getNotes;
exports.markNoteAsDone = markNoteAsDone;
exports.deleteNote = deleteNote;
exports.toggleFavoriteNote = toggleFavoriteNote;
