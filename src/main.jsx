import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContext } from './context/Context.jsx'
import { CookiesProvider } from 'react-cookie'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CookiesProvider>
     <GlobalContext>
      <App />
    </GlobalContext>
  </CookiesProvider>
  </BrowserRouter>,
)