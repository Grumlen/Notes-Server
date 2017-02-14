function deleteNoteState(id) {
  return { type: 'DELETE_NOTE', id };
}

function addNoteState(note) {
  return { type: 'ADD_NOTE', note };
}

function saveNoteState(note) {
  note.edit = false;
  return { type: 'EDIT_NOTE', note };
}

function isLoading(bool) {
  return { type: 'LOADING', bool};
}

function hasError(bool) {
  return { type: 'ERROR', bool};
}

function getNotesState(notes) {
  return { type: 'LOAD_NOTES', notes };
}

// Exported Functions

function getNotes() {
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch('/notes')
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        dispatch(isLoading(false));
        return response.json();
      })
      .then ((notes) => {
        dispatch(getNotesState(notes));
      })
      .catch((err) => dispatch(hasError(true)));
  }
}

function editNote(id) {
  const note = { id, edit: true };
  return { type: 'EDIT_NOTE', note };
}

function cancelNote(id) {
  const note = { id, edit: false };
  return { type: 'EDIT_NOTE', note };
}

function addNote(id, title, contents) {
  const note = {
    id,
    title: title==='' ? 'Untitled' : title,
    contents,
    created: Date(),
  };
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch('/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        dispatch(isLoading(false));
        return response.json();
      })
      .then ((note) => {
        dispatch(addNoteState(note));
      })
      .catch((err) => dispatch(hasError(true)));
  }
}

function saveNote(id, title, contents) {
  const note = {
    id,
    title: title==='' ? 'Untitled' : title,
    contents,
    lastEdit: Date(),
  };
  console.log(note);
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch('/notes/'+id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        dispatch(isLoading(false));
        return response.json();
      })
      .then ((note) => {
        console.log(note);
        dispatch(saveNoteState(note));
      })
      .catch((err) => dispatch(hasError(true)));
  }
}

function deleteNote(id) {
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch('/notes/'+id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        dispatch(isLoading(false));
        dispatch(deleteNoteState(id));
      })
      .catch((err) => dispatch(hasError(true)));
  }
}

export { deleteNote, addNote, saveNote, editNote, getNotes, cancelNote };
