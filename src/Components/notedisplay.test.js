import React from 'react';
import { shallow } from 'enzyme';
import NoteDisplay from './notedisplay';

describe('NoteDisplay', () => {
  let wrapper;
  const onEditClick = jest.fn();
  const onDeleteClick = jest.fn();
  describe('renders', () => {
    beforeEach(() => {
      wrapper = shallow(<NoteDisplay
                          note={
                            {
                              id: 'abc',
                              title:'Note1',
                              contents:'Contents1',
                              created:'Thu Feb 09 2017 16:20:10 GMT-0600 (CST)',
                              lastEdit:'Thu Feb 09 2017 16:20:10 GMT-0600 (CST)',
                              edit: false,
                            }
                          }
                        />);
    });
    it('without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('note title', () => {
      expect(wrapper.contains(<h3>Note1</h3>)).toBe(true);
    });
    it('note contents', () => {
      expect(wrapper.contains(<p>Contents1</p>)).toBe(true);
    });
    it('note created date', () => {
      expect(wrapper.contains(<span>Created: Feb 09 2017 16:20:10</span>)).toBe(true);
    });
    it('note last edit date', () => {
      expect(wrapper.contains(<span>, Last Edit: Feb 09 2017 16:20:10</span>)).toBe(true);
    });
    it('edit button', () => {
      expect(wrapper.find('button').get(0).props.children).toEqual('Edit');
    });
    it('delete button', () => {
      expect(wrapper.find('button').get(1).props.children).toEqual('Delete');
    });
  });
});
