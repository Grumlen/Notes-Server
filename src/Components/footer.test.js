import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('displays the footer text', () => {
    expect(wrapper.containsMatchingElement(
      <p>This site was made by Nathan Christian using HTML, CSS, Javascript, Semantic UI, and requireJS. Copyright 2017.</p>
    )).toBe(true);
  })
});
