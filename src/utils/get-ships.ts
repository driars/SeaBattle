import { ROW_COUNT, COLUMN_COUNT } from '../constants';
import { BoardState } from '../reducers/board/boardSlice';
import { ElementStatus } from '../types/elementStatus';
import ships from '../constants/ships.json';

export const getShips = () => {
  const state: BoardState = {
    cells: Array(ROW_COUNT)
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
    state.ships[ship] = positions.length;
    positions.forEach(
      ([row, column]) => (state.cells[row][column].ship = ship)
    );
  });

  return state;
};
