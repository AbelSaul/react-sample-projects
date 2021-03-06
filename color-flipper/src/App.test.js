import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Change Color', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Change Color/i);
  expect(linkElement).toBeInTheDocument();
});
