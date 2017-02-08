import React from 'react';
import {connect} from 'react-redux';
import {saveNote} from '../Helpers/reducers'
import Button from './button';

const mapStatetoNoteEditProps = (state) => {
  const notes = state;
  return {notes};
}

const mapDispatchToNoteEditProps = (dispatch) => (
  {
    onSaveClick: (id) => (dispatch(saveNote(id))),
  }
);

const NoteEdit = (props) => (
  <div>
    <p>{props.note.title}</p>
    <p>{props.note.contents}</p>
    <Button
      label='Save Note'
      type=''
      id={props.note.id}
      onClick={props.onEditClick}
    />
  </div>
);

const NoteEditRender = connect(
  mapStatetoNoteEditProps,
  mapDispatchToNoteEditProps
)(NoteEdit);

export default NoteEditRender;
