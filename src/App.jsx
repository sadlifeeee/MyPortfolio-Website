import React from 'react'
import './css/App.css'
import Nav from './components/Nav'
import IntroductionPage from './components/IntroductionPage'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav />
      
      <IntroductionPage />
      
      <Projects />

      <Contacts />

      <Footer />
    </>
  )
}

export default App
