import React from 'react';
import AnimatedHR from "./movingHr"
// import './ContactSection.css'; 

const Contact = () => {
  return (
    <section className="contact-section bg-black text-white py-5">
      <div className="container">
        {/* Logo and title section at the top */}
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center">
            <img 
              src="https://harmoniestudio.eu/media/pages/contact/ef8b5914ca-1756740094/harmonie_studio-logo.png" 
              alt="Harmonie Logo" 
              className="img-fluid harmonie-logo mb-0" 
            />
          </div>
        </div>
        <div className="row flex-column">
          {/* Contacts section */}
          <div className=" hr-contact col mt-0 mb-4">
              <AnimatedHR duration={500}/>     
            <h5 className="text-uppercase ">Contacts</h5>
              <AnimatedHR duration={500}/>     
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="mailto:info@harmoniestudio.eu" className="text-white text-decoration-none">
                  info@harmoniestudio.eu
                </a>
              </li>
              <li>
                <a href="tel:+393332823292" className="text-white text-decoration-none">
                  +39 333 2823292
                </a>
              </li>
            </ul>
            {/* <hr className="bg-white my-4" />  */}
          </div>
          
          {/* Social section */}
          <div className="col my-4">
              <AnimatedHR duration={500}/>
            <h5 className="text-uppercase ">Social</h5>
              <AnimatedHR duration={500}/>
            <ul className="list-unstyled">
              <li className="mb-1">
                <a href="#" className="text-white text-decoration-none">Instagram</a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-white text-decoration-none">Vimeo</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">YouTube</a>
              </li>
            </ul>
            {/* <hr className="bg-white my-4" />  */}
          </div>
          
          {/* Headquarter section */}
          <div className="col my-4">
            <AnimatedHR duration={500}/>
            <h5 className="text-uppercase">Headquarter</h5>
            <AnimatedHR duration={500}/>
            <p className="mb-0">Str. Calese, 31, 47891 Dogana, San Marino</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;