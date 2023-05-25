import React, { useEffect }from 'react'
import '../css/Contacts.css'
import discord from '../assets/smallerDiscord.webp'
import linkedin from '../assets/linkedin.webp'
import github from '../assets/github.webp'
import getintouchPhoto from '../assets/getintouchPhoto.webp'
import twitter from '../assets/twitter.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contacts() {

    useEffect(() => {
        AOS.init({duration: 500});
    }, []);

    return (
      <div id = "contactWrapper">
          
          <div id = "contactTitle" data-aos="fade-up" data-aos-once="true">
              <hr id = "contactDivider"/>
              <span>Get In Touch</span>
          </div>
    
          <div id = "contactContent" data-aos="fade-up" data-aos-once="true">
              <img src = {getintouchPhoto} id = "contactPhoto"/>
    
              <div id = "contactTextWrapper">
                  <span>I am always looking for new opportunities.</span>
                  
                  <span>My inbox is always open, I will reply within 24 hours.</span>
    
                  <div id = "hyperlinks">
                      <a href = "https://www.linkedin.com/in/jerickson-lee-3b0069235/" target="_blank" rel="noopener noreferrer"><img src = {linkedin} className = "contactHyperLink linkedin" /></a>
    
                      <a href = "https://discordapp.com/users/453485970151702539" target="_blank" rel="noopener noreferrer"><img src = {discord} className = "contactHyperLink discord" /></a>
    
                      <a href = "#" target="_blank" rel="noopener noreferrer" hidden><img src = {twitter} className = "contactHyperLink twitter" /></a>
    
                      <a href = "https://github.com/sadlifeeee" target="_blank" rel="noopener noreferrer"><img src = {github} className = "contactHyperLink github" /></a>
                  </div>
                  
                  <div id = "btnWrapper">
                      <button className = "contactBtn">
                        <a className = "contactBtnText" href = "mailto:jericksonlee10@gmail.com">Email Me</a>
                      </button>

                      <button className = "contactBtn">
                        <a className = "contactBtnText">Download CV</a>
                      </button>
                  </div>
    
              </div>
          </div>
    
          <hr />
    
      </div>
  )
}

export default Contacts
