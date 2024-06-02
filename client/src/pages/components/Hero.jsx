import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../index.scss';
import { Link } from 'react-router-dom';

function Hero() {

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentSentence = sentences[currentSentenceIndex];
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setSpeed(50);
      } else {
        setDisplayText((prev) => currentSentence.substring(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentSentence) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, speed,]);

  return (
    <section className="hero">
      <div className="overlay">
        <div className="content">
          <h1>Hi, I'm</h1>
          <br />
          <h1>Juan Vargas</h1>
          <br />
          <h3 className="typewriter">{displayText}</h3>
          <Link to="/contact" className="connect-btn">
            LET'S TALK
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;