import { Link } from "react-router-dom"

export const Pagination = ({ totalPages, page, setPageLink }) => {
  const previousPage = page === 0 ? 0 : page - 1
  const nextPage = page === (totalPages - 1) ? page : page + 1
  const currentPage = page
  const lastPage = totalPages - 1

  return (
    <>
      <nav aria-label="Page navigation" className="bg-light">
        <ul className="pagination justify-content-center align-text-bottom mb-0">
          <li className="page-item">
            <Link
              onClick={() => setPageLink('page=0')}
              to="?page=0"
              className={"d-md-none d-lg-block border-0 bg-light text-dark page-link " + ((page === 0) ? 'disabled' : '')}
              aria-label="Previous"
            >
              <span aria-hidden="true">
                <svg className={page === 0 ? 'gray-200' : ''} id="i-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                  <path d="M8 2 L8 16 22 2 22 30 8 16 8 30" />
                </svg>
              </span>
            </Link>
          </li>
          <li className="page-item">
            <Link
              onClick={() => setPageLink('page=0' + previousPage)}
              to={"?page=" + previousPage}
              className={"border-0 bg-light text-dark page-link " + ((page === 0) ? ' disabled' : '')}
              aria-label="Previous"
            >
              <span aria-hidden="true">
                <svg className={page === 0 ? 'text-gray-200' : ''} id="i-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                  <path d="M22 30 L6 16 22 2 Z" />
                </svg>
              </span>
            </Link>
          </li>
          {
            [...Array(totalPages)].map(
              (e, i) => <li className="page-item" key={i}>
                <Link
                  onClick={() => setPageLink('page=' + (i))}
                  to={"?page=" + i}
                  className={"border-0  text-dark page-link " + ((page === i) ? 'disable bg-primary' : 'bg-light')}
                >
                  {i + 1}
                </Link>
              </li>
            )
          }
          <li className="page-item">
            <Link
              onClick={() => setPageLink('page=' + (nextPage))}
              to={"?page=" + nextPage}
              className={"border-0 bg-light text-dark page-link " + ((page === (totalPages - 1)) ? 'disabled' : '')}
              aria-label="Next"
            >
              <span aria-hidden="true">
                <svg id="i-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                  <path d="M10 30 L26 16 10 2 Z" />
                </svg>
              </span>
            </Link>
          </li>
          <li className="page-item">
            <Link
              onClick={() => setPageLink('page=' + (totalPages - 1))}
              to={"?page=" + lastPage} className={"d-md-none d-lg-block border-0 bg-light text-dark page-link " + ((page === (totalPages - 1)) ? 'disabled' : '')}
              aria-label="Next"
            >
              <span aria-hidden="true">
                <svg id="i-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                  <path d="M24 2 L24 16 10 2 10 30 24 16 24 30" />
                </svg>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
