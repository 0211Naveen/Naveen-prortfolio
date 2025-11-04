import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Naveen</h4>
      <h4>Copyright &copy; 2025 Naveen</h4>
      <div className='footerLinks'>

        <a href="https://github.com/0211Naveen" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/naveen0211/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:0211naveen@gmail.com" target="_blank" rel="noopener noreferrer">
          <GrMail />
        </a>
        <a
          href="https://wa.me/+918072859334"  // 👈 replace with your WhatsApp number (with country code)
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/itz.naveen__?igsh=aHR4azByd3Q4djQw"  // 👈 replace with your Instagram username
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

      </div>
    </footer>
  )
}

export default Footer