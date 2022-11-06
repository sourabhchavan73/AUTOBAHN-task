import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

it('should render Header name', async () => {
  render(<Navbar />);
  const headingElement = screen.getByText(/Posts/i);
  expect(headingElement).toBeInTheDocument();
});
