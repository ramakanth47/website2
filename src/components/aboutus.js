import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import teamImage from '../assests/26.png';
import ceoImage from '../assests/Venugopal 2.png';
import visionIcon from '../assests/vision.png';
import missionIcon from '../assests/mission.png';
import purposeIcon from '../assests/purpose.png';

const aboutData = [
  {
    title: "OUR VISION",
    icon: visionIcon,
    description:
      "Carve a niche for ourselves as the world’s leading skill assessment organization and serve as the gateway for enterprises to assess skilled knowledge workers.",
  },
  {
    title: "OUR MISSION",
    icon: missionIcon,
    description:
      "Build and maintain the world’s largest skill testing library and conduct assessments in a secure, fair, and transparent manner to help enterprises with a standardized and faster talent assessment journey.",
  },
  {
    title: "OUR PURPOSE",
    icon: purposeIcon,
    description:
      "Create stakeholder value by providing best-in-class services with a singular focus on assessing skills.",
  },
];

const AboutUs = () => {
  return (
    <div className="aboutus" >
      <p style={{ paddingTop: 250, paddingBottom: 0, paddingLeft: 450, fontWeight: 'bold', fontSize: 45 }}>
        ELEVATE YOUR BUSINESS
      </p>
      <p style={{ marginTop: -45, paddingTop: 30, paddingLeft: 350, fontWeight: 'bold', fontSize: 15 }}>
        Skill Assessments Done With The Utmost Knowledge, Integrity, Trust, Respect And Security. Our Objective Is To
      </p>
      <p style={{ marginTop: -45, paddingTop: 30, paddingLeft: 350, fontWeight: 'bold', fontSize: 15 }}>
        Provide You With Accurate Insights Into The Skill Levels Of Your Current And Prospective Workforce.
      </p>
      <p style={{ marginTop: -10, paddingLeft: 30, paddingRight: 5, paddingTop: 10, fontWeight: 'bold', backgroundColor: '#f73E5D', borderRadius: 25, width: 150, height: 50, marginLeft: 650, textAlign: 'center' }}>
        Sign up
      </p>

      
      <div className="sectioncontainer py-5">
        <div className="threecontainer container d-flex flex-column flex-md-row justify-content-between gap-4">
          {aboutData.map((item, index) => (
            <div key={index} className="card hover-card text-center p-4 shadow-sm border-0 flex-fill">
              <div className="icon-container mx-auto mb-3">
                <img src={item.icon} alt={item.title} style={{ height: 40 }} />
              </div>
              <h6 className="fw-bold">{item.title}</h6>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHO WE ARE SECTION */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h5 className="text-primary fw-bold">Who We Are ?</h5>
            <p id="txtabt">
              We are your partner in skill assessment. Our expertise lies in assessing skill levels in people and quantifying them...
            </p>
           
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="hover-zoom shadow rounded">
              <img
                src={teamImage}
                alt="Team Composite"
                className="img-fluid rounded"
                style={{ maxHeight: '400px' }}
              />
              
            </div>
          </div>
        </div>

        {/* CEO SECTION */}
        <div className="row mt-5 align-items-start">
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <div className="p-2" style={{ backgroundColor: "#ec1c24" }}>
              <img
                src={ceoImage}
                alt="CEO"
                className="img-fluid  mb-2"
                style={{ maxWidth: '260px' }}
              />
              <div className="text-white fw-bold">CEO</div>
              
            </div>
            <p id="txtabt2">
              “Skilldzire has a single purpose and that is to create stakeholder value…”<br />
              – Venugopal A. <br />
              CEO, Skilldzire
            </p>
          </div>

          <div className="col-md-9">
            <p>
              Venugopal A. is a veteran leader in the IT industry with experience spanning 24 years in senior leadership roles, from software services to building solutions.
              His understanding of one of the key challenges faced by the modern enterprise gave him the vision to start Skilldzire today.
            </p>
            <p>
              With a solid background in the technology industry, he aims to establish Skilldzire as a future-focused company. He is poised to take Skilldzire to the next level of growth by turning it into a company that is shaped entirely by the needs of its customers.
            </p>
          </div>
        </div>
      </div>


      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="shadow rounded-4 overflow-hidden">
              <video
                src="https://skillkwizz.vercel.app/images/aboutpage/about_video.mp4"
                controls
                style={{ width: "100%", height: "auto" }}
                poster="https://via.placeholder.com/1280x720?text=Video+Loading"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    
  );
};

export default AboutUs;
