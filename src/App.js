import React from 'react';
import './App.css';
import Header from './Components/header';
import NoteArea from './Components/notearea';
import Footer from './Components/footer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './Helpers/reducers';

const store = createStore(reducer);

// import reducer from './Helpers/reducers'

const App = () => ( // Completed
  <div>
    <Header />
    <Provider store={store}>
      <NoteArea />
    </Provider>
    <Footer />
  </div>
);

export default App;
