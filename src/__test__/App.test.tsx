import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import { SeaBattle } from '../pages/SeaBattle';
import ships from '../constants/ships.json';

const getElement = (board: HTMLElement, row: number, column: number) =>
  board.children[row].children[column];

describe('Integration test', () => {
  it('SeaBattle Rendering', async () => {
    renderWithProviders(<SeaBattle />);
  });

  it('test ship color changed when all elements of the ship is clicked', async () => {
    renderWithProviders(<SeaBattle />);

    const board = screen.getByTestId('board');

    const ship = ships.board[0];
    ship.positions.forEach(([row, column]) => {
      fireEvent.click(getElement(board, row, column));
    });

    await waitFor(() => {
      const element = getElement(
        board,
        ship.positions[0][0],
        ship.positions[0][1]
      );

      expect(element.classList.contains('destroyed')).toBe(true);
    });
  });

  it('test game over after all ships are destroyed', async () => {
    renderWithProviders(<SeaBattle />);

    const board = screen.getByTestId('board');

    ships.board.forEach((ship) =>
      ship.positions.forEach(([row, column]) => {
        fireEvent.click(getElement(board, row, column));
      })
    );

    await waitFor(() => {
      expect(screen.getByTestId('gameover')).toBeDefined();
    });
  });
});
