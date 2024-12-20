import React from 'react';
import './Banner.css';
import dark_arrow from '../../assets/dark-arrow.png'

const Banner = () => {
  return (
    <div className='banner container'>
      <div className="banner-text">
        <h1> Empowering Minds, Shaping Futures</h1>
        <p>At Spark College, we ignite the spark of curiosity and provide an education that transforms lives. 
        Join us in creating a brighter, smarter, and better world through learning and innovation.</p>
        <buttton className="btn">Explore More <img src={dark_arrow} alt="arrow" /></buttton>
      </div>
    </div>
  )
}

export default Banner;
