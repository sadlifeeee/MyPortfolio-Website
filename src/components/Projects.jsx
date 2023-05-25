import React, {useState , useEffect} from 'react'
import '../css/Projects.css'
import discord from '../assets/discord.png'
import externalLink from '../assets/external_link.png'
import github from '../assets/github.png'
import defaultProject from '../assets/defaultProject.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {

    useEffect(() => {
        AOS.init({duration: 500});
    }, []);


    const [showMoreText, setShowMoreText] = useState('Show More');
    const [showMore, setShowMore] = useState(false);

    const toggleMore = () => {
        if(showMoreText === "Show More") {
            setShowMore(true)
            setShowMoreText('Show Less');
        } else {
            setShowMoreText("Show More");
            setShowMore(false)
        }
    }

    return (
      <div id = "projectWrapper">

          <div id = "projectTitle" data-aos="fade-up" data-aos-once="true">
              <hr className = "projectDivider" id = "dividerLeft"/>
              <span>Projects</span>
              <hr className = "projectDivider" id = "dividerRight"/>
          </div>

          <div id = "projectContent">

            <div className = "card">
                <div className = "singleProject" data-aos="fade-up" data-aos-once="true">
                  <div className = "projectPhotos">
                      <img src = {defaultProject} className = "projectBigPhoto" />

                      <div className = "projectHyperLinks">
                          <a href = "https://github.com/sadlifeeee/Boom-Box" target="_blank" rel="noopener noreferrer"><img src = {github} className = "projectSmallPhoto github" /></a>
                          <a href = "https://discord.com/api/oauth2/authorize?client_id=890246640890445844&permissions=8&scope=bot" target="_blank" rel="noopener noreferrer"><img src = {externalLink} className = "projectSmallPhoto externalLink" /></a>
                      </div>

                  </div>

                  <span className = "projectName">Boom-Box</span>
                  <span className = "projectInfo">A discord music bot that could help you play your favorite music from Youtube and Spotify on discord</span>
                  <span className = "projectLibrary">Node.js Discord.js JS</span>
              </div>
            </div>
              
            <div className = "card">
                <div className = "singleProject" data-aos="fade-up" data-aos-once="true">
                  <div className = "projectPhotos" >
                      <img src = {defaultProject} className = "projectBigPhoto" />
                      <div className = "projectHyperLinks">
                          <a href = "https://github.com/sadlifeeee/MyPortfolio-Website" target="_blank" rel="noopener noreferrer"><img src = {github} className = "projectSmallPhoto github" /></a>
                          <a href = "https://jericksonlee.netlify.app/" target="_blank" rel="noopener noreferrer"><img src = {externalLink} className = "projectSmallPhoto externalLink" /></a>
                      </div>

                  </div>

                  <span className = "projectName">This.Portfolio</span>
                  <span className = "projectInfo">My Portfolio Website</span>
                  <span className = "projectLibrary">Vite  React  JS  HTML CSS</span>
              </div>
            </div>
              
            <div className = "card">
                <div className = "singleProject" data-aos="fade-up" data-aos-once="true">
                  <div className = "projectPhotos">
                      <img src = {defaultProject} className = "projectBigPhoto" />

                      <div className = "projectHyperLinks">
                          <a href = "https://github.com/sadlifeeee/Eco_Round" target="_blank" rel="noopener noreferrer"><img src = {github} className = "projectSmallPhoto github" /></a>
                      </div>

                  </div>

                  <span className = "projectName">Eco Round</span>
                  <span className = "projectInfo">An android app that could help you keep track of your daily expenses</span>
                  <span className = "projectLibrary">Android Studio Java</span>
              </div>
            </div>
              
            <div className = "card">
                <div className = "singleProject" data-aos="fade-up" data-aos-once="true">
                  <div className = "projectPhotos">
                      <img src = {defaultProject} className = "projectBigPhoto" />

                      <div className = "projectHyperLinks">
                          <a href = "https://github.com/sadlifeeee/Eco_Round" target="_blank" rel="noopener noreferrer"><img src = {github} className = "projectSmallPhoto github" /></a>
                      </div>

                  </div>

                  <span className = "projectName">Eco Round</span>
                  <span className = "projectInfo">An android app that could help you keep track of your daily expenses</span>
                  <span className = "projectLibrary">Android Studio Java</span>
              </div>
            </div>
              
            <div className = "card">
                <div className = "singleProject" data-aos="fade-up" data-aos-once="true">
                  <div className = "projectPhotos">
                      <img src = {defaultProject} className = "projectBigPhoto" />

                      <div className = "projectHyperLinks">
                          <a href = "https://github.com/sadlifeeee/Eco_Round" target="_blank" rel="noopener noreferrer"><img src = {github} className = "projectSmallPhoto github" /></a>
                      </div>

                  </div>

                  <span className = "projectName">Eco Round</span>
                  <span className = "projectInfo">An android app that could help you keep track of your daily expenses</span>
                  <span className = "projectLibrary">Android Studio Java</span>
              </div>
            </div>
              
            <div className = "card">
                <div className = "singleProject" data-aos="fade-up" data-aos-once="true">
                  <div className = "projectPhotos">
                      <img src = {defaultProject} className = "projectBigPhoto" />

                      <div className = "projectHyperLinks">
                          <a href = "https://github.com/sadlifeeee/Eco_Round" target="_blank" rel="noopener noreferrer"><img src = {github} className = "projectSmallPhoto github" /></a>
                      </div>

                  </div>

                  <span className = "projectName">Eco Round</span>
                  <span className = "projectInfo">An android app that could help you keep track of your daily expenses</span>
                  <span className = "projectLibrary">Android Studio Java</span>
              </div>
            </div>
              
            <div className = "card">
                <div className = {showMore ? 'animated fadeInUp singleProject' : 'singleProject hideProject'}>
                  <div className = "projectPhotos">
                      <img src = {defaultProject} className = "projectBigPhoto" />

                      <div className = "projectHyperLinks">
                          <a href = "https://github.com/sadlifeeee/Eco_Round" target="_blank" rel="noopener noreferrer"><img src = {github} className = "projectSmallPhoto github" /></a>
                      </div>

                  </div>

                  <span className = "projectName">Eco Round</span>
                  <span className = "projectInfo">An android app that could help you keep track of your daily expenses</span>
                  <span className = "projectLibrary">Android Studio Java</span>
              </div>
            </div>
              
          </div>

          <div id = "buttonWrapper" data-aos="fade-up" data-aos-once="true">
              <button id = "showMoreBtn" onClick = {toggleMore}>
                  <span className = "showMoreText">{showMoreText}</span>
              </button>
          </div>

    
      </div>
  )
}

export default Projects
