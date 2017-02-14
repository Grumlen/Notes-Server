function reducer(state={ notes: [], isLoading: false, hasError: false }, action) {
  switch (action.type) {
    case 'LOADING': {
      const obj = state;
      obj.isLoading = action.bool;
      return obj;
    }
    case 'ERROR': {
      const obj = state;
      obj.hasError = action.bool;
      return obj;
    }
    case 'LOAD_NOTES':
    case 'ADD_NOTE':
    case 'EDIT_NOTE':
    case 'DELETE_NOTE': {
      return {
        notes: reducerNotes(state.notes, action),
        isLoading: state.isLoading,
        hasError: state.hasError,
      };
    }
    default: {
      return state;
    }
  }
}

function reducerNotes(state,action) {
  switch (action.type) {
    case 'LOAD_NOTES': {
      return action.notes;
    }
    case 'ADD_NOTE': {
      const notes = state.concat(action.note);
      return notes;
    }
    case 'EDIT_NOTE': {
      console.log(action.note.id,state)
      const index = state.findIndex((n) => n.id === action.note.id);
      console.log(index)
      const notes = [
        ...state.slice(0,index),
        Object.assign(state[index],action.note),
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
