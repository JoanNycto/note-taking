'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var src = {};

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
var addNote_1 = src.addNote = addNote;
var getNotes_1 = src.getNotes = getNotes;
var markNoteAsDone_1 = src.markNoteAsDone = markNoteAsDone;
var deleteNote_1 = src.deleteNote = deleteNote;
var toggleFavoriteNote_1 = src.toggleFavoriteNote = toggleFavoriteNote;

exports.addNote = addNote_1;
exports.default = src;
exports.deleteNote = deleteNote_1;
exports.getNotes = getNotes_1;
exports.markNoteAsDone = markNoteAsDone_1;
exports.toggleFavoriteNote = toggleFavoriteNote_1;
