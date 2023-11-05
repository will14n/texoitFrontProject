import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Select } from '../Select';

describe('Select Component', () => {
  it('should render select element with the correct initial value', () => {
    render(<Select handleChange={() => { }} />);
    const selectElement = screen.getByText('Yes');
    expect(selectElement).toHaveValue('true');
  });

  it('should render select options correctly', () => {
    render(<Select value="true" handleChange={() => { }} />);
    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('Yes/No');
    expect(options[1]).toHaveTextContent('Yes');
    expect(options[2]).toHaveTextContent('No');
  });
});
