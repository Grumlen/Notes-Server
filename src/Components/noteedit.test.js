import React from 'react';
import { shallow } from 'enzyme';
import NoteEdit from './noteedit';
import NoteField from './notefield';

jest.mock('./notefield');

describe('NoteEdit', () => {
  let wrapper;
  const onAEClick = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<NoteEdit
                        label='Add'
                        note={{
                          id: "abc",
                          title: "Note1",
                          contents: "Contents1",
                        }}
                        onAEClick={onAEClick}
                      />);
  });
  describe('sets state of', () => {
    it('id', () => {
      expect(wrapper.state().id).toEqual('abc');
    });
    it('title', () => {
      expect(wrapper.state().title).toEqual('Note1');
    });
    it('contents', () => {
      expect(wrapper.state().contents).toEqual('Contents1');
    });
  });
  describe('passes NoteDisplay the', () => {
    it('label', () => {
      expect(wrapper.find(NoteField).get(0).props.label).toEqual('Add');
    });
    it('title', () => {
      expect(wrapper.find(NoteField).get(0).props.title).toEqual('Note1');
    });
    it('contents', () => {
      expect(wrapper.find(NoteField).get(0).props.contents).toEqual('Contents1');
    });
    it('title change function', () => {
      expect(wrapper.find(NoteField).get(0).props.onTitleChange).toBeDefined();
    });
    it('contents change function', () => {
      expect(wrapper.find(NoteField).get(0).props.onContentsChange).toBeDefined();
    });
    it('form submit function', () => {
      expect(wrapper.find(NoteField).get(0).props.onFormSubmit).toBeDefined();
    });
  });
  describe('changes the', () => {
    const e = { target: { value: 'Changed'}};
    it('title', () => {
      wrapper.props().onTitleChange(e);
      expect(wrapper.state().title).toEqual('Changed');
    });
    it('contents', () => {
      wrapper.props().onContentsChange(e);
      expect(wrapper.state().contents).toEqual('Changed');
    });
  });
  describe('submits the form and', () => {
    const e={ preventDefault: () => {}};
    beforeEach(() => {
      wrapper.props().onFormSubmit(e);
    });
    describe('send the', () => {
      it('id', () => {
        expect(onAEClick.mock.calls[0][0]).toEqual('abc');
      });
      it('title', () => {
        expect(onAEClick.mock.calls[0][1]).toEqual('Note1');
      });
      it('contents', () => {
        expect(onAEClick.mock.calls[0][2]).toEqual('Contents1');
      });
    });
    describe('resets the', () => {
      it('id', () => {
        expect(wrapper.state().id).not.toEqual('abc');
      });
      it('title', () => {
        expect(wrapper.state().title).toEqual('');
      });
      it('contents', () => {
        expect(wrapper.state().contents).toEqual('');
      });
    });
  });
});
