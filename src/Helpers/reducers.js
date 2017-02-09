function reducer(state = [
  {
    id: 'a',
    title: 'Note1',
    contents: 'Note1 Contents',
    edit: true,
    created: 'Tue Jan 25',
    lastEdit: 'Wed Feb 03',
  },
  {
    id: 'b',
    title: 'Note2',
    contents: 'Note2 Contents',
    edit: false,
    created: 'Thu Jan 15',
  },
  {
    id: 'c',
    title: 'Note3',
    contents: 'Note3 Contents',
    edit: false,
    created: 'Fri Jan 20',
    lastEdit: 'Sun Feb 13',
  },
],action) {
  const index = state.findIndex((n) => n.id === action.id);
  switch (action.type) {
    case 'SAVE_NOTE': {
      const note = state[index];
      note.title = action.title;
      note.contents = action.contents;
      note.edit = false;
      note.lastEdit = action.lastEdit;
      return [
        ...state.slice(0,index),
        note,
        ...state.slice(index+1, state.length)
      ];
    }
    case 'ADD_NOTE': {
      const note = {
        id: action.id,
        title: action.title,
        contents: action.contents,
        edit: false,
        created: action.created
      };
      return state.concat(note);
    }
    case 'EDIT_NOTE': {
      const note = state[index];
      note.edit = true;
      return [
        ...state.slice(0,index),
        note,
        ...state.slice(index+1, state.length)
      ];
    }
    case 'DELETE_NOTE': {
      return [
        ...state.slice(0,index),
        ...state.slice(index+1, state.length)
      ];
    }
    default: {
      return state;
    }
  }
}

export default reducer;
