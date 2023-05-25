import React, { useEffect }from 'react'
import '../css/About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import aboutImage from '../assets/aboutImage.webp'

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
                    <p id = "aboutInfo">
                        <br />
                        Hello, my name is <span className = "aboutBoldText">Jerickson</span> and I am a graduating computer science student 
                        who is about to embark on an exciting journey into the professional world. <br /> <br />
                        I have spent my academic years honing my skills and immersing myself in the ever-evolving world of coding. 
                        Through my comprehensive coursework and hands-on projects, I have gained a solid foundation in <span className = "aboutBoldText">computer 
                        science principles</span>, <span className = "aboutBoldText">algorithms</span>, and <span className = "aboutBoldText">programming languages</span>, all of which have prepared me to excel in the field.<br/>
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

                <img src = {aboutImage} id = "aboutPhoto"/>
            </div>
            
        
        </div>
  )
}

export default About
