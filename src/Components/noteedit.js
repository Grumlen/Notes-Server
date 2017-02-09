import React from 'react';
import {connect} from 'react-redux';
import {saveNote} from '../Helpers/actions'

const mapStatetoNoteEditProps = (state, ownProps) => {
  const currentNote = state.filter((n) => n.id === ownProps.n)[0];
  return {currentNote};
}

const mapDispatchToNoteEditProps = (dispatch) => (
  {
    onSaveClick: (id, title, contents, lastEdit) => (dispatch(saveNote(id, title, contents, lastEdit))),
  }
);

// const NoteEdit = (props) => (
//   <div>
//     <form onSubmit=
//     <p>{props.currentNote.title}</p>
//     <p>{props.currentNote.contents}</p>
//     <Button
//       label='Save Note'
//       type=''
//       id={props.currentNote.id}
//       onClick={() => props.onSaveClick(props.currentNote.id, props.currentNote.title, props.currentNote.contents, Date())}
//     />
//   </div>
// );
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
  onSubmit(e) {
    e.preventDefault();
    const note = this.state;
    this.props.onSaveClick(note.id, note.title, note.contents, Date());
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
          <button className='ui primary button' label='Save Note' type='submit' >
            Save
          </button>
        </form>
      </div>
    );
  }
}

const NoteEditRender = connect(
  mapStatetoNoteEditProps,
  mapDispatchToNoteEditProps
)(NoteEdit);

export default NoteEditRender;
