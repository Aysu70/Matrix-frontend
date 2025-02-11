import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Header from './companents/Header';
import About from './pages/Aboutus/About';
import Contact from './pages/Contact/Contact';
import Footer from './companents/Footer';
import Notfoundpage from './companents/Notfoundpage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/*' element={<Notfoundpage/>}></Route>
      </Routes>     
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
