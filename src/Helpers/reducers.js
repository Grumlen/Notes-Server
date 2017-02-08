// import store from 'store';

function reducer(state = [
  {
    id: 'a',
    title: 'Note1',
    contents: 'Note1 Contents',
    edit: true,
    created: 'Jan 25',
    lastEdit: 'Feb 03',
  },
  {
    id: 'b',
    title: 'Note2',
    contents: 'Note2 Contents',
    edit: false,
    created: 'Jan 15',
  },
  {
    id: 'c',
    title: 'Note3',
    contents: 'Note3 Contents',
    edit: false,
    created: 'Jan 20',
    lastEdit: 'Feb 13',
  },
],action) {
  const noteIndex = state.findIndex((n) => n.id === action.id);
  switch (action.type) {
    case 'SAVE_NOTE': {
      return noteSaveReducer(state[noteIndex],action);
    }
    case 'ADD_NOTE': {
      return noteAddReducer(state,action);
    }
    case 'EDIT_NOTE': {
      return noteEditReducer(state[noteIndex]);
    }
    case 'DELETE_NOTE': {
      return [
        ...state.slice(0,noteIndex),
        ...state.slice(noteIndex+1, state.length)
      ];
    }
    default: {
      return state;
    }
  }
}

function noteAddReducer(state,action) {
  const note = {
    id: action.id,
    title: action.title,
    contents: action.contents,
    edit: false,
    created: action.created
  };
  return state.concat(note);
}

function noteSaveReducer(state,action) {
  const note = state;
  note.title = action.title;
  note.contents = action.contents;
  note.edit = false;
  note.lastEdit = action.lastEdit;
  return note;
}

function noteEditReducer(state) {
  const note = state;
  note.edit = true;
  return note;
}

export default reducer;
