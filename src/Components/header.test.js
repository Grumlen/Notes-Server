import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  const wrapper = shallow(<Header />);
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('displays the footer text', () => {
    expect(wrapper.containsMatchingElement(
      <h1 className='ui header'>NotesApplication</h1>
    )).toBe(true);
  })
});
