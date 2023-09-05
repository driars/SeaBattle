import React, { useEffect } from 'react';
import { ROW_COUNT, COLUMN_COUNT } from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks';
import { BoardState, setBoard } from '../reducers/board/boardSlice';
import { ElementStatus } from '../types/elementStatus';
import ships from '../constants/ships.json';
import { Board } from '../components/board';
import './battle.css';
import { Finish } from '../components/finish';

export const SeaBattle = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const state: BoardState = {
      value: Array(ROW_COUNT)
        .fill(0)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map((_) =>
          Array(COLUMN_COUNT)
            .fill(0)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map((_) => ({ type: ElementStatus.Empty }))
        ),
      ships: {},
      finish: false,
    };

    ships.board.forEach(({ positions, ship }) => {
      state.ships[ship] = {
        count: positions.length,
        selected: 0,
      };
      positions.forEach(
        ([row, column]) => (state.value[row][column].ship = ship)
      );
    });

    dispatch(setBoard(state));
  }, [dispatch]);

  const finish = useAppSelector((state) => state.board.finish);

  return (
    <div className="battle-container">{finish ? <Finish /> : <Board />}</div>
  );
};
