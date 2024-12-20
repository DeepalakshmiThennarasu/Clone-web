import React from 'react';
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Dashhome.css'


const Dashhome = () => {
      const navigate = useNavigate();
      const handleGoToHome = () => {
        navigate("/"); // Programmatically navigate to the Home page
      };
      const handleGoToDash = () => {
        navigate("/page1"); 
      };
      const handleGoToCrm = () => {
        navigate("/crm"); 
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
    <div className="container">
        <div className="container-sub"><button onClick={handleGoToDash}>Dashboard</button></div>
        <div className="container-sub"><button onClick={handleGoToCrm}>Crm</button></div>
        <div className="container-sub"><Link to="/services"><button>Testing</button></Link></div>
        <div className="container-sub"><Link to="/about"><button>Retrieval</button></Link></div>
        <div className="container-sub"><Link to="/erp"><button>ERP</button></Link></div>
        <div className="container-sub"><Link to="/pagination"><button>Pagination</button></Link></div>
        <div className="container-sub"><Link to="/proclaim"><button>Proclaim</button></Link></div>
        <div className="container-sub"><Link to="/detail"><button>Detail</button></Link></div>
        <div className="container-sub"><Link to="/decorum"><button>Decorum</button></Link></div>
      </div>
    </div>

  )
}

export default Dashhome
