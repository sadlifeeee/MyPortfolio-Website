import React, {useEffect} from 'react'
import '../css/IntroductionPage.css'
import linkedIn from '../assets/linkedin.webp'
import twitter from '../assets/twitter.webp'
import github from '../assets/github.webp'
import homePhoto from '../assets/homePhoto.webp'
import discord from '../assets/smallerDiscord.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

function IntroductionPage() {
  useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div id = "introPage">

        <div id = "introText">
            <h2 id = "nameTitle" data-aos="fade-down" data-aos-once="true" data-aos-delay="700">I'm <span id = "nameText">Jerickson Lee</span></h2>

            <h3 id = "nameIntro" data-aos="fade-down" data-aos-once="true" data-aos-delay="700">I am currently pursuing a Bachelor's Degree in <br/>Computer Science at De La Salle University - Manila</h3>

            <h3 className = "nameQuote" data-aos="fade-down" data-aos-once="true" data-aos-delay="800">"A passionate individual that loves everything about"<br/>computers.</h3>
            
            <a href = "https://www.linkedin.com/in/jerickson-lee-3b0069235/" target="_blank" rel="noopener noreferrer" data-aos="fade-down" data-aos-once="true" data-aos-delay="900"><img src = {linkedIn} className = "introLogo linkedin"/></a>

            <a href = "https://discordapp.com/users/453485970151702539" target="_blank" rel="noopener noreferrer" data-aos="fade-down" data-aos-once="true" data-aos-delay="900"><img src = {discord} className = "introLogo discord"/></a>

            <a href = "#" target="_blank" rel="noopener noreferrer" data-aos="fade-down" data-aos-once="true" data-aos-delay="900" hidden><img src = {twitter} className = "introLogo twitter"/></a>
            
            <a href = "https://github.com/sadlifeeee" target="_blank" rel="noopener noreferrer" data-aos="fade-down" data-aos-once="true" data-aos-delay="900"><img src = {github} className = "introLogo github"/></a>

        </div>

        <div id = "introPhoto" data-aos="fade-down" data-aos-once="true" data-aos-delay="1200">
             <img src = {homePhoto} id = "homePhoto"/>
        </div>
        
    </div>
  )
}

export default IntroductionPage
