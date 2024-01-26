import { render } from '@testing-library/react';

import Home2 from './home-2';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home2 />);
    expect(baseElement).toBeTruthy();
  });

  it.skip('should have a greeting as the title', () => {
    const { getByText } = render(<Home2 />);
    expect(
      getByText(/Jason Ruesch/gi, {
        selector: 'h1',
      }),
    ).toBeTruthy();
  });
});
