import reducer from './Helpers/reducers';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

function componentWithMockStore(Component, state, props) {
  let store = createStore(reducer, state);
  return (
    <Component store={store}/>
    //   <Component {...props}/>
    // </Provider>
  );
}

export default componentWithMockStore;
