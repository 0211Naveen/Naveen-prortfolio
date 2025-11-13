import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {


    // TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    // TindogGithub : "https://github.com/DevanshSahni/tindog",
    // TindogWebsite : "https://devanshsahni.github.io/tindog/",

    // RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    // RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
    // RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    // NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    // NewsletterGithub:"",
    // NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    AntiqueDesc:"Built a simple Antique Product Selling Website with an Admin Panel for managing products and orders.",
    AntiqueGithub:"https://github.com/0211Naveen/E-com.git",
    AntiqueWebsite:"https://e-com-olive-rho.vercel.app/",


    MessageDesc:"Message App is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to send and store messages in real time.It demonstrates secure backend integration with MongoDB Atlas, smooth frontend-to-backend communication using REST APIs, and modern deployment workflows using Vercel.",
    MessageGithub:"https://github.com/0211Naveen/message-app.git",
    MessageWebsite:"https://message-app-client-wine.vercel.app/",


  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox