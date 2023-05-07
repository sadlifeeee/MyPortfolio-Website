import React from 'react'
import '../css/Projects.css'
import discord from '../assets/discord.png'
import externalLink from '../assets/external_link.png'
import github from '../assets/github.png'
import defaultProject from '../assets/defaultProject.png'


function Projects() {

  return (
    <div id = "projectWrapper">

        <div id = "projectTitle">
            <hr className = "projectDivider" id = "dividerLeft"/>
            <span>Projects</span>
            <hr className = "projectDivider" id = "dividerRight"/>
        </div>

        <div id = "projectContent">
            <div className = "singleProject">
                <div className = "projectPhotos">
                    <img src = {defaultProject} className = "projectBigPhoto" />
                    
                    <div className = "projectHyperLinks">
                        <a href = "#"><img src = {github} className = "projectSmallPhoto" /></a>
                    </div>
                    
                </div>
            
                <span className = "projectName">Discord Bot</span>
                <span className = "projectInfo">A discord music bot</span>
                <span className = "projectLibrary">JavaScript Node.js</span>
            </div>

            <div className = "singleProject">
                <div className = "projectPhotos">
                    <img src = {defaultProject} className = "projectBigPhoto" />
                    <div className = "projectHyperLinks">
                        <a href = "#"><img src = {github} className = "projectSmallPhoto" /></a>
                    </div>
                    
                </div>
            
                <span className = "projectName">Discord Bot</span>
                <span className = "projectInfo">A discord music bot</span>
                <span className = "projectLibrary">JavaScript Node.js</span>
            </div>

            <div className = "singleProject">
                <div className = "projectPhotos">
                    <img src = {defaultProject} className = "projectBigPhoto" />
                    
                    <div className = "projectHyperLinks">
                        <a href = "#"><img src = {github} className = "projectSmallPhoto" /></a>
                    </div>
                    
                </div>
            
                <span className = "projectName">Discord Bot</span>
                <span className = "projectInfo">A discord music bot</span>
                <span className = "projectLibrary">JavaScript Node.js</span>
            </div>

        </div>
        
        <div id = "buttonWrapper">
            <button id = "showMoreBtn">
                <span id = "showMoreText">Show More</span>
            </button>
        </div>
        
 
    </div>
  )
}

export default Projects
