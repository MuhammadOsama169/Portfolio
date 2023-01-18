import React from 'react'
import ProfileImg from '../assets/profile.png'
import SocialMediaIcons from '../components/SocialMediaIcons'

export const AboutMe = () => {
  return (
    <section id="about" className="flex flex-row">
        <div>
            <img alt='ProfileImage' src={ProfileImg} />
        </div>
        <div className="flex flex-col">
            <p>Muhammad Osama</p>
            <p>Muhammad has 5 years+ of experience writing web apps in trave-related industries. She has extensive knowledge of JavaScript and browser  APIs as well as significant experience with popular frameworks and libraries like React and Redux.</p>
            <SocialMediaIcons/>
        </div>
    </section>
  )
}
