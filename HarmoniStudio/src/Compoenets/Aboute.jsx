import React from 'react';
import AnimatedHR from './movingHr';
// import './AboutUs.css'; // Import the stylesheet

const About = () => {
  return (
    <div className="about-us-container">
      <section className='about mt-5'>
        <div className="about-us-sectionHeader">
          {/* <hr className="about-us-divider" /> */}
           <AnimatedHR duration={600}/>
          <h2 className='my-2 ms-1'>About</h2>
          {/* <hr className="about-us-divider" /> */}
          <AnimatedHR/>
        </div>
        <div className="about-us-content d-flex justify-between">
          <div className="about-us-rightColumn">
            <img src="https://harmoniestudio.eu/assets/about/harmonie_studio-logo.png" alt="studio noice map" />
          </div> 
          <div className="about-us-leftColumn">
              <div className="about-us-taglines">
              <p>HS is a creative team working with photography and video, combining digital and analog techniques to 
                craft unique visuals. Our work tells stories with impact, balancing classic aesthetics and new technologies. 
                A studio focused on shaping visual culture through images, motion, and direction.
              </p> 
               <br/>
              <p>Small Team, Big Vision.</p>
              <p>Deeply Visual Thinkers.</p>
              <p>We Work Fast & With Care.</p>
              <p>We Care About Aesthetics, Process and People.</p>
              <p>Fashion, Sport & Music Industry.</p>
              <p>Based in Rimini, Moving Across Milan, London and Beyond.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-whatWeDoSection">
        <div className="about-us-sectionHeader">
           <AnimatedHR duration={500}/>
          <h2 className='my-2 ms-1'>What we do</h2>
           <AnimatedHR duration={600}/>
        </div>

        <div className="about-us-servicesList">
          <h5>Art Direction</h5>
          <h5>Creative Consultancy</h5>
          <h5>Content Creation</h5>
          <h5>Photography</h5>
          <h5>Production</h5>
        </div>
      </section>
    </div>
  );
};

export default About;