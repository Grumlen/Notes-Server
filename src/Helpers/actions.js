import { save, retrieve, remove } from './store';

function deleteNote(id) { // Completed
  remove(id);
  return { type: 'DELETE_NOTE', id };
}

function addNote(id, title, contents) { // Completed
  const note = {
    id,
    title: title==='' ? 'Untitled' : title,
    contents,
    edit: false,
    created: Date(),
  };
  save(note);
  return { type: 'ADD_NOTE', note };
}

function saveNote(id, title, contents) { // Completed
  const note = retrieve(id);
  note.title = title;
  note.contents = contents;
  note.edit = false;
  note.lastEdit = Date();
  save(note);
  return { type: 'SAVE_NOTE', note };
}

function editNote(id) {
  const note = retrieve(id);
  note.edit = true;
  save(note);
  return { type: 'EDIT_NOTE', note };
}

export { deleteNote, addNote, saveNote, editNote};
