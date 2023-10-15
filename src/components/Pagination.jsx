import { Link } from "react-router-dom"

export const Pagination = ({totalPages, page}) => {
  const previousPage = page === 0 ? 0 : page - 1
  const nextPage = page === (totalPages - 1) ? page : page + 1
  const lastPage = totalPages - 1
  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link to="?page=0" className="page-link" aria-label="Previous">
              <span aria-hidden="true">First</span>
            </Link>
          </li>
          <li className="page-item">
            <Link to={"?page=" + previousPage} className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          {
            [...Array(totalPages)].map(
              (e, i) => <li className="page-item"><Link to={"?page=" + i} className="page-link" key={i}>{i + 1}</Link></li>
            )
          }
          <li className="page-item">
            <Link to={"?page=" + nextPage} className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
          <li className="page-item">
            <Link to={"?page=" + lastPage} className="page-link" aria-label="Next">
              <span aria-hidden="true">Last</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
