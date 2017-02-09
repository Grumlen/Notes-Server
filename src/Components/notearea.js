import React from 'react';
import NoteDisplay from './notedisplay';
import NoteEdit from './noteedit';
import {connect} from 'react-redux';
import {saveNote,editNote,deleteNote,addNote} from '../Helpers/actions'
import uuid from 'uuid';
const mapDispatchToNoteEditProps = (dispatch) => (
  {
    onSaveClick: (id, title, contents, lastEdit) => (dispatch(saveNote(id, title, contents, lastEdit))),
    onEditClick: (id) => (dispatch(editNote(id))),
    onDeleteClick: (id) => (dispatch(deleteNote(id))),
    onAddClick: (id, title, contents, created) => (dispatch(addNote(id, title, contents, created))),
  }
);

const mapStateToNoteListProps = (state) => {
  const notes = state.map(n=> (
    {
      id: n.id,
      title: n.title,
      contents: n.contents,
      edit: n.edit,
      created: n.created,
      lastEdit: n.lastEdit,
    }
  ));
  return {notes};
};

const NoteArea = (props) => (
  <div>
    {
      props.notes.map((n,index) => (
        n.edit ?
          <NoteEdit
            note={n}
            label={'Save'}
            key={index}
            onClick={props.onSaveClick}
          /> :
          <NoteDisplay
            note={n}
            key={index}
            onEditClick={props.onEditClick}
            onDeleteClick={props.onDeleteClick}
          />
      ))
    }
    <NoteEdit
      note={{id:uuid.v4(), title:'', contents:''}}
      label={'Add'}
      onClick={props.onAddClick}
    />
  </div>
);

const NoteAreaDisplay = connect(
  mapStateToNoteListProps,
  mapDispatchToNoteEditProps
)(NoteArea);

export default NoteAreaDisplay;
