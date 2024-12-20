import React from 'react';
import './Nav.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from '../Assets/logo.png'
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Page2 from '../page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Page1 from '../Page1/Page1';
import Page5 from '../Page5/Page5';
import Page6 from '../Page6/Page6';
import Page7 from '../Page7/Page7';
import Page8 from '../Page8/Page8';
import Page9 from '../Page9/Page9';
import Dashhome from '../Dashhome/Dashhome';
import Crm from '../crm/Crm';
const Nav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/page1" element={<Page1/>} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4/>} />
          <Route path="page5" element={<Page5/>} />
          <Route path="page6" element={<Page6/>} />
          <Route path="page7" element={<Page7/>} />
          <Route path="page8" element={<Page8/>} />
          <Route path="page9" element={<Page9/>} />
        <Route path="/dashhome" element={<Dashhome />} />
        <Route path="/crm" element={<Crm/>} />


      </Routes>
    </Router>
  );
};

const MainLayout = () => {
  return (
    <>
      <header>
        <nav className="nav-content">
        <img src={logo} alt="LOGO" />
            
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="container-sub">
          <Link to="/page1">Page1</Link>
        </div>
        <div className="container-sub">
          <Link to="/page2">Page2</Link>
        </div>
        <div className="container-sub">
          <Link to="/page3">Page3</Link>
        </div>
        <div className="container-sub">
          <Link to="/page4">Page4</Link>
        </div>
        <div className="container-sub">
          <Link to="/page5">Page5</Link>
        </div>
        <div className="container-sub">
          <Link to="/page6">Page6</Link>
        </div>
        <div className="container-sub">
          <Link to="/page7">Page7</Link>
        </div>
        <div className="container-sub">
          <Link to="/page8">Page8</Link>
        </div>
        <div className="container-sub">
          <Link to="/page9">Page9</Link>
        </div>
        
      </div>
    </>
  );
};

export default Nav;
