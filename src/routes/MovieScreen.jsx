import { useContext } from "react"
import { MovieContext } from "./context/MovieContext"

export const MovieScreen = () => {
  const { movies } = useContext(MovieContext)
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Year</th>
            <th scope="col">Title</th>
            <th scope="col">Winner?</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {
            movies.content.map((movie) =>
              <tr key={movie.id}>
                {console.log(movie)}
                <th scope="row">{movie.id}</th>
                <td>{movie.year}</td>
                <td>{movie.title}</td>
                <td>{movie.winner ? "Yes" : "No"}</td>
              </tr>
            )
          }

        </tbody>
      </table>
    </>
  )
}
