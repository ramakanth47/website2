import React from 'react';
import '../App.css';
import skilllibary from '../assests/Skill Library.jpg';
import securecenter from "../assests/Secure Center.jpg";
import picklaptop from '../assests/Pick - Laptop.jpg';
import driverslicense from '../assests/Drivers License.jpg';
import LoginForm from "../components/LoginForm";
import Testimonials from "../components/Testimonials";
import skillone from '../assests/skills_1.png';
import skilltwo from '../assests/skills_2.png';
import skilllthree from '../assests/skills_3.png';
import skilllfour from '../assests/skills_4.png';
import abstrctone from '../assests/abstract-background-with-low-poly-design 1.png';
import worldmap from '../assests/earth-Ogbuhu9HoE.png';
import grpfive from '../assests/Group 5.png';
import grpsix from '../assests/Group 6.png';
import grpseven from '../assests/Group 7.png';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'; 





function Home() {

  
 

  return (
    <div className='home'>
      <p style={{paddingTop:320,paddingBottom: 0,paddingLeft:50,color:'#fff',fontWeight:'bold',fontSize:45}}>
      Assessments in Secure
      </p>
      <p style={{marginTop:-45,paddingTop:30,paddingLeft:50,color:'#fff',fontWeight:'bold',fontSize:45}}> Centers</p>
      <p style={{marginTop:-10,color:'#fff',paddingLeft:30,paddingRight:5,paddingTop:10,fontWeight:'bold',backgroundColor:'#f73E5D',borderRadius:25 ,width:150 ,height:50,marginLeft:50}}>Get Started</p>
     <div className='carousel'>
      
      {/* Top Carousel */}
      <Carousel fade interval={4000}>
        <Carousel.Item>
          <ExampleCarouselImage src={skilllibary} alt="Skill Library Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={securecenter} alt="Secure Center Slide" />
          <Carousel.Caption>
            <h3>Secure Center</h3>
            <p>Your learning, protected with privacy and security.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={picklaptop} alt="Pick Laptop Slide" />
          <Carousel.Caption>
            <h3>Learn Anywhere</h3>
            <p>Access knowledge at your fingertips—anytime, anywhere.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={driverslicense} alt="Driver's License Slide" />
          <Carousel.Caption>
            <h3>Real-World Skills</h3>
            <p>Equip yourself with practical, career-ready capabilities.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



     

          {/* Right Arrow */}
        
        </div>
      <div className='imgrotation'>
         <div><img src={skillone} alt='skill1'/></div>
         <div><img src={skilltwo} id="imgtwo"alt='skill2'/></div>
         <div><p className="rotationTextOne">Authenticate Skills,</p></div>
        <div><p className='rotationTextTwo'>Simplify Hiring</p></div>
        <div><p className='rotationTextThree'>SkillKwiz ensures professionals are evaluated</p></div>
        <div><p className='rotationTextFour'>accurately in their chosen fields. Our secure</p></div>
        <div><p className='rotationTextFive'>testing centers provide authenticated skill</p></div>
        <div><p className='rotationTextSix'>assessments, giving you instant access to</p></div>
        <div><p className='rotationTextSeven'>verified reports—eliminating the need for</p></div>
        <div><p  className='rotationTextEight'>lengthy technical interviews.</p></div>
        <div><img src={skilllthree}  id='skillthree'alt='skill1'/></div>
        <div><img src={skilllfour}  id='skillfour'alt='skill1'/></div>
      </div>
      <div className='imgthreerotation'>
        <div id="firstrotation"><img src={abstrctone} id="firstimgrot"alt="abstractone"/></div>

        <div id="secondrotation"><img src={abstrctone} id="firstimgrot"alt="abstractone"/></div>
        <div id="thirdrotation"><img src={worldmap} alt="map"/></div>
        <div id="fourtrotation"><img src={grpfive} alt="map"/></div>
        <div id="fifthrotation"><img src={grpsix} alt="map"/></div>
        <div id="sixthrotation"><img src={grpseven} alt="map"/></div>
      </div>
      <div className="py-5">
      <Testimonials />
    </div>
       <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#004595" }}>
      <LoginForm />
    </div>
    </div>
    
  );
}

// Export the Home component as the default export
export default Home;