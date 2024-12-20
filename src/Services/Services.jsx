import React from 'react';
import './Services.css';
import logo from '../Assets/logo.png'
import { useNavigate } from 'react-router-dom';
import service1 from '../Assets/service1.jpg';
import services2 from '../Assets/services2.png'

const Services = () => {
    const navigate = useNavigate();
      const handleGoToHome = () => {
        navigate("/"); 
      };
  return (
    <div>
      <nav className="nav-content">
        <img src={logo} alt="LOGO" />
        <ul>
          <li><button onClick={handleGoToHome}>Home</button></li>
          <li><button onClick={() => navigate("/about")}>About</button></li>
          <li><button onClick={() => navigate("/services")}>Services</button></li>
          <li><button onClick={() => navigate("/contact")}>Contact</button></li>
        </ul>
      </nav>
      <div className='service-main-content'>
        <div className='service-content'>
            <h1>
            Consultant for HIMS, LIMS & CIMS
            </h1>
            <h3>
            Turnkey Projects for Large & Enterprises Hospitals
            </h3>
            <p>At Vesoftometic Solution, we understand the unique challenges that large and enterprise hospitals face in implementing healthcare information management systems. Our turnkey project solutions are designed to ensure a smooth and comprehensive transition to Hospital Information Management Systems (HIMS), Laboratory Information Management Systems (LIMS), and Clinical Information Management Systems (CIMS).</p>
        </div>
        <div className='service-img'>
        <img src={service1} alt="Healthcare" />
        </div>
      </div>
      <div className='service-main-content'>
      <div className='service-img'>
        <img src={services2} alt="Healthcare" />
        </div>
        <div className='service-content'>
            <h1>
            What We Offer:
            </h1>
            <ul>
                <li>End-to-End Implementation: We take care of every aspect of the project, from planning and design to installation and training.</li>
                <li>Customized Solutions: Our team tailors the software to your specific needs, ensuring a perfect fit for your hospital’s requirements.</li>
                <li>Project Management: We manage all project phases, keeping you informed and ensuring the project stays on track.</li>
                <li>Quality Assurance: Rigorous testing and validation are integral to our turnkey projects, guaranteeing system stability and performance.</li>
                 <li>Post-Implementation Support: We’re with you even after the project is complete, providing ongoing support and maintenance.
                 </li>
            </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Services
