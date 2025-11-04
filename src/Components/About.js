import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
         
          <p>
  Hi, my name is <b>Naveen</b> and I’m from Madurai ,India. 
  I’m a <b>MERN Stack Web Developer</b> and a <b>B.Sc. Computer Science graduate</b> 
  with hands-on experience in building dynamic and user-friendly web applications.<br /><br />

  I’ve completed a <b>6-month internship</b> as a <b>MERN Stack Developer</b> at Ascox Technosoft Solution Pvt Ltd, 
  where I gained practical experience in full-stack development using 
  <b> React.js, Node.js, Express.js,</b> and <b>MongoDB</b>.<br /><br />

  I love turning creative ideas into clean, functional, and visually appealing digital products. 
  You can explore some of my projects in the Projects section.<br /><br />

  I’m always <b>open</b> to new collaborations, opportunities, and challenges that help me grow as a developer. 
  Feel free to connect with me — all links are in the footer.<br /><br />

  Outside of coding, I enjoy exploring tech, design, and new tools that make development more fun ☕.
</p>

        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About