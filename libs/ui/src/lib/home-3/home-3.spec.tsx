import { render } from '@testing-library/react';

import Home3 from './home-3';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home3 />);
    expect(baseElement).toBeTruthy();
  });

  it.skip('should have a greeting as the title', () => {
    const { getByText } = render(<Home3 />);
    expect(
      getByText(/Jason Ruesch/gi, {
        selector: 'h1',
      }),
    ).toBeTruthy();
  });
});
