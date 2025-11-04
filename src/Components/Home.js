import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Naveen R</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          {/* <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>C++</b> and know a bit of <b>Python</b> and am working on a few 
            projects in the <b>MERN</b> stack.<br />
            I plan to learn <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p> */}
          

          <p>
  I’m a dedicated <b>MERN Stack Developer</b> with <b>1 year of experience</b> in designing and 
  developing responsive web applications, including a <b>6-month internship</b> focused on 
  full-stack development using the MERN stack.<br /><br />

  I specialize in <b>React.js, Node.js, Express.js,</b> and <b>MongoDB</b>, and I’ve built projects 
  such as <b>e-commerce platforms</b> and <b>admin dashboards</b> that emphasize clean design 
  and smooth user experiences.<br /><br />

  {/* When I’m not coding, you’ll probably find me enjoying a good cup of <b>coffee</b> 
  <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} /> ☕ while brainstorming my next idea. */}
</p>


        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home