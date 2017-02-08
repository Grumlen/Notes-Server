import React from 'react';
import {connect} from 'react-redux';
import {editNote, deleteNote} from '../Helpers/reducers'
import Button from './button';

const mapDispatchToNoteProps = (dispatch) => (
  {
    onEditClick: (id) => (dispatch(editNote(id))),
    onDeleteClick: (id) => (dispatch(deleteNote(id))),
  }
);

const NoteDisplay = (props) => (
  <div>
    <p>{props.note.title}</p>
    <p>{props.note.contents}</p>
    <Button
      label='Edit Note'
      type=''
      id={props.note.id}
      onClick={props.onEditClick}
    />
    <Button
      label='Delete Note'
      type=''
      id={props.note.id}
      onClick={props.onDeleteClick}
    />
  </div>
);

const NoteRender = connect(
  undefined,
  mapDispatchToNoteProps
)(NoteDisplay);

export default NoteRender;
