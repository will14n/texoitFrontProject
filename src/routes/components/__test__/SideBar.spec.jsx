import React from 'react';
import { render, fireEvent, screen, mount } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { SideBar } from '../SideBar';
import { App } from '../../../App';

test('renders Dashboard link', () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );

  const dashboardLink = screen.getByText('Dashboard');
  expect(dashboardLink).toBeInTheDocument();
});

test('renders Movies link', () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );

  const moviesLink = screen.getByText('Movies');
  expect(moviesLink).toBeInTheDocument();
});

test('adds "disabled" class to Dashboard link when on dashboard page', () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );

  const dashboardLink = screen.getByText('Dashboard');
  expect(dashboardLink).toHaveClass('disabled');
});

test('adds "disabled" class to Movies link when on movie page', () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText('Movies'), { button: 0 });
  const moviesLink = screen.getByText('Movies');
  expect(moviesLink).toHaveClass('disabled');
});
