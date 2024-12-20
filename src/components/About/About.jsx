import React from 'react';
import './About.css';
import about_image from '../../assets/about.png';
import paly_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img className="about-img" src={about_image} alt="about_image" />
        <img className="play-icon" src={paly_icon} alt="play_icon " />
      </div>
      <div className="about-right">
      <h3>ABOUT SPARK COLLEGE</h3>
        <h2>Igniting Potential, Empowering Excellence</h2>
        <p>
          Spark College is dedicated to shaping the next generation of thinkers, innovators, 
          and leaders. Through a dynamic blend of cutting-edge curriculum, experienced faculty, 
          and state-of-the-art facilities, we empower students to achieve academic excellence 
          and pursue their dreams.
        </p>
        <p>
          At Spark College, we believe in fostering a culture of inclusivity and innovation. 
          Our programs are designed to cater to a diverse range of interests and career aspirations, 
          ensuring that every student has the opportunity to excel in their chosen field.
        </p>
        <p>
          With a focus on holistic development, we offer a wide array of extracurricular activities, 
          including sports, arts, and community service. These experiences help our students build 
          confidence, leadership skills, and a sense of responsibility towards society.
        </p>
        <p>
          Our campus features world-class infrastructure, including modern classrooms, well-equipped 
          laboratories, and extensive libraries. We also prioritize sustainability and green initiatives, 
          creating a harmonious environment for learning and growth.
        </p>
        <p>
          Over the years, Spark College has consistently ranked among the top institutions for academic 
          excellence and student satisfaction. Our alumni network spans the globe, with graduates 
          achieving success in various industries and making a positive impact worldwide.
        </p>
      </div>
    </div>
  )
}

export default About;
