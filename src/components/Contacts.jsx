import React from 'react'
import '../css/Contacts.css'
import discord from '../assets/smallerDiscord.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import getintouchPhoto from '../assets/getintouchPhoto.png'
import twitter from '../assets/twitter.png'


function Contacts() {

  return (
    <div id = "contactWrapper">
        
        <div id = "contactTitle">
            <hr id = "contactDivider"/>
            <span>Get In Touch</span>
        </div>

        <div id = "contactContent">
            <img src = {getintouchPhoto} id = "contactPhoto"/>

            <div id = "contactTextWrapper">
                <span>I am always looking for new opportunities.</span>
                
                <span>My inbox is always open, I will reply within 24 hours.</span>

                <div id = "hyperlinks">
                    <a href = "#"><img src = {linkedin} className = "contactHyperLink" /></a>

                    <a href = "#"><img src = {twitter} className = "contactHyperLink" /></a>

                    <a href = "#"><img src = {github} className = "contactHyperLink" /></a>

                    <a href = "#"><img src = {discord} className = "contactHyperLink" /></a>
                </div>
                
                <div id = "btnWrapper">
                    <button className = "contactBtn">Email Me</button>
                    <button className = "contactBtn">Download CV</button>
                </div>

            </div>
        </div>

        <hr />
 
    </div>
  )
}

export default Contacts