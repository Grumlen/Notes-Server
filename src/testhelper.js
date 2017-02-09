import reducer from './Helpers/reducers';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

function componentWithMockStore(component, state, props) {
  let store = createStore(reducer, state);
  return (
    <Provider store={store}>
      <{component} {...props}/>
    </Provider>
  );
}

export default componentWithMockStore;
