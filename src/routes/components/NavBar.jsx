import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <>
      <nav className="nav flex-column h-100 flex-1 vh-100 text-start">
        <NavLink to="/dashboard"className="nav-link">Dashboard</NavLink>
        <NavLink to="/movie"className="nav-link">Movies</NavLink>
      </nav>
    </>
  )
}
