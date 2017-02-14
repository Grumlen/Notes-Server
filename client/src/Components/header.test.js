import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

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
