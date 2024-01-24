import { render } from '@testing-library/react';

import Home from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Home />);
    expect(
      getByText(/Jason Ruesch/gi, {
        selector: 'h1',
      }),
    ).toBeTruthy();
  });
});
