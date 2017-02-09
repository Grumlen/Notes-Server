import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../Helpers/actions'
import uuid from 'uuid';

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
  onSubmit(e) {
    e.preventDefault();
    const note = this.state;
    this.props.onAddClick(note.id, note.title, note.contents, Date());
    this.setState({ id:uuid.v4(), title: '', contents:'' })
  }

  render() {
    return (
      <div className='ui text container'>
        <form className='ui form' onSubmit={this.onSubmit.bind(this)}>
          <input
            type='text'
            placeholder='Title'
            value={this.state.title}
            onChange={this.onTitleChange.bind(this)}
          />
          <textarea
            rows='3'
            placeholder='Contents'
            value={this.state.contents}
            onChange={this.onContentsChange.bind(this)}
          />
          <button className='ui primary button' label='Add Note' type='submit' >
            Add
          </button>
        </form>
      </div>
    );
  }
}

const NewNoteRender = connect(
  undefined,
  mapDispatchToNewNoteProps
)(NewNote);

export default NewNoteRender;
