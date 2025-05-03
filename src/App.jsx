import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Facilities from './pages/Facilities.jsx'
import Gallery from './pages/Gallery.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <div className='font-ramaraja'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/facilities' element={<Facilities/>} />
          <Route path='/gallery' element={<Gallery/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
      </>
  )
}

export default App
