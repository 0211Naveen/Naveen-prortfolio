// import React from 'react';
// import {FaGithub} from "react-icons/fa";
// import {CgFileDocument} from "react-icons/cg";


// const  ProjectBox = ({projectPhoto, projectName}) => {
//   const desc = {


//     AntiqueDesc:"Built a simple Antique Product Selling Website with an Admin Panel for managing products and orders.",
//     AntiqueGithub:"https://github.com/0211Naveen/E-com.git",
//     AntiqueWebsite:"https://e-com-olive-rho.vercel.app/",


//     MessageDesc:"Message App is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to send and store messages in real time.It demonstrates secure backend integration with MongoDB Atlas, smooth frontend-to-backend communication using REST APIs, and modern deployment workflows using Vercel.",
//     MessageGithub:"https://github.com/0211Naveen/message-app.git",
//     MessageWebsite:"https://message-app-client-wine.vercel.app/",


//   }

//   let show ='';
//   if(desc[projectName + 'Github']===""){
//     show="none";
//   }
    
//   return (
//     <div className='projectBox'> 
//         <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
//         <div>
//             <br />
//             <h3>{projectName}</h3>
//             <br />
//             {desc[projectName + 'Desc']}
//             <br />

//             <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
//               <button className='projectbtn'><FaGithub/> Github</button>
//             </a>

//             <a href={desc[projectName + 'Website']} target='_blank'>
//               <button className='projectbtn'><CgFileDocument/> Demo</button>
//             </a>
//         </div>
//     </div>
//   )
// }

// export default  ProjectBox


import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    AntiqueDesc: "Built a simple Antique Product Selling Website with an Admin Panel for managing products and orders.",
    AntiqueGithub: "https://github.com/0211Naveen/E-com.git",
    AntiqueWebsite: "https://e-com-olive-rho.vercel.app/",

    MessageDesc: "Message App is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to send and store messages in real time. It demonstrates secure backend integration with MongoDB Atlas, smooth frontend-to-backend communication using REST APIs, and modern deployment workflows using Vercel.",
    MessageGithub: "https://github.com/0211Naveen/message-app.git",
    MessageWebsite: "https://message-app-client-wine.vercel.app/",
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
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

        <a
          style={{ display: show }}
          href={desc[projectName + 'Github']}
          target='_blank'
          rel='noreferrer noopener'
        >
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a
          href={desc[projectName + 'Website']}
          target='_blank'
          rel='noreferrer noopener'
        >
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
