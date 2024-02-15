import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './AboutUs.css';




function AboutUs() {
  const [aboutInfo, setAboutInfo] = useState({ title: '', content: '', imageUrl: '' });

  useEffect(() => {
    fetch('/api/about')
      .then(response => response.json())
      .then(data => setAboutInfo(data));
  }, []);

  return (
    <div>
      <h1>{aboutInfo.title}</h1>
      <p>{aboutInfo.content}</p>
      <img src={aboutInfo.imageUrl} alt="About Us" />
    </div>
  );
}

export default AboutUs;
