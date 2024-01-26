import { render } from '@testing-library/react';

import Home4 from './home-4';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home4 />);
    expect(baseElement).toBeTruthy();
  });

  it.skip('should have a greeting as the title', () => {
    const { getByText } = render(<Home4 />);
    expect(
      getByText(/Jason Ruesch/gi, {
        selector: 'h1',
      }),
    ).toBeTruthy();
  });
});
