import React, { useEffect, useState } from 'react'
import { MovieContext } from './MovieContext'

export const MovieProvider = ({ children }) => {


  const [movies, setMovies] = useState()
  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] = useState()
  const [studiosWithWinCountTop3, setStudiosWithWinCountTop3] = useState()
  const [maxMinWinIntervalForProducers, setMaxMinWinIntervalForProducers] = useState()
  const [listMovieWinnersByYear, setListMovieWinnersByYear] = useState()
  const [yearFilter, setYearFilter] = useState()

  return (
    <MovieContext.Provider value={{
      movies,
      yearsWithMultipleWinners,
      studiosWithWinCountTop3,
      maxMinWinIntervalForProducers,
      listMovieWinnersByYear,
      yearFilter,
      setMovies,
      setYearsWithMultipleWinners,
      setStudiosWithWinCountTop3,
      setMaxMinWinIntervalForProducers,
      setListMovieWinnersByYear,
      setYearFilter,
    }}>
      {children}
    </MovieContext.Provider>
  )
}
