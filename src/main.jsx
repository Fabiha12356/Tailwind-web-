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
import Services from './components/Services.jsx'
import p1 from "./assets/p1.png"
import p2 from "./assets/p2.png"
import p3 from "./assets/p3.png"
import p4 from "./assets/p4.png"
import Testimionals from './components/Testimionals.jsx'
import Footer from './footer.jsx'
import profile1 from "./assets/profile_1.png"
import profile2 from "./assets/profile_2.png"
import profile3 from "./assets/profile_3.png"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbaar />
    <Hero  condition={true} />
    
    <div style={{
      display : "flex",
      flexWrap : "wrap",
      gap : "15px",
      padding : "20px 20px "
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

<div className='Services'>
      <Services  name={"OUR SERVICES"} tittle={"What we  Offer"} para={"We provide a range of services to help you build grow and success online"}/>
      <div style={{
        display : "flex",
         flexWrap : "wrap",
      gap : "15px",
      padding : "15px 15px "
      }}>
        <Cards  name={"Web Development"} para={"Data-driven strategies to grow your online presence."} 
        img={p1}/>
        <Cards name={"UI/UX Design"} para={"Powerful mobile applications for iOS and Android."} 
         img={p2}/>
        <Cards name={"Mobile Apps"} para={"Intuitive interfaces that users love to interact with."} 
         img={p3}/>
        <Cards name={"Digital Marketing"} para={"Custom websites built with modern technologies."}
         img={p4} />
       
      </div>
</div>
<Hero condition={false} />
<div className='Services'>
<Services name={"Testimionals"} tittle={"What Our Client Say"} para={"Real Stories from real people who trust Us"} />
<div className='Testimionals'>
  <Testimionals  tittle={"Business Ownwer"} name={"Sarah Khan"} 
  para={"Nexora transformed our ideas into a stunning website. The team was professional, creative, and delivered exactly what we needed"}
  img={profile1}/>
  <Testimionals  tittle={"Founder,TechSolution"} name={"Ali Raza"} 
  para={"Their attention to detail and modern design exceeded our expectations. Our website looks amazing and works perfectly on every device"}
  img={profile2}/>
  <Testimionals  tittle={"Manager,Growfast"} name={"Ayesha Malik"}
   para={"Working with Nexora was a wonderful experience. They understood our vision and turned it into a beautiful digital experience"}
   img={profile3}/>
</div>
</div>
<Footer />
  </StrictMode>,
)
