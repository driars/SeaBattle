import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from 'types/position';
import { ElementStatus, ElementValue } from 'types/elementStatus';
import type { RootState } from 'store';
import { COLUMN_COUNT, ROW_COUNT } from '../../constants';

export interface BoardState {
  cells: ElementValue[][];
  ships: Record<string, number>;
  finish: boolean;
}

// Define the initial state using that type
const initialState: BoardState = {
  cells: Array(ROW_COUNT).fill(
    Array(COLUMN_COUNT).fill({ type: ElementStatus.Empty })
  ),
  ships: {},
  finish: false,
};

export const boardSlice = createSlice({
  name: 'board',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    userClicked: (state, action: PayloadAction<Position>) => {
      const { row, column } = action.payload;

      const { ship } = state.cells[row][column];

      state.cells[row][column].type = ElementStatus.Clicked;

      if (ship) {
        state.ships[ship]--;

        if (state.ships[ship] === 0) {
          state.cells.forEach((row) => {
            row.forEach((cell) => {
              if (cell.ship === ship) cell.type = ElementStatus.Finished;
            });
          });
        }

        const remainCount = Object.keys(state.ships).reduce(
          (sum, key) => sum + state.ships[key],
          0
        );

        if (remainCount === 0) state.finish = true;
      }
    },
    setBoard: (state, action: PayloadAction<BoardState>) => {
      state.ships = action.payload.ships;
      state.cells = action.payload.cells;
    },
  },
});

export const { userClicked, setBoard } = boardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBoard = (state: RootState) => state.board.cells;

export default boardSlice.reducer;
