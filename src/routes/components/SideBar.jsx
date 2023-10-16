import { NavLink, useLocation } from "react-router-dom"

export const SideBar = () => {
  return (
    <>
      <nav className="nav flex-column h-100 flex-1 vh-100 text-start">
        <NavLink to="/dashboard" className={"nav-link" + (useLocation().pathname == "/dashboard" ? " disabled" : "")}>Dashboard</NavLink>
        <NavLink to="/movie" className={"nav-link" + (useLocation().pathname == "/movie" ? " disabled" : "")}>Movies</NavLink>
      </nav>
    </>
  )
}
