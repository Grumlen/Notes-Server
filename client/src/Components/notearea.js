import React from 'react';
import NoteDisplay from './notedisplay';
import NoteEdit from './noteedit';
import {connect} from 'react-redux';
import {saveNote,editNote,deleteNote,addNote,getNotes,cancelNote} from '../Helpers/actions'
import uuid from 'uuid';
const mapDispatchToNoteEditProps = (dispatch) => (
  {
    onSaveClick: (id, title, contents) => (dispatch(saveNote(id, title, contents))),
    onEditClick: (id) => (dispatch(editNote(id))),
    onDeleteClick: (id) => (dispatch(deleteNote(id))),
    onAddClick: (id, title, contents) => (dispatch(addNote(id, title, contents))),
    getNotesOnLoad: () => (dispatch(getNotes())),
    onCancelClick: (id) => (dispatch(cancelNote(id))),
  }
);

const mapStateToNoteListProps = (state) => {
  const notes = state.notes;
  return {notes};
};

class NoteArea extends React.Component {
  componentWillMount() {
    this.props.getNotesOnLoad();
  }

  render () {

    return (
      <div>
        {
          this.props.notes.map((n,index) => (
            n.edit ?
              <NoteEdit
                note={n}
                label={'Save'}
                key={index}
                onAEClick={this.props.onSaveClick}
                onCancelClick={this.props.onCancelClick}
              /> :
              <NoteDisplay
                note={n}
                key={index}
                onEditClick={this.props.onEditClick}
                onDeleteClick={this.props.onDeleteClick}
              />
          ))
        }
        <NoteEdit
          note={{id:uuid.v4(), title:'', contents:''}}
          label={'Add'}
          onAEClick={this.props.onAddClick}
        />
      </div>
    );
  }
};


const NoteAreaDisplay = connect(
  mapStateToNoteListProps,
  mapDispatchToNoteEditProps
)(NoteArea);

export default NoteAreaDisplay;
