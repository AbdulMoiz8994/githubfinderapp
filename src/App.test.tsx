import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const search= render(<App />);
  const linkElement =search.getAllByRole('div')
  expect(linkElement).toBeInTheDocument();
});
