import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
        let tx = 0;
    const slideForward = ()=>{
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
        if (tx < 0){
            tx += 25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
      <img className="next_btn" src={next_icon} alt="next_btn" onClick={slideForward} />
      <img className="back_btn" src={back_icon} alt="back_btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="user_1" />
                        <div>
                            <h3>Numa Limbu</h3>
                            <span>Inisght Workshop, Nepal</span>
                        </div>
                    </div>
                    <p>"Spark College’s dedication to student success is unmatched. The mentorship and 
                guidance I received here helped me build a strong foundation for my future. 
                It’s more than just a college—it’s a community of achievers."
                </p>
                </div>
            </li>
            
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="user_2" />
                        <div>
                            <h3>Nishan Limbu</h3>
                            <span>Tech Innovators, USA</span>
                        </div>
                    </div>
                    <p>"The environment at Spark College fosters creativity and innovation. 
                        The practical exposure and the emphasis on critical thinking have been invaluable to my personal and professional growth."
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="user_3" />
                        <div>
                            <h3>Dipa Limbu</h3>
                            <span>Global Leaders, UAE</span>
                        </div>
                    </div>
                    <p>
                    "Spark College has been a transformative experience for me. The curriculum is robust, and the opportunities to engage in real-world projects have been immensely beneficial for my future."
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="user_4" />
                        <div>
                            <h3>Tangsang Limbu</h3>
                            <span>Tech Innovators, USA</span>
                        </div>
                    </div>
                    <p>"The environment at Spark College fosters creativity and innovation. 
                        The practical exposure and the emphasis on critical thinking have been invaluable to my personal and professional growth."
                    </p>
                </div>
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Testimonials;
