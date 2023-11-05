import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';
import { MovieProvider } from "../../routes/context/MovieProvider"

const MockProvider = ({ colls, data }) => {
  return (
    <MovieProvider>
      <Table colls={colls} data={data} titleAlign="text-center" rowsAlign="text-right" />
    </MovieProvider>
  )
}

describe('Table Component', () => {
  it('should render table headers correctly', () => {
    const colls = ['Header 1', 'Header 2', 'Header 3'];
    render(<MockProvider colls={colls} />);

    colls.forEach((headerText) => {
      const headerElement = screen.getByText(headerText);
      expect(headerElement).toBeInTheDocument();
    });
  });

  it('should render table rows correctly', () => {
    const colls = ['Header 1', 'Header 2'];
    const data = [
      { Header1: 'Row 1 Value 1', Header2: 'Row 1 Value 2' },
      { Header1: 'Row 2 Value 1', Header2: 'Row 2 Value 2' },
    ];
    render(<MockProvider colls={colls} data={data} />);

    data.forEach((row) => {
      Object.values(row).forEach((cellText) => {
        const cellElement = screen.getByText(cellText);
        expect(cellElement).toBeInTheDocument();
      });
    });
  });

  it('should apply custom title alignment class', () => {
    const colls = ['Header 1', 'Header 2'];
    render(<MockProvider colls={colls} titleAlign="text-center" />);

    const tableElement = screen.getAllByRole('rowgroup')[0];
    expect(tableElement).toHaveClass('text-center');
  });

  it('should apply custom rows alignment class', () => {
    const colls = ['Header 1', 'Header 2'];
    render(<MockProvider colls={colls} rowsAlign="text-right" />);

    const tbodyElement = screen.getAllByRole('rowgroup')[1];
    expect(tbodyElement).toHaveClass('text-right');
  });
});
