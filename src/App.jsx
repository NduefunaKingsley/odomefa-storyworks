import  { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'  
import Homepage from './components/pages/Homepage';
import Servicepage from './components/pages/Servicepage';
import Genrepage from './components/pages/Genrepage';
import CaseStudiespage from './components/pages/CaseStudiespage';
import Testiminialspage from './components/pages/Testiminialspage';
import Footer from './Footer';


export default function App() {
  return (
    <Router>
      <nav className='navbar'>
        <div className='logo'>
          <Link to='/'><img src='../src/assets/image/Screenshot 2025-01-15 205633.png' width='120px' height='70px'  /></Link>
        </div>
        <div className='navlinks'>
          <ul>
            <ol><Link to='/service' className='link'>Services</Link></ol>
            <ol><Link to='/genres' className='link'>Genres</Link></ol>
            <ol><Link to='/casestudies' className='link'>Case Studies</Link></ol>
            <ol><Link to='/testimonials' className='link'>Testimonials</Link></ol>
          </ul>
        </div>
        <div className='nav-btn'>
          <Link to='/service' className='btn-link'><button className='btn1 btn'>Contact Us </button></Link>
          <Link to='#' className='btn-link'><button className='btn2 btn'>Get Started</button></Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/service' element={<Servicepage />} />
        <Route path='/genres' element={<Genrepage />} /> 
        <Route path='/casestudies' element={<CaseStudiespage />} />
        <Route path='/testimonials' element={<Testiminialspage />} />
      </Routes>
      <Footer />

    </Router>
  )
}
