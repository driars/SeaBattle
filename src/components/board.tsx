import React from 'react';
import { Element } from './element';
import './board.css';
import { COLUMN_COUNT, ROW_COUNT } from '../constants';

export const Board = () => {
  return (
    <div className="board-container" data-testid="board">
      {Array(ROW_COUNT)
        .fill(0)
        .map((_, rowIndex) => (
          <div key={`row ${rowIndex}`} className="row">
            {Array(COLUMN_COUNT)
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
