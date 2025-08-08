import { useCookies } from 'react-cookie'
import LoginRoutes from './routes/LoginRoutes'
import DashboardRoutes from './routes/DashboardRoutes';

const App = () => {
  const [cookies] = useCookies(['token']);
return cookies.token ? <DashboardRoutes/> : <LoginRoutes/>
}

export default App
