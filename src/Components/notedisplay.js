import React from 'react';

const NoteDisplay = (props) => (
  <div className='ui text container'>
    <div className='ui segments'>
      <div className='ui segment'>
        <h3>{props.note.title}</h3>
        <p>{props.note.contents}</p>
      </div>
      <div className='ui tiny horizontal segments'>
        <div className='ui buttons'>
          <button
            className='ui primary button'
            onClick={() => props.onEditClick(props.note.id)}
          >Edit</button>
          <div className='or' />
          <button
            className='ui primary button'
            onClick={() => props.onDeleteClick(props.note.id)}
          >Delete</button>
        </div>
        <div className='ui segment'>
          <span>Created: {props.note.created.slice(4,24)}</span>
          {props.note.lastEdit ? (<span>, Last Edit: {props.note.lastEdit.slice(4,24)}</span>):null}
        </div>
      </div>
    </div>
  </div>
);

export default NoteDisplay;
