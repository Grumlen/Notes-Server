function deleteNote(id) { // Completed
  return { type: 'DELETE_NOTE', id };
}

function addNote(id, title, contents, created) { // Completed
  return { type: 'ADD_NOTE', id, title, contents, created };
}

function saveNote(id, title, contents, lastEdit) { // Completed
  return { type: 'SAVE_NOTE', id, title, contents, lastEdit };
}

function editNote(id) {
  return { type: 'EDIT_NOTE', id };
}

export { deleteNote, addNote, saveNote, editNote};
