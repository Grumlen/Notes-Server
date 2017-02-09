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
          <NoteEdit n={n.id} key={index}/> :
          <NoteDisplay note={n} key={index}/>
      ))
    }
    <NewNote />
  </div>
);

const NoteAreaDisplay = connect(
  mapStateToNoteListProps,
  undefined
)(NoteArea);

export default NoteAreaDisplay;
