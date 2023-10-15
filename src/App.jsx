import { Navigate, Route, Routes, Link } from "react-router-dom"
import { NavBar } from "./routes/components/NavBar"
import { MovieScreen } from "./routes/MovieScreen"
import { DashboardScreen } from "./routes/DashboardScreen"
import { MovieProvider } from "./routes/context/MovieProvider"

export const App = () => {
  return (
    <MovieProvider>
      <header data-bs-theme="dark">
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <label>Frontend React Test</label>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container-fluid text-center">
          <div className="row content ">
            <div className="col-sm-2 sidenav bg-light">
              <NavBar />
            </div>
            <div className="col-sm-10 text-left">
              <Routes>
                <Route path='/'></Route>
                <Route path='/dashboard' element={<DashboardScreen />}>Dashboard</Route>
                <Route path='/movie' element={<MovieScreen />} >Movies</Route>
                <Route path='/*' element={<Navigate to='/' />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </MovieProvider>
  )
}
