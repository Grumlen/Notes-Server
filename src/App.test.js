import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

jest.mock('./Components/header');
jest.mock('./Components/footer');
jest.mock('./Components/notearea');

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
