import React from 'react';
import NoteField from './notefield';
import uuid from 'uuid';

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.note.id,
      title: props.note.title,
      contents: props.note.contents,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentsChange = this.onContentsChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
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
    this.props.onAEClick(note.id, note.title, note.contents);
    note.id = uuid.v4();
    note.title = '';
    note.contents = '';
    this.setState(note);
  }
  onCancelClick(e) {
    e.preventDefault();
    this.props.onCancelClick(this.state.id);
  }

  render() {
    return (
      <NoteField
        label={this.props.label}
        title={this.state.title}
        contents={this.state.contents}
        onTitleChange={this.onTitleChange}
        onContentsChange={this.onContentsChange}
        onFormSubmit={this.onFormSubmit}
        cancelButton={this.props.label==='Save' ? this.onCancelClick : null}
      />
    );
  }
}

export default NoteEdit;
