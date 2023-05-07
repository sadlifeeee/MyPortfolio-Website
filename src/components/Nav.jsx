import React, {useState} from 'react'
import '../css/Nav.css'
import logo from '../assets/logo_second.png'
import { useScrollDirection } from '../js/useScrollDirection';

function Nav() {

  const [navBar, setNavBar] = useState(false);
  const [hamberg, setHamberg] = useState(false);
  let lastScrollY = window.scrollY;
  const scrollDirection = useScrollDirection();

  const removeNavBar = () => {
    
    if(scrollDirection === "down") {
      setNavBar(true);
    } else {
      setNavBar(false);
    } 


    lastScrollY = window.scrollY;
  };

  const toggleNavLinks = () => {
    setHamberg(!hamberg)
  }

  window.addEventListener('scroll' , removeNavBar);

  return (
    <nav className = {navBar ? 'nav hidden' : 'nav'}>

      <div id = "navWrapper">
        <img src = {logo} id = "navLogo" />

        <a href="javascript:void(0)" role="button" class = "toggle-button" onClick = {toggleNavLinks}>
          <span class = "bar"></span>
          <span class = "bar"></span>
          <span class = "bar"></span>
        </a>

        <ul className = {hamberg ? 'navLinks' : 'navLinks active'}>
            <li><a href = "#">Home</a></li>
            
            <li><a href = "#">About</a></li>
            
            <li><a href = "#">Contact</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav
