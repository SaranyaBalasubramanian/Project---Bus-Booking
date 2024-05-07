import React from 'react';
import { FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-5">
      
      

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright BookNGo. 
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        All rights reserved
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
