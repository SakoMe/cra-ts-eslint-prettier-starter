import { render } from '@testing-library/react';

import { App } from './';

describe('<App /> spec', () => {
  it('renders App', () => {
    const { asFragment } = render(<App />);

    const app = asFragment();
    expect(app).toMatchSnapshot();
  });

  it('renders starter text', () => {
    const { getByText } = render(<App />);

    const title = getByText(/Start here/i);
    expect(title).toBeInTheDocument();
    expect(title.tagName.toLowerCase()).toEqual('h1');
  });
});
