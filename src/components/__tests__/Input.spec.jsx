import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input Component', () => {
  it('should render input element with the correct initial value', () => {
    const { container } = render(<Input value="1985" />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveValue('1985');
  });

  it('should render input element with "is-invalid" class when value is out of range', () => {
    const { container } = render(<Input value="2021" handleChange={() => { }} />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveClass('is-invalid');
  });

  it('should render input element without "is-invalid" class when value is within the range', () => {
    const { container } = render(<Input value="1995" handleChange={() => { }} />);
    const inputElement = container.querySelector('input');
    expect(inputElement).not.toHaveClass('is-invalid');
  });

  it('should render the validation error message when value is out of range', () => {
    render(<Input value="2021" handleChange={() => { }} />);
    const validationErrorMessage = screen.getByText('Please choose a year from 1980 - 2019.');
    expect(validationErrorMessage).toBeInTheDocument();
  });
});