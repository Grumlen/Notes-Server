import React from 'react';
import './App.css';
import Header from './Components/header';
import NoteArea from './Components/notearea';
import Footer from './Components/footer';

// import reducer from './Helpers/reducers'

const App = () => ( // Completed
  <div id='App'>
    <Header />
    <NoteArea />
    <Footer />
  </div>
);

export default App;
