import React from 'react';

function Footer() {
  return (
    <footer className="d-flex justify-content-between mt-4 py-3">
      <p>&copy; Copyright 2024</p>
      <p>
        Designed and Developed by Juan Vargas |{' '}
        <a href="https://github.com/jv0321?tab=repositories" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
      <p>
        Link to my Linkedin profile |{' '}
      <a href="https://www.linkedin.com/in/juan-jose-vargas-molina-55b504299/" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
      </p>
    </footer>
  );
}

export default Footer;