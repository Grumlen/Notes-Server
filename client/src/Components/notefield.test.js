import React from 'react';
import { shallow } from 'enzyme';
import NoteField from './notefield';

describe('NoteField', () => {
  let wrapper;
  const onFormSubmit = jest.fn();
  const onTitleChange = jest.fn();
  const onContentsChange = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<NoteField
                        onFormSubmit={onFormSubmit}
                        onTitleChange={onTitleChange}
                        onContentsChange={onContentsChange}
                        title='Note1'
                        contents='Contents1'
                        label='Save'
                      />)
  });
  describe('renders', () => {
    it('title field with title', () => {
      expect(wrapper.find('input').get(0).props.value).toEqual('Note1');
    });
    it('contents field with contents', () => {
      expect(wrapper.find('textarea').get(0).props.value).toEqual('Contents1');
    });
    it('button', () => {
      expect(wrapper.find('button').get(0).props.children).toEqual('Save');
    });
  });
  describe('has behavior when', () => {
    it('editing title', () => {
      wrapper.find('input').first().simulate('change','a');
      expect(onTitleChange.mock.calls[0]).toEqual(['a']);
    });
    it('editing contents', () => {
      wrapper.find('textarea').first().simulate('change','b');
      expect(onContentsChange.mock.calls[0]).toEqual(['b']);
    });
    it('submitting', () => {
      wrapper.find('form').first().simulate('submit');
      expect(onFormSubmit.mock.calls.length).toEqual(1);
    });
  });
});
