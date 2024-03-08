import React from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you are using react-router for navigation
import landingPageImage from '../image/landingpage.png'; // Assuming Home.js is located one directory above the 'image' folder

const Home = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: `url(${landingPageImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <div >
        <h1 className='p-3'style={{color:"#211951", marginTop:"58px"}}>Welcome to our website</h1>
      </div>
      <NavLink  className="d-flex flex-row-reverse " style={{marginTop:"300px" , paddingRight:"60px", color:"#211951"}} to="/register"><h3>Register Here</h3></NavLink>

    </div>
  );
};

export default Home;
