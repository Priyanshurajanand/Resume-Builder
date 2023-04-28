import React from 'react';
import logo from "../../static/images/resume.png";
import { NavLink } from "react-router-dom";
const Landingpage = () => {
    return (    
    
        <div className="container  lp-page center">          
        <div className="section">
         <h1>Create a resume that stands out</h1>
           <p >Create a Resume that perfectally describes your skills and match your job profile.</p>
            <br></br>
           <div >
                <NavLink to="/getting-started"  className="btn hvr-float-shadow"><span>Get Started </span>
                </NavLink>
                
                </div>
                <img src={logo}   className="lp-resume" alt="logo" />
         </div>        
         </div>
    
        );
}
 
export default Landingpage;