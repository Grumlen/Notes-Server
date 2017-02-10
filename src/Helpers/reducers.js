import { retrieveAll } from './store';

function reducer(state = retrieveAll(),action) {
  switch (action.type) {
    case 'ADD_NOTE': {
      const notes = state.concat(action.note);
      return notes;
    }
    case 'SAVE_NOTE': {
      const index = state.findIndex((n) => n.id === action.note.id);
      const notes = [
        ...state.slice(0,index),
        action.note,
        ...state.slice(index+1, state.length)
      ];
      return notes;
    }
    case 'EDIT_NOTE': {
      const index = state.findIndex((n) => n.id === action.note.id);
      const notes = [
        ...state.slice(0,index),
        action.note,
        ...state.slice(index+1, state.length)
      ];
      return notes;
    }
    case 'DELETE_NOTE': {
      const index = state.findIndex((n) => n.id === action.id);
      const notes = [
        ...state.slice(0,index),
        ...state.slice(index+1, state.length)
      ];
      return notes;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
