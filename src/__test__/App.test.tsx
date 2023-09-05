import { renderWithProviders } from '../utils/test-utils';
import { SeaBattle } from '../pages/SeaBattle';

describe('App integration test', () => {
  it('Board Rendering', () => {
    renderWithProviders(<SeaBattle />);
  });
});
