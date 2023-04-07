import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProjectYoga from './pages/ProjectYoga';
import ProjectStore from './pages/ProjectStore';
import ContactForm from './components/ContactForm';
import AllProjects from './components/AllProjects';
import ScrollToTop from './components/ScrollToTop';
import ProjectReddit from './pages/ProjectReddit';
import ProjectNotes from './pages/ProjectNotes';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  
  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      })
    }
      window.addEventListener('mousemove', mouseMove)

      return () => {
        window.removeEventListener('mousemove', mouseMove)
      }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 192,
      y: mousePosition.y - 192,
    }
  }

  return (
    <>

    {/* the noisy filter effect */}

    <svg
        className="pointer-events-none fixed isolate z-50 opacity-20 md:opacity-80 lg:opacity-90 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="noiseEffect">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseEffect)"
        ></rect>
      </svg>

      {/* cursor blob effect */}

      <motion.div 
        variants={variants}
        transition={{ type: "tween" }}
        animate='default'
        className='pointer-events-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
         h-96 w-96 rounded-full fixed top-0 left-0  opacity-30 blur-3xl ' />



      <Navbar />
      <ScrollToTop /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<AllProjects />} />
        <Route path='/projectstore' element={<ProjectStore />} />
        <Route path='/projectyoga' element={<ProjectYoga />} />
        <Route path='/projectreddit' element={<ProjectReddit />} />
        <Route path='/projectnotes' element={<ProjectNotes />} />
        <Route path='/contacts' element={<ContactForm />} />      
      </Routes>
      <Footer />
    </>
  )
}

export default App
