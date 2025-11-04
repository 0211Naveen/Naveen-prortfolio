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
          {/* <p>
            Hi, my name is <b>Devansh Sahni</b> and I am from New Delhi, India.
            I'm a <b>MERN stack web developer</b> and a final year college student pursuing <b>BTech in CSE</b>. <br/><br/>
            I have done an internship as a <b>software developer</b> at GoalFi which is a fintech startup.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do photography, you can check out some of my shots here <a href="https://www.instagram.com/devansh_sahni_/?hl=en" target='_blank'>Instagram.</a>
          </p> */}
          <p>
  Hi, my name is <b>Naveen</b> and I’m from India. 
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
        {/* <Skills skill='C++' /> */}
        <Skills skill='Postman' />
        {/* <Skills skill='Figma' /> */}
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About