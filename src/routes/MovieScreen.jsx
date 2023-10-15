import { useContext } from "react"
import { MovieContext } from "./context/MovieContext"
import { Pagination } from "../components/Pagination"

export const MovieScreen = () => {
  const  {movies} = useContext(MovieContext)
  // const {data: movies.content} = movies
// console.log(totalPages)

return (
  <>
    <table className="table table-striped">
      <thead className="table-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">
            Year
            <input
              type="text"
              className="form-control"
              id="year"
              min="0"
              placeholder="Filter by year"
            />
          </th>
          <th scope="col">Title</th>
          <th scope="col">
            Winner?
            <select className="form-select" id="winner">
              <option selected>Yes/No</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {
          movies.content.map((movie) =>
            <tr key={movie.id}>
              <th >{movie.id}</th>
              <td>{movie.year}</td>
              <td>{movie.title}</td>
              <td>{movie.winner ? "Yes" : "No"}</td>
            </tr>
          )
        }
      </tbody>
    </table>
    <Pagination
      totalPages={movies.totalPages}
      page={movies.number}
    />
  </>
)
}
