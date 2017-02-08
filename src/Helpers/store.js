import {createStore} from 'redux'
import reducer from './reducers'

const initialState = [
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
];

const store = createStore(reducer, initialState);

export default store;
