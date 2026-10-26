import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbaar from './components/Navbaar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbaar />
  </StrictMode>,
)
