import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbaar from './components/Navbaar.jsx'
import Hero from './components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbaar />
    <Hero />
  </StrictMode>,
)
