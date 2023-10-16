import { Navigate, Route, Routes, Link } from "react-router-dom"
import { SideBar } from "./routes/components/SideBar"
import { MovieScreen } from "./routes/MovieScreen"
import { DashboardScreen } from "./routes/DashboardScreen"
import { MovieProvider } from "./routes/context/MovieProvider"

export const App = () => {
  return (
    <MovieProvider>
      <header data-bs-theme="dark">
        <div className="navbar navbar-dark bg-dark shadow-sm ps-5">
          <Link to="/" className="navbar-brand d-flex align-items-center pe-auto">
            <label className="pe-auto">Frontend React Test</label>
          </Link>
        </div>
      </header>
      <main>
        <div className="container-fluid text-center">
          <div className="row content ">
            <div className="col-sm-2 border border-right sidebar col-md-2 p-0 bg-body-tertiary">
              <SideBar />
            </div>
            <div className="col-sm-10 col-md-10 text-start">
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
