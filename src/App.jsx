import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./routes/components/NavBar"
import { MovieScreen } from "./routes/MovieScreen"
import { DashboardScreen } from "./routes/DashboardScreen"

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'></Route>
        <Route path='/dashboard' element={<DashboardScreen />}>Dashboard</Route>
        <Route path='/movie' element={<MovieScreen />} >Movies</Route>
        <Route path='/*' element={<Navigate to='/' />}></Route>
      </Routes>
    </>
  )
}
