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
            <p>Muhammad has 1 years+ of experience writing web apps in Startup-related industries. He has extensive knowledge of JavaScript and browser APIs as well as significant experience with popular frameworks and libraries like React and Redux. Muhammad is also skilled in popular CSS frameworks such as Styled Components, Tailwind as well as Material UI.</p>
            <SocialMediaIcons/>
        </div>
    </section>
  )
}
