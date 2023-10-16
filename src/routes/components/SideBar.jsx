import { NavLink, useLocation } from "react-router-dom"

export const SideBar = () => {
  return (
    <>
      <nav className="nav flex-column h-100 flex-1 vh-100 text-start d-md-none d-lg-block">
        <NavLink to="/dashboard" className={"nav-link" + (useLocation().pathname == "/dashboard" ? " disabled shadow-lg bg-white border" : "")}>Dashboard</NavLink>
        <NavLink to="/movie" className={"nav-link" + (useLocation().pathname == "/movie" ? " disabled shadow-lg bg-white border" : "")}>Movies</NavLink>
      </nav>
      <nav className="nav flex-column h-100 flex-1 vh-100 text-start">
        <NavLink to="/dashboard" className={"nav-link" + (useLocation().pathname == "/dashboard" ? " disabled shadow-lg bg-white border" : "")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-black bi bi-window-dock" width="29" height="29" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
            <path d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12ZM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1ZM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2Z" />
          </svg>
        </NavLink>
        <NavLink to="/movie" className={"nav-link" + (useLocation().pathname == "/movie" ? " disabled shadow-lg bg-white border" : "")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-black bi bi-tv" width="29" height="29" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
          </svg>
        </NavLink>
      </nav>
    </>
  )
}
