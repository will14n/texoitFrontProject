import { useContext, useEffect } from "react"
import { MovieContext } from "./context/MovieContext"
import { Pagination } from "../components/Pagination"
import { Card } from "../components/Card"
import { fetchData } from "../helpers/fetchData"
import { useSearchParams } from 'react-router-dom';
import Table from "../components/Table"

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

  useEffect((e) => {
    fetchMovies(pageLink, winnerFilter, movieYearFilter)
  }, [pageLink])
  return (
    <>
      <section className="mt-2 p-3">
        <Card title='List Movies'>
          <Table
            colls={['ID', 'Year', 'Title', 'Winner?']}
            data={movies?.content ? movies.content : []}
            dataConfirm={['id', 'year', 'title', 'winner']}
            tableSize="table-sm text-size-5"
            titleAlign='text-center'
            renderInput={['Year', 'Winner?']}
            fetchData={fetchMovies}
          />
          <Pagination
            setPageLink={setPageLink}
            totalPages={movies?.totalPages}
            page={movies?.number}
          />
        </Card>
      </section>
    </>
  )
}
