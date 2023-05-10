import React ,{useEffect} from 'react'
import './css/App.css'
import Nav from './components/Nav'
import IntroductionPage from './components/IntroductionPage'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    
  return (
    <>
      <Nav />
      
      <IntroductionPage />

      <About />
      
      <Projects />

      <Contacts />

      <Footer />
    </>
  )
}

export default App
