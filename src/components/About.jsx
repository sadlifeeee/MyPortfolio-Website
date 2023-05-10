import React, { useEffect }from 'react'
import '../css/About.css'
import examplePersonPhoto from '../assets/examplePersonPhoto.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <div id = "aboutWrapper">
          
            <div id = "aboutTitle" data-aos="fade-up" data-aos-once="true">
                <span>About Me</span>
                <hr id = "aboutDivider"/>
            </div>

            <div id = 'aboutContentWrapper' data-aos='fade-up' data-aos-once='true'>
                <div id = "aboutText" data-aos='fade-up' data-aos-once='true'>
                    <p>
                        Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nullam ligula lorem, faucibus dictum ante sed. <br/>
                        Aliquam molestie ligula orci, ac lacinia neque rhoncus a. <br/>
                        Donec in ante justo. Vivamus eros est, <br/>
                        tristique eget magna vel, aliquet ornare turpis. <br/>
                    </p>
                    <span id = "aboutSkillTitle">Here are some technologies that I've worked with as a <span className = "aboutBoldText">CS student:</span></span>

                    <ul id = "aboutSkillList">
                        
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML CSS</li>
                        
                        <li>Java</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>C</li>

                        <li>Android Studio</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>Firebase</li>

                    </ul>
            
                </div>

                <img src = {examplePersonPhoto} id = "aboutPhoto"/>
            </div>
            
        
        </div>
  )
}

export default About
