import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const search= render(<App />);
  const linkElement =search.getByText(/world/i);
  expect(linkElement).toBeInTheDocument();
});

test("This is title Area",() =>{
  const renders= render(<App/>);
  const serachElement= renders.getByText(/moiz/i);
  expect(serachElement).toBeInTheDocument();
})

test('Check Placeholder',() =>{
  const check=render(<App/>);
  const findPlaceHolder=check.getByPlaceholderText(/Email/i);
  expect(findPlaceHolder).toBeInTheDocument()
})

test('Check The label',() =>{
  const label=render(<App/>);
  const findLabel=label.getByText(/email/i);
  expect(findLabel).toBeInTheDocument()
})
