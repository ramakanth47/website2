// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-white pt-5 pb-3 mt-auto">
    <div className="container">
      <div className="row gy-4 text-center text-md-start">
        {/* About Us */}
        <div className="col-12 col-md-4">
          <h5>About Us</h5>
          <p className="small">
            SkillWiz is transforming recruitment with assessment solutions and best-in-class support.
          </p>
          <p className="small mb-0">
            <a href="#" className="text-white text-decoration-underline me-2">Contact</a>|
            <a href="#" className="text-white text-decoration-underline ms-2">Sales</a>
          </p>
        </div>

        {/* Quick Links - kept as per your style */}
        <div className="col-12 col-md-4">
          <h5>Quick Links</h5>
          <li><a href="/" className="text-white text-decoration-none">Home</a></li>
          <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
          <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
          <li><a href="/Resources" className="text-white text-decoration-none">Resources</a></li>
          <li><a href="/investors" className="text-white text-decoration-none">Investors</a></li>
        </div>

        {/* Contact Info */}
        <div className="col-12 col-md-4">
          <h5>Contact Info</h5>
          <p className="small mb-1">8th Block, Jayanagar, Bangalore 560041</p>
          <p className="small mb-1">
            Email: <a href="mailto:info@skillwiz.com" className="text-white text-decoration-underline">info@skillwiz.com</a>
          </p>
          <p className="small mb-0">Phone: +91-9740377330</p>
        </div>
      </div>

      <hr className="border-light mt-4" />
      <div className="text-center small">&copy; 2025 SkillWiz</div>
    </div>
  </footer>
);

export default Footer;
