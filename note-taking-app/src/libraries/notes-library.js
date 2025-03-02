'use strict';

var notes = [];
function addNote(note) {
  notes.push(note);
  return notes;
}
function getNotes() {
  return notes;
}

exports.addNote = addNote;
exports.getNotes = getNotes;
