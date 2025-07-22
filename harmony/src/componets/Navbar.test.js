import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar component renders correctly', () => {
  const { container } = render(<Navbar />);
  expect(container).toBeInTheDocument();
});