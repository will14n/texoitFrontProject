import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <>
      <nav className="nav flex-column">
        <NavLink to="/"className="nav-link active" aria-current="page" href="#">Active</NavLink>
        <NavLink to="/dashboard"className="nav-link">Dashboard</NavLink>
        <NavLink to="/movie"className="nav-link">Movies</NavLink>
      </nav>
    </>
  )
}
