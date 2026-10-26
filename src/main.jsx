import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbaar from './components/Navbaar.jsx'
import Hero from './components/Hero.jsx'
import Cards from './components/Cards.jsx'
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbaar />
    <Hero />
    
    <div style={{
      display : "flex",
      flexWrap : "wrap",
      gap : "5px"
    }}>
<Cards  name={"Fast Perfomance"}  para={"Lightning-fast websites optimized for all devices."} 
img={icon1}/>
<Cards  name={"Secure & Reliable"}  para={"Your data and business are protected with modern security."}
img={icon2}  />
<Cards  name={"Fully Responsive"}  para={"Beautiful, user-friendly interfaces that engage visitors."}
img={icon3} />
<Cards  name={"24/7 Support"}  para={"Built to rank higher and drive more organic traffic."}  
img={icon4}/>

    </div>
  </StrictMode>,
)
