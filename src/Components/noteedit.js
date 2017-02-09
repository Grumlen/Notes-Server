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
    this.props.onClick(note.id, note.title, note.contents, Date());
    if (this.props.label==='Add') {
      const note = this.state;
      note.id = uuid.v4();
      note.title = '';
      note.contents = '';
      this.setState(note);
    }
  }

  render() {
    return (
      <NoteField
        label={this.props.label}
        title={this.state.title}
        contents={this.state.contents}
        onTitleChange={this.onTitleChange.bind(this)}
        onContentsChange={this.onContentsChange.bind(this)}
        onFormSubmit={this.onFormSubmit.bind(this)}
      />
    );
  }
}

export default NoteEdit;
