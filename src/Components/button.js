import React from 'react';

const Button = (props) => (
  <button
    // key={index}
    className={`ui primary ${props.type} button`}
    onClick={() => props.onClick}
  >
    {props.label}
  </button>
);

export default Button;
