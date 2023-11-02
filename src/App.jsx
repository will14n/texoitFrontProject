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
            <label className="pe-auto">Frontend React</label>
          </Link>
        </div>
      </header>
      <main>
        <div className="container-fluid text-center">
          <div className="row content ">
            <div className=" border border-right sidebar col-md-1 col-lg-2 p-0 bg-body-tertiary">
              <SideBar />
            </div>
            <div className="col-md-11 col-lg-10 text-start overflow-auto vh-100">
              <Routes>
                <Route path='/' element={<DashboardScreen />}></Route>
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
