import React from 'react';

const NoteField = (props) => (
  <div className='ui text container'>
    <div className='ui segments'>
      <form className='ui form' onSubmit={props.onFormSubmit}>
        <input
          type='text'
          placeholder='Title'
          value={props.title}
          onChange={props.onTitleChange}
        />
        <textarea
          rows='3'
          placeholder='Contents'
          value={props.contents}
          onChange={props.onContentsChange}
        />
        <button className='ui primary button' type='submit' >
          {props.label}
        </button>
      </form>
    </div>
  </div>
)

export default NoteField;
