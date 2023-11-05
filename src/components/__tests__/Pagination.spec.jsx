import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from '../Pagination';
import { BrowserRouter } from 'react-router-dom';

const MockBrowserRouter = ({ totalPages, currentPage }) => {
  return (
    <BrowserRouter>
      <Pagination totalPages={totalPages} page={currentPage} setPageLink={jest.fn()} />
    </BrowserRouter>
  )
}

describe('Pagination Component', () => {
  it('should render the current page correctly', () => {
    const totalPages = 5;
    const currentPage = 2;
    render(<MockBrowserRouter totalPages={totalPages} currentPage={currentPage} />);
    const currentPageElement = screen.getByText(currentPage.toString());
    expect(currentPageElement).toBeInTheDocument();
  });

  it('should render the previous button', () => {
    const totalPages = 5;
    const currentPage = 2;
    render(<MockBrowserRouter totalPages={totalPages} currentPage={currentPage} />);

    const previousButton = screen.getAllByLabelText('Previous')[0];
    expect(previousButton).toBeInTheDocument();
  });


  it('should render the next button', () => {
    const totalPages = 7;
    const currentPage = 3;
    render(<MockBrowserRouter totalPages={totalPages} currentPage={currentPage} />);

    const nextButton = screen.getAllByLabelText('Next')[0];
    expect(nextButton).toBeInTheDocument();
  });

  it('should apply the "disabled" class to previous button when on the first page', () => {
    const totalPages = 5;
    let currentPage = 0;
    render(<MockBrowserRouter totalPages={totalPages} currentPage={currentPage} setPageLink={jest.fn()} />);

    const previousButton = screen.getAllByLabelText('Previous')[0];
    expect(previousButton).toHaveClass('disabled');
  });

  it('should apply the "disabled" class to next button when on the last page', () => {

    const totalPages = 5;
    let currentPage = 4;
    render(<MockBrowserRouter totalPages={totalPages} currentPage={currentPage} />);

    const nextButton = screen.getAllByLabelText('Next')[0];
    expect(nextButton).toHaveClass('disabled');
  })

});

