import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Naveen R</b></h1>
          <Typed />
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

          <p>
            I’m a dedicated <b>MERN Stack Developer</b> with <b>1 year of experience</b> in designing and
            developing responsive web applications, including a <b>6-month internship</b> focused on
            full-stack development using the MERN stack.<br /><br />

            I specialize in <b>React.js, Node.js, Express.js,</b> and <b>MongoDB</b>, and I’ve built projects
            such as <b>e-commerce platforms</b> and <b>admin dashboards</b> that emphasize clean design
            and smooth user experiences.<br /><br />
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