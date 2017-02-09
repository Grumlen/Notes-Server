import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../Helpers/actions'
import uuid from 'uuid';
import NoteField from './notefield';

const mapDispatchToNewNoteProps = (dispatch) => (
  {
    onAddClick: (id, title, contents, created) => (dispatch(addNote(id, title, contents, created))),
  }
);

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid.v4(),
      title: '',
      contents: '',
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
    this.props.onAddClick(note.id, note.title, note.contents, Date());
    this.setState({ id:uuid.v4(), title: '', contents:'' })
  }

  render() {
    return (
      <NoteField
        label='Add'
        title={this.state.title}
        contents={this.state.contents}
        onTitleChange={this.onTitleChange.bind(this)}
        onContentsChange={this.onContentsChange.bind(this)}
        onFormSubmit={this.onFormSubmit.bind(this)}
      />
    );
  }
}

const NewNoteRender = connect(
  undefined,
  mapDispatchToNewNoteProps
)(NewNote);

export default NewNoteRender;
