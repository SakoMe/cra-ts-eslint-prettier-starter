import { render, screen } from '@testing-library/react';

import App from './App';

test('renders starter text', () => {
  render(<App />);
  const h1Element = screen.getByText(/Start here/i);
  expect(h1Element).toBeInTheDocument();
});
