import React from 'react'
import '../css/IntroductionPage.css'
import linkedIn from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import github from '../assets/github.png'
import homePhoto from '../assets/homePhoto.png'
import discord from '../assets/smallerDiscord.png'

function IntroductionPage() {

  return (
    <div id = "introPage">

        <div id = "introText">
            <h2 id = "nameTitle">I'm <span id = "nameText">Jerickson Lee</span></h2>

            <h3 id = "nameIntro">I am currently pursuing a Bachelor's Degree in <br/>Computer Science at De La Salle University - Manila</h3>

            <h3 className = "nameQuote">"A passionate individual that loves everything about"<br/>computers.</h3>
            
            <a href = "#" ><img src = {linkedIn} className = "introLogo"/></a>

            <a href = "#" ><img src = {discord} className = "introLogo"/></a>

            <a href = "#" ><img src = {twitter} className = "introLogo"/></a>
            
            <a href = "#" ><img src = {github} className = "introLogo"/></a>

        </div>

        <div id = "introPhoto">
             <img src = {homePhoto} id = "homePhoto"/>
        </div>
        
    </div>
  )
}

export default IntroductionPage
