import React, {useState} from 'react'
import '../css/Nav.css'
import logo from '../assets/logo_second.png'

function Nav() {

  const [navBar, setNavBar] = useState(false);
  let lastScrollY = window.scrollY;
  
  const removeNavBar = () => {
    
    if(lastScrollY < window.scrollY) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }

    lastScrollY = window.scrollY;
  };

  window.addEventListener('scroll' , removeNavBar);

  return (
    <nav className = {navBar ? 'nav hidden' : 'nav'}>

      <div id = "navWrapper">
        <img src = {logo} id = "navLogo" />

        <ul id = "navLinks">
            <li><a href = "#">Home</a></li>
            
            <li><a href = "#">About</a></li>
            
            <li><a href = "#">Contact</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav
