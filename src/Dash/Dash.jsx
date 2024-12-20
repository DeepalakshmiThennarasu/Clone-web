import React from "react";
import { useNavigate } from "react-router-dom";
import './Dash.css';
import logo from '../Assets/logo.png'
import MyCharts from "../Chart/Chart";

const Dash = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/"); 
  };

  const handleGoToDashHome = () => {
    navigate("/dashhome"); 
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

      <button onClick={handleGoToDashHome} className="but-home"> Dashhome</button>
      <MyCharts/>
    </div>
  );
};

export default Dash;
