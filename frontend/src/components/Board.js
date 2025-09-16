import React from 'react';

// PUBLIC_INTERFACE
function Square({ value, onClick, disabled }) {
  return (
    <button className="square" onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
}

// PUBLIC_INTERFACE
function Board({ squares, onClick, gameOver }) {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onClick(index)}
          disabled={gameOver || square !== null}
        />
      ))}
    </div>
  );
}

export default Board;
