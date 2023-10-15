import { Link } from "react-router-dom"

export const Pagination = ({totalPages, page}) => {
  const previousPage = page === 0 ? 0 : page - 1
  const nextPage = page === (totalPages - 1) ? page : page + 1
  const currentPage = page
  const lastPage = totalPages - 1
  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link to="?page=0" className={"page-link " + ((page === 0) ? 'disabled' : '')} aria-label="Previous">
              <span aria-hidden="true">First</span>
            </Link>
          </li>
          <li className="page-item">
            <Link to={"?page=" + previousPage} className={"page-link " + ((page === 0) ? 'disabled' : '')} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          {
            [...Array(totalPages)].map(
              (e, i) => <li className="page-item" key={i}><Link  to={"?page=" + i} className={"page-link " + ((page === i) ? 'active disable' : '')}>{i + 1}</Link></li>
            )
          }
          <li className="page-item">
            <Link to={"?page=" + nextPage} className={"page-link " + ((page === (totalPages - 1)) ? 'disabled' : '')} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
          <li className="page-item">
            <Link to={"?page=" + lastPage} className={"page-link " + ((page === (totalPages - 1)) ? 'disabled' : '')} aria-label="Next">
              <span aria-hidden="true">Last</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
