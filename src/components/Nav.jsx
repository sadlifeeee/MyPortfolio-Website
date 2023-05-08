import React, {useState , useEffect} from 'react'
import '../css/Nav.css'
import logo from '../assets/logo_second.png'
import { useScrollDirection } from '../js/useScrollDirection';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Nav() {

  useEffect(() => {
        AOS.init();
    }, []);

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

        <a role="button" className = "toggle-button" onClick = {toggleNavLinks} data-aos="fade-down" data-aos-once="true" data-aos-delay="200">
          <span className = "bar"></span>
          <span className = "bar"></span>
          <span className = "bar"></span>
        </a>

        <ul className = {hamberg ? 'navLinks' : 'navLinks active'}>
            <li><a href = "#" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">Home</a></li>
            
            <li><a href = "#" data-aos="fade-down" data-aos-once="true" data-aos-delay="400">About</a></li>
            
            <li><a href = "#" data-aos="fade-down" data-aos-once="true" data-aos-delay="500">Contact</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav
