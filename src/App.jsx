import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Collage Photos'/>
        <Gallery/>
        <Title subTitle='TESTIMONIALS' title='What Students Says'/>
        <Testimonials/>
        <Title subTitle='CONTACT US' title='Get In Touch'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;
