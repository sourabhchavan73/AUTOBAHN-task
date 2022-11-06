import { render, screen, fireEvent } from '@testing-library/react';
import AddPostDrawer from './AddPostDrawer';

it('shoudld render drawer header', () => {
  render(<AddPostDrawer />);
  const headingElement = screen.getByText(/Add New Post/i);
  expect(headingElement).toBeInTheDocument();
});

it('shoudld render title input box', () => {
  render(<AddPostDrawer />);
  const headingElement = screen.getByTestId('form-title-input');
  expect(headingElement).toBeInTheDocument();
});

test('should be able to type in title input', () => {
  render(<AddPostDrawer />);
  const inputElement = screen.getByTestId('form-title-input');
  fireEvent.change(inputElement, { target: { value: 'test title' } });
  expect(inputElement.value).toBe('test title');
});

it('shoudld render description input box', () => {
  render(<AddPostDrawer />);
  const headingElement = screen.getByTestId('form-description-input');
  expect(headingElement).toBeInTheDocument();
});

test('should be able to type in description input', () => {
  render(<AddPostDrawer />);
  const inputElement = screen.getByTestId('form-description-input');
  fireEvent.change(inputElement, { target: { value: 'test description' } });
  expect(inputElement.value).toBe('test description');
});

it('shoudld render add post button', () => {
  render(<AddPostDrawer />);
  const buttonElement = screen.getByText('Add Post');
  expect(buttonElement).toBeInTheDocument();
});
