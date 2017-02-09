import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
import { shallow } from 'enzyme';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
});
