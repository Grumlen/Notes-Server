import React from 'react';
import NoteDisplay from './notedisplay';
import NoteEdit from './noteedit';
import NewNote from './newnote';
import {connect} from 'react-redux';

const mapStateToNoteListProps = (state) => {
  const notes = state.map(n=> (
    {
      id: n.id,
      title: n.title,
      contents: n.contents,
      edit: n.edit,
    }
  ));
  return {notes};
};

const NoteArea = (props) => (
  <div>
    {
      props.notes.map((n,index) => (
        n.edit ?
          <NoteEdit note={n} key={index}/> :
          <NoteDisplay note={n} key={index}/>
      ))
    }
    <NewNote />
  </div>
);

const NoteAreaDisplay = connect(
  mapStateToNoteListProps
)(NoteArea);

export default NoteAreaDisplay;
