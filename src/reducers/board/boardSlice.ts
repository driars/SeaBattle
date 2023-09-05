import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from '../../types/position';
import { ElementStatus, ElementValue } from '../../types/elementStatus';
import type { RootState } from '../../store';
import { COLUMN_COUNT, ROW_COUNT } from '../../constants';

export interface BoardState {
  value: ElementValue[][];
  ships: Record<string, { count: number; selected: number }>;
  finish: boolean;
}

// Define the initial state using that type
const initialState: BoardState = {
  value: Array(ROW_COUNT).fill(
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

      const { ship } = state.value[row][column];

      state.value[row][column].type = ElementStatus.Clicked;

      if (ship) {
        state.ships[ship].selected++;

        const remainCount = Object.keys(state.ships).reduce(
          (sum, key) =>
            sum + state.ships[key].count - state.ships[key].selected,
          0
        );

        if (remainCount === 0) state.finish = true;
      }
    },
    setBoard: (state, action: PayloadAction<BoardState>) => {
      state.ships = action.payload.ships;
      state.value = action.payload.value;
    },
  },
});

export const { userClicked, setBoard } = boardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBoard = (state: RootState) => state.board.value;

export default boardSlice.reducer;
