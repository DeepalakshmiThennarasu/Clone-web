import React from 'react'
import logo from '../Assets/logo.png'
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CallIcon from '@mui/icons-material/Call';
import ContactMailIcon from '@mui/icons-material/ContactMail';


const Contact = () => {
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
            <div className='contact-main'>
                <div className='contact-content'>
                    <AddLocationIcon />
                    <h3>Our Location</h3>
                    <h6>Chennai</h6>
                    <p>43/25, Kalaingar street (K.K. Salai),
                        Saligramam, Chennai, Tamilnadu.
                        India - 600093.</p>
                </div>
                <div className='contact-content'>
                    <HowToRegIcon />
                    <h3>Registered address</h3>
                    <h6>Tiruchirappalli</h6>
                    <p>No 6, Rajiv Gandhi Nagar,
                        Edamalaipatti Pudur,Tiruchirappalli,
                        Tamilnadu, India - 620012.
                    </p>
                </div>
            </div>
            <div className='contact-main'>
                <div className='contact-content'>
                    <CallIcon/>
                    <h3>Our Contact</h3>
                    <p>+91 9840797679</p>
                    <p>+91 44 4778 5168</p>
                </div>
                <div className='contact-content'>
                    <ContactMailIcon/>
                    <h3>Mail Us</h3>
                    <p>info@vesoft.in</p>
                    <p>revathi@vesoft.in </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
