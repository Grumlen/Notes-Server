import { save, retrieve } from './store';

function reducer(state = retrieve(),action) {
  if (action.type==='ADD_NOTE') {
    const note = {
      id: action.id,
      title: action.title,
      contents: action.contents,
      edit: false,
      created: action.created
    };
    const notes = state.concat(note);
    save(notes);
    return notes;
  }
  const index = state.findIndex((n) => n.id === action.id);
  switch (action.type) {
    case 'SAVE_NOTE': {
      const note = state[index];
      note.title = action.title;
      note.contents = action.contents;
      note.edit = false;
      note.lastEdit = action.lastEdit;
      const notes = [
        ...state.slice(0,index),
        note,
        ...state.slice(index+1, state.length)
      ];
      save(notes);
      return notes;
    }
    case 'EDIT_NOTE': {
      const note = state[index];
      note.edit = true;
      const notes = [
        ...state.slice(0,index),
        note,
        ...state.slice(index+1, state.length)
      ];
      save(notes);
      return notes;
    }
    case 'DELETE_NOTE': {
      const notes = [
        ...state.slice(0,index),
        ...state.slice(index+1, state.length)
      ];
      save(notes);
      return notes;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
