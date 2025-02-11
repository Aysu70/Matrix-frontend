import React,{ StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from "./footer";
import Reviews from './reviews';
import Navbar from './navbar';
import Carusel from './carusel';
import Services from './services';
import Slider from './service-carusel';
// import './index.css'
// import App from './App.jsx'

class App extends Component{
  render(){
    return(
      <>
      <Navbar/>
      <Carusel/>
      <Services/>
      <Slider/>
      <div className="row-review">
        <div className="coloumn-review">
          <Reviews image="https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-4.jpg" name = "Mark Jco" location = "Los Angela's, USA" time = "04 Days ago" 
          title= "Ana Studios was very logical and creative at the same time"
          detailed = "The client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client’s requirements, providing very."
          />
          <Reviews image ="https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-2.jpg" name = "Johnny Ben" location = "New York, USA" time = "03 Days ago" 
          title= "Exceptional Design and Execution"
          detailed = "The team at Creative Labs exceeded expectations with their innovative designs. Their attention to detail and understanding of user needs made the final product highly functional and visually appealing."
          />
          <Reviews image ="https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-3.jpg" name = "Liam Davis" location = "Toronto, Canada" time = "06 Days ago" 
          title= "Professional and Reliable Service"
          detailed = "TechVerse delivered an exceptional experience, from ideation to execution. The team was very professional and maintained clear communication throughout the project."
          />
          <Reviews image ="https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-1.jpg" name = "Emily Nguyen" location = "Sydney, Australia" time = "02 Days ago" 
          title= "Creative Genius in Action"
          detailed = "PixelPerfect truly lives up to its name. The designers transformed my vague ideas into a masterpiece. I’m incredibly pleased with their creative approach and technical expertise."
          />
          <Reviews image ="https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-5.jpg" name = "James Patel" location = "London, UK" time = "05 Days ago" 
          title= "Seamless and User-Friendly Design"
          detailed = "Design Hub provided exceptional service, delivering a seamless and user-friendly website. Their team demonstrated a strong grasp of our needs and exceeded expectations at every step."
          />
        </div>
      </div>
      <Footer/>
      </>
    )
  }
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
