import React from 'react'

import maskgroup1 from '../assests/maskgroup11.png';
import children from '../assests/children-using-building-kit 1.png';
import standard from '../assests/standard-quality-control-collage-concept 1.png';
import creativeteam from '../assests/creative-team.png';
import five from "../assests/5.png";
import sixth from '../assests/sixth.png';
import seventh from '../assests/seventh.png'
import eight from '../assests/20.png';
import ninth from '../assests/21.png';
import ten from '../assests/23.png';
import eleven from '../assests/24.png'

function blog()  {
  return (
    <div className='blog'> 
      {/* Top Carousel */}
      <div className='blogcards'>
        <div> <img src={maskgroup1} id="blogimg" alt="first"/><p id="firstpara">The Importance of Upskilling in Today's Job Market</p><p id="scndpara">Why Upskilling Matters in 2025</p></div>
        <div><img src={children} id="blogimg" alt="first"/><p id="firstpara">How Gamified Learning Enhances Skill Retention</p><p id="scndpara">The Psychology Behind Gamification</p></div>
        <div><img src={standard}  id="blogimg" alt="first"/><p id="firstpara">Soft Skills vs. Hard Skills: What Matters More?</p><p id="scndpara">The Difference Between Soft and Hard Skills</p></div>
    
    </div>
    <div className='blogcard2'>
        <div><img src={creativeteam}   id="blogimgone" alt="team"/><p id="firstpara">Top 10 Tech Skills That Can Land You a High-Paying Job</p><p id="scndpara">Why Tech Skills Are Essential in 2025</p></div>
        <div><img src={five}  id="blogimgone" alt="five"/><p id="firstpara">How to Stay Motivated While Learning New Skills</p ><p id="scndpara">Why Motivation Is Key to Skill Development</p></div>
    </div>
    
    <div>
        <p ><h1 id="thirdpara">Mastering Knowledge & Growth</h1></p>
        <p id="thirdpara">Knowledge is the foundation of growth. Embrace new ideas, sharpen your skills, and stay inspired with insights that</p>
        <p id="thirdpara">empower you to achieve more in both your personal and professional journey.</p>
        
        <div className='fouthpara'>
          <div><img src={sixth}   id="blogimgfive" alt="team"/><p id="fourthimgpara">Trends to Watch in 2025</p><p id="fourthimgparatwo"><h4>The Future of Online Learning</h4></p></div>
          <div><img src={seventh}   id="blogimgsix" alt="team"/><p id="fourthpara5">Trends to Watch in 2025</p><p id="fourthimgparathree"><h4>5 Essential Skills to Boost Your Career in 2025</h4></p></div>
          </div>
          <div className='fifthpara'>
          <div><img src={eight}   id="blogimgseven" alt="team"/><p id="fourthpara6">Trends to Watch in 2025</p><p id="fourthimgparafour"><h4>5 Essential Skills to Boost Your Career in 2025</h4></p></div>
          <div><img src={ninth}   id="blogimgseven" alt="team"/><p id="fourthpara7">Trends to Watch in 2025</p><p id="fourthimgparafive"><h4>5 Essential Skills to Boost Your Career in 2025</h4></p></div>
          </div>
        
        <div className='sixthpara'>
          <div><img src={ten} id="blogimgten" alt="team"/><p id="fourthpara8">Trends to Watch in 2025</p><p id="fourthimgparasix"><h4>The Power of Microlearning</h4></p></div>
          <div><img src={eleven}   id="blogimgeleven" alt="team"/><p id="fourthpara9">Trends to Watch in 2025</p><p id="fourthimgparaseven"><h4>Revolutionizing the Way We Learn</h4></p></div>
          </div>
        </div>
      
      
    </div>
  )
}

export default blog
