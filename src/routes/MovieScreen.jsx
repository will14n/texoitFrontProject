import { useContext, useEffect } from "react"
import { MovieContext } from "./context/MovieContext"
import { Pagination } from "../components/Pagination"
import { Card } from "../components/Card"
import { fetchData } from "../helpers/fetchData"
import { useSearchParams } from 'react-router-dom';

export const MovieScreen = () => {
  const {
    movies, setMovies,
    pageLink, setPageLink,
    winnerFilter, setWinnerFilter,
    movieYearFilter, setMovieYearFilter,
  } = useContext(MovieContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchMovies = async (page = 'page=0', winnerFilter = '', movieYearFilter = '') => {
    const pageNumber = page.split('=')
    setSearchParams({ 'page': pageNumber[1], 'winner': winnerFilter, 'year': movieYearFilter })
    const response = await fetchData(`${page}&winner=${winnerFilter}&year=${movieYearFilter}&size=15`)
    setMovies(response)
  }

  const handleYearChange = (year) => {
    setMovieYearFilter(year)
    if ((year > 1979 && year < 2020) || year === '') {
      fetchMovies('page=0', winnerFilter, year)
    }
  }
  const handleWinnerChange = (winner) => {
    setWinnerFilter(winner)
    // if((year > 1979 && year < 2020) || year === '') {
    fetchMovies('page=0', winner, movieYearFilter)
    // }
  }
  useEffect((e) => {
    fetchMovies(pageLink, winnerFilter, movieYearFilter)
  }, [pageLink])
  return (
    <>
      <section className="mt-2 p-3">
        <Card title='List Movies'>
          <table className="table mb-0 bg-light table-sm text-size-5">
            <thead className="text-center bg-light">
              <tr className="bg-light col-sm-12">
                <th className="">ID</th>
                <th scope="col" >
                  <div className="">
                    Year
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm w-100px"
                    name="movieYearFilter"
                    value={movieYearFilter || ''}
                    min="0"
                    onChange={(e) => handleYearChange(e.target.value)}
                    placeholder="Filter by year"
                  />
                </th>
                <th scope="col">Title</th>
                <th scope="col">
                  <div>
                    Winner?
                  </div>
                  <select className="form-select form-select-sm w-100px" name="winnerFilter" onChange={(e) => handleWinnerChange(e.target.value)}>
                    <option value=''>Yes/No</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody className="table-group-divider text-start">
              {
                movies &&
                movies.content.map((movie) =>
                  <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.year}</td>
                    <td>{movie.title}</td>
                    <td>{movie.winner ? "Yes" : "No"}</td>
                  </tr>
                )
              }
              <tr>
                <td colSpan={4} className="p-0">
                  {
                    movies &&
                    <Pagination
                      setPageLink={setPageLink}
                      totalPages={movies.totalPages}
                      page={movies.number}
                    />
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </>
  )
}
