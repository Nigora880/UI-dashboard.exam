import { Route, Routes } from "react-router-dom"
import { Navbar } from "../modules"
import { routeList } from "../components/routeList"

const DashboardRoutes = () => {
  return (
    <div className="containers flex justify-between">
      <Navbar />
      <Routes>{routeList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}</Routes>
    </div>

  )
}

export default DashboardRoutes
