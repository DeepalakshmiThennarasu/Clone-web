import React from 'react'
import './Crm.css'
import { useNavigate } from 'react-router-dom';

const Crm = () => {
    const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/"); // Redirects to Home
  };
  const handleGoToDashHome=()=>
  {
    navigate("/dashhome");
  };
  return (
    <div>
      <nav className="nav-content">
        <ul>
          <li><button onClick={handleGoToHome}>Home</button></li>
          <li><button onClick={() => navigate("/about")}>About</button></li>
          <li><button onClick={() => navigate("/services")}>Services</button></li>
          <li><button onClick={() => navigate("/contact")}>Contact</button></li>
        </ul>
      </nav>
      <button onClick={handleGoToDashHome} className="but-home"> Dashhome</button>


       
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>Admin</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>jane.smith@example.com</td>
                        <td>User</td>
                        <td>Inactive</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mike Johnson</td>
                        <td>mike.johnson@example.com</td>
                        <td>Moderator</td>
                        <td>Active</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Crm
