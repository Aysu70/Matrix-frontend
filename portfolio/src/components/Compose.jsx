import Left from './Left.jsx'
import Home from './Home.jsx'
import About from './AboutUs.jsx'
import Services from './Services.jsx'
import Skills from './Skills.jsx'
import Portfolio from './Portfolio.jsx'
import Testimonail from './Testimonial.jsx'
import Blog from './Blog.jsx'
import Contact from './Contact.jsx'
import { useEffect } from 'react'

const Compose=({currentitem, setCurrentitem})=>{
    useEffect(()=>{
        const handlescroll=()=>{
            const sections = document.querySelectorAll('.section');
            console.log(sections);      
            let current = '';
            sections.forEach((item)=>{
                const itemTop = item.offsetTop;
                const itemHeight = item.offsetHeight;
                if(window.scrollY>=itemTop-itemHeight/3){
                    current = item.getAttribute("id")
                }
            })
            setCurrentitem(current);
        }
        window.addEventListener("scroll", handlescroll);
        return () => window.removeEventListener("scroll", handlescroll);
    }, [])
    return(
        <div className='main'>
            <Left currentId={currentitem} className='left-sidebar'/>
            <div className="right-contents">
                <Home id="list-item1" className='home section'/><br /><br /><br />
                <About id="list-item2" className='about section'/><br /><br />
                <Services id="list-item3" className='services section'/><br /><br />
                <Skills id="list-item4" className='skills section'/><br /><br />
                <Portfolio id="list-item5" className='portfolio section'/><br /><br />
                <Testimonail id="list-item6" className='testimonail section'/><br /><br />
                <Blog id="list-item7" className='blog section'/><br /><br />
                <Contact id="list-item8" className='contact section'/><br />
            </div>
        </div>
    )
}

export default Compose;