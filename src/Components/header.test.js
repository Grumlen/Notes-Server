import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
});
