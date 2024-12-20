import React, { useEffect, useState } from 'react';
import './Navbar.css';
// import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setSticky(true): setSticky(false);
    })
  }, [])
  return (
    <nav className={`container ${sticky? 'dark-nav': '' }`}>
      {/* <img src={logo} alt="logo" /> */}
      <h4>SparkCollege</h4>
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>Gallery</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar;
