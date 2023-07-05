import React from 'react';

function Square({ value, onSquareClick }) {
  const className = value === 'X' ? 'square x' : value === 'O' ? 'square o' : 'square';
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}


export default Square;

