import React from 'react';
import {connect} from 'react-redux';
import {editNote, deleteNote} from '../Helpers/actions'

const mapDispatchToNoteProps = (dispatch) => (
  {
    onEditClick: (id) => (dispatch(editNote(id))),
    onDeleteClick: (id) => (dispatch(deleteNote(id))),
  }
);

const NoteDisplay = (props) => (
  <div className='ui text container'>
    <div className='ui segment'>
      <h3>{props.note.title}</h3>
      <p>{props.note.contents}</p>
      <div className='ui inline tiny segment'>
        <span>Created: {props.note.created.slice(4,24)}</span>
        {props.note.lastEdit ? (<span>, Last Edit: {props.note.lastEdit.slice(4,24)}</span>):null}
      </div>
      <div className='ui buttons'>
        <button
          className='ui primary button'
          onClick={() => props.onEditClick(props.note.id)}
        >Edit</button>
        <div className='or' />
        <button
          className='ui primary button'
          onClick={() => props.onDeleteClick(props.note.id)}
        >Delete</button>
      </div>
    </div>
  </div>
);

const NoteRender = connect(
  undefined,
  mapDispatchToNoteProps
)(NoteDisplay);

export default NoteRender;
