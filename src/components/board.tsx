import React from 'react';
import { Element } from './element';
import './board.css';

export const Board = () => {
  return (
    <div className="board-container" data-testid="board">
      {Array(10)
        .fill(0)
        .map((_, rowIndex) => (
          <div key={`row ${rowIndex}`} className="row">
            {Array(10)
              .fill(0)
              .map((_, columnIndex) => (
                <Element
                  key={`element ${rowIndex} ${columnIndex}`}
                  row={rowIndex}
                  column={columnIndex}
                />
              ))}
          </div>
        ))}
    </div>
  );
};
