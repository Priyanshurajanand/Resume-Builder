import React from 'react';
import aboutUs from "../../static/images/aboutus.jpg";

const AboutUs = () => {
    
    return (        
            <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>       
                        Do you have any questions? We will be happy to assist you. Send us a mail on below email id.
                    </p>
        
                    <h2 className="email text-large">
                        priyanshurajanand123456@gmail.com
                    </h2>
        
                    <p className="happy-to-help">
                        We are here to answer any questions regarding our resume generator, do not hesitate to contact us for
                        any reason. We will respond  from receipt of the email. Thanks for trusting us.
                    </p>
                </div>
                <div className="contact-right-section">
                <img src={aboutUs}   className=" full-width about-us-img" alt="logo" />
                </div>
                </div>
           </div>
    
    );
}
 
export default AboutUs;