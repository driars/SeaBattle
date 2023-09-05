import { screen } from '@testing-library/react';
import { Element } from '../../components/element';
import { renderWithProviders } from '../../utils/test-utils';

describe('Element test', () => {
  it('Element Rendering', async () => {
    renderWithProviders(<Element row={0} column={0} />);

    const element = screen.getByTestId('element');
    expect(element.innerHTML).toBe('');
  });
});
