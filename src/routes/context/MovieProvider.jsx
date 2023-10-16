import React, { useEffect, useState } from 'react'
import { MovieContext } from './MovieContext'

export const MovieProvider = ({ children }) => {


  const [movies, setMovies] = useState()
  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] = useState()
  const [studiosWithWinCountTop3, setStudiosWithWinCountTop3] = useState()
  const [maxMinWinIntervalForProducers, setMaxMinWinIntervalForProducers] = useState()
  const [listMovieWinnersByYear, setListMovieWinnersByYear] = useState()
  const [yearFilter, setYearFilter] = useState()
  const [pageLink, setPageLink] = useState()

  return (
    <MovieContext.Provider value={{
      movies,
      yearsWithMultipleWinners,
      studiosWithWinCountTop3,
      maxMinWinIntervalForProducers,
      listMovieWinnersByYear,
      yearFilter,
      pageLink,
      setMovies,
      setYearsWithMultipleWinners,
      setStudiosWithWinCountTop3,
      setMaxMinWinIntervalForProducers,
      setListMovieWinnersByYear,
      setYearFilter,
      setPageLink,
    }}>
      {children}
    </MovieContext.Provider>
  )
}
