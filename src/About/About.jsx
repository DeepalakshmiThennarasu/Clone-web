import React from 'react';
import logo from '../Assets/logo.png'
import './About.css'
import { useNavigate } from 'react-router-dom';
import health from '../Assets/aboutimg.webp';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const About = () => {
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
      <div className='about-container'>
        <div className='about-img' >
         <img src={health} alt="healthcare" />
        </div>
        <div className='about-content'>
        <h1>About Vesoftometic Solution</h1>
        <p>
        A trailblazing healthcare Information Technology company on a mission to revolutionize the healthcare IT landscape. With a relentless focus on innovation, we deliver cutting-edge healthcare software solutions that cater to a diverse clientele, including Small, Medium, and Enterprises Segments.
        </p>
        <ul>
          <li>Intervention Success</li>
          <li>Happy with Staff</li>
          <li>Quality of Care Services</li>
          <li>Infection Prevention</li>
          <li>Client Satisfaction</li>
        </ul>
        <button > 
       <AddIcCallIcon/> Call</button>
        </div>
      </div>
      

    </div>
  )
}

export default About
