import {useEffect, useState } from 'react'
import Cursor from './cursor.jsx'
import Loader from './Loader.jsx'
import Header from './Header.jsx'
import Offcanvas from './Offcanvas.jsx'
import Compose from './Compose.jsx'
import '../../node_modules/aos/dist/aos.css'
import'../../node_modules/animate.css'
import Scroll from './Scroll.jsx'
const App=()=>{
    let body = document.querySelector('BODY');
    let [isloading, setLoader] = useState(true);
    let [theme, setTheme] = useState('');
    let [isVisible, setIsVisible] = useState(false);
    let [currentSection, setCurrentsection] = useState('')
    useEffect(() => {
        if(localStorage.getItem('page-theme')===null){
            localStorage.setItem('page-theme', 'dark')
            setTheme('dark')
        }else if(localStorage.getItem('page-theme')==='dark'){
            setTheme('dark')
        }else if(localStorage.getItem('page-theme')==='light'){
            setTheme('light')
        }
      }, []);
    if(theme==='light'){
        body.classList.add('light-theme')
        localStorage.setItem('page-theme', 'light')
    }else if(theme==='dark'){
        body.classList.remove('light-theme')
        localStorage.setItem('page-theme', 'dark')
    }
    return(
        <>
        {isloading?
        <Loader canceloader={setLoader}/>:
        <>
        <Cursor/>
        <Scroll/>
        <Offcanvas isVisibleMenu={isVisible} setIsVisibleMenu={setIsVisible}/>
        <Header pageTheme={theme} setpageTheme={setTheme} setIsVisibleHeader={setIsVisible}/>
        <Compose setCurrentitem={setCurrentsection} currentitem={currentSection}/>
        </>}
        </>
    )
}

export default App;