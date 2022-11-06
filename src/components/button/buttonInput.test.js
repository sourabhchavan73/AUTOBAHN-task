import { render, screen } from '@testing-library/react';
import ButtonInput from './ButtonInput';

it('should render the add new post button', async () => {
  render(<ButtonInput title='add post' />);
  const headingElement = screen.getByTestId('drawer-handle-button');
  expect(headingElement).toBeInTheDocument();
});
