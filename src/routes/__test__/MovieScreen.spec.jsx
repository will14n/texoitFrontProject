import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import { MovieProvider } from '../context/MovieProvider';
import { MovieContext } from '../context/MovieContext';
import { MovieScreen } from '../MovieScreen';

describe('MovieProvider', () => {
  it('should provide context values to children', () => {
    const { container } = render(
      <MovieProvider>
        <MemoryRouter initialEntries={["?page=0&winner=true&year="]}>
          <MovieScreen />
        </MemoryRouter>
      </MovieProvider>
    );
    expect(container.querySelector('span')).not.toBeNull();
  });

  it('should provide default values when not set', () => {
    const { container } = render(
      <MovieProvider>
        <MovieContext.Consumer initialEntries={["/movie?page=0&winner=true&year="]}>
          {(context) => {
            return (
              <div>
                <span>{context.movies}</span>
                <span>{context.yearsWithMultipleWinners}</span>
              </div>
            );
          }}
        </MovieContext.Consumer>
      </MovieProvider>
    );

    expect(container.querySelector('span')).not.toBeNull();
    expect(container.querySelector('span').textContent).toBe('');
  });
});
