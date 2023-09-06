import React, { useCallback } from 'react';
import { Position } from '../types/position';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ElementStatus } from '../types/elementStatus';
import { userClicked } from '../reducers/board/boardSlice';

import FailedIcon from '../assets/icons/failed.svg';
import SelectedIcon from '../assets/icons/selected.svg';
import './element.css';

export const Element = ({ row, column }: Position) => {
  const { type, ship } = useAppSelector(
    (state) => state.board.cells[row][column]
  );
  const dispatch = useAppDispatch();

  const onClick = useCallback(() => {
    if (type === ElementStatus.Empty) {
      dispatch(userClicked({ row, column }));
    }
  }, [column, dispatch, row, type]);

  const element =
    type === ElementStatus.Empty ? null : (
      <img
        src={ship ? SelectedIcon : FailedIcon}
        alt="icon"
        data-testid="element-icon"
      />
    );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`element ${
        type === ElementStatus.Finished ? 'destroyed' : ''
      }`}
      onClick={onClick}
      data-testid="element"
    >
      {element}
    </div>
  );
};
