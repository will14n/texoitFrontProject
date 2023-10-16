import { useContext, useEffect, useState } from "react"
import { MovieContext } from "./context/MovieContext"
import { Pagination } from "../components/Pagination"
import { Card } from "../components/Card"
import { fetchData } from "../helpers/fetchData"

export const MovieScreen = () => {
  const {
    movies, setMovies,
    pageLink, setPageLink,
    winnerFilter, setWinnerFilter,
    movieYearFilter, setMovieYearFilter,
  } = useContext(MovieContext)
  const fetchMovies = async (page = 'page=0', winnerFilter = '', movieYearFilter = '') => {
    const response = await fetchData(`${page}${winnerFilter}&year=${(movieYearFilter > 0 ? movieYearFilter : '')}&size=15`)
    setMovies(response)
  }

  useEffect(() => {
    fetchMovies(pageLink, winnerFilter, movieYearFilter)
  }, [pageLink, winnerFilter, movieYearFilter])

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
                    value={movieYearFilter}
                    min="0"
                    onChange={(e) => setMovieYearFilter(e.target.value)}
                    onKeyUp={(text) => text.target.value > 0 ? text.target.value > 2023 ? text.target.value = '2023' : text.target.value : text.target.value = ''}
                    placeholder="Filter by year"
                  />
                </th>
                <th scope="col">Title</th>
                <th scope="col">
                  <div>
                    Winner?
                  </div>
                  <select className="form-select form-select-sm w-100px" name="winnerFilter" onChange={(e) => setWinnerFilter('&winner=' + e.target.value)}>
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
