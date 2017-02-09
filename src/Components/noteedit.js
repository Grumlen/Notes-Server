import React from 'react';
import {connect} from 'react-redux';
import {saveNote} from '../Helpers/actions'
import NoteField from './notefield';

const mapStatetoNoteEditProps = (state, ownProps) => {
  const currentNote = state.filter((n) => n.id === ownProps.n)[0];
  return {currentNote};
}

const mapDispatchToNoteEditProps = (dispatch) => (
  {
    onSaveClick: (id, title, contents, lastEdit) => (dispatch(saveNote(id, title, contents, lastEdit))),
  }
);

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.currentNote.id,
      title: props.currentNote.title,
      contents: props.currentNote.contents,
    }
  }
  onTitleChange(e) {
    const note = this.state;
    note.title = e.target.value;
    this.setState(note);
  }
  onContentsChange(e) {
    const note = this.state;
    note.contents = e.target.value;
    this.setState(note);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const note = this.state;
    this.props.onSaveClick(note.id, note.title, note.contents, Date());
  }

  render() {
    return (
      <NoteField
        label='Save'
        title={this.state.title}
        contents={this.state.contents}
        onTitleChange={this.onTitleChange.bind(this)}
        onContentsChange={this.onContentsChange.bind(this)}
        onFormSubmit={this.onFormSubmit.bind(this)}
      />
    );
  }
}

const NoteEditRender = connect(
  mapStatetoNoteEditProps,
  mapDispatchToNoteEditProps
)(NoteEdit);

export default NoteEditRender;
