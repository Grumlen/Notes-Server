import React from 'react';
import { shallow } from 'enzyme';
import NoteArea from './notearea';
import NoteDisplay from './notedisplay';
import NoteEdit from './noteedit';
import componentWithMockStore from '../testhelper';

jest.mock('./noteedit');
jest.mock('./notedisplay');

const testNotes = [
  {
    id: 'abc',
    title: 'note1',
    contents: 'con1',
    created: 'Feb10',
    edit: true,
  },
  {
    id: 'xyz',
    title: 'note2',
    contents: 'con2',
    created: 'Feb14',
    lastEdit: 'Jan29',
    edit: false,
  },
];

describe('NoteArea', () => {
  let wrapper;
  const saveNote = jest.fn()
  const editNote = jest.fn()
  const deleteNote = jest.fn()
  const addNote = jest.fn()
  beforeEach(() => {

    // console.log(c);
    wrapper = shallow(componentWithMockStore(NoteArea, testNotes));
  });
  describe('passes NoteEdit the', () => {
    it('note', () => {
       console.log(wrapper.find(NoteEdit).props());
      const noteEditProps = wrapper.find(NoteEdit).get(0).props;
      expect(noteEditProps.note).toEqual({id:'abc',title:'note1',contents:'con1',create:'Feb10',edit:true});
    });
  });
});
