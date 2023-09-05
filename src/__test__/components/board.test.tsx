import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import { Board } from '../../components/board';
import { COLUMN_COUNT, ROW_COUNT } from '../../constants';

describe('Board test', () => {
  it('Board Rendering', async () => {
    renderWithProviders(<Board />);
  });

  it('all elements rendered', async () => {
    renderWithProviders(<Board />);

    const element = screen.getByTestId('board');
    expect(element.children.length).toBe(ROW_COUNT);

    for (let i = 0; i < ROW_COUNT; i++) {
      expect(element.children[i].children.length).toBe(COLUMN_COUNT);
    }
  });
});
