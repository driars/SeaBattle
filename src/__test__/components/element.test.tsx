import { fireEvent, screen, waitFor } from '@testing-library/react';
import { Element } from '../../components/element';
import { renderWithProviders } from '../../utils/test-utils';

describe('Element test', () => {
  it('Element Rendering', async () => {
    renderWithProviders(<Element row={0} column={0} />);

    const element = screen.getByTestId('element');
    expect(element.innerHTML).toBe('');

    fireEvent.click(element);
    await waitFor(() => {
      expect(screen.findByTestId('element-icon')).toBeDefined();
    });
  });

  it('test element selected', async () => {
    renderWithProviders(<Element row={0} column={0} />);

    const element = screen.getByTestId('element');
    fireEvent.click(element);
    await waitFor(() => {
      expect(
        (screen.getByTestId('element-icon') as HTMLImageElement).src
      ).toContain('selected.svg');
    });
  });

  it('test element failed', async () => {
    renderWithProviders(<Element row={0} column={1} />);

    const element = screen.getByTestId('element');
    fireEvent.click(element);
    await waitFor(() => {
      expect(
        (screen.getByTestId('element-icon') as HTMLImageElement).src
      ).toContain('failed.svg');
    });
  });
});
