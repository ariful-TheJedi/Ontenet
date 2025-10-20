import React from "react";

import bioPic from "../assets/biopic.png"


export default function AboutMe({title}) {
  const url = import.meta.env.VITE_API_DOMAIN;


  return (
    <section className="maboute-me">
      {/* Hero Section */}
      <div className="maboute-me-hero">
        <div className="maboute-me-hero-inner">
          <div className="maboute-me-left">
            <h1 className="maboute-me-name">Dr. Muhammad Abdur Razzak</h1>
            <p className="maboute-me-creds">MBBS, MD (Nephrology), FASN </p>
            <h2 className="maboute-me-role">Assistant Professor, Nephrology</h2>
            <p className="maboute-me-pillar">National Institute of Kidney Diseases and Urology,Bangladesh</p>
            <a
              href="mailto:jeffrey.zaltzman@utoronto.ca"
              className="maboute-me-email"
            >
              sufisabih@gmail.com
            </a>
          </div>

          <img
            loading="lazy"
            className="maboute-me-profile-img"
            src={url+"/wp-content/uploads/2025/10/bio-pic-br-muhammad-abdur-razzak-compressed.webp"}
            alt="dr muhammad abdur razzak, transplant nephrologist"
          />
        </div>
      </div>

      {/* Bio Section */}
      <div className="maboute-me-content">
        <div className="maboute-me-bio">
          <h3>BIO</h3>
          <p>
             Dr. Muhammad Abdur Razzak is a skilled nephrologist with over a decade of experience in kidney disease management, dialysis, and transplantation. He earned his MD in Nephrology from the University of Dhaka and has served in leading institutions including Dhaka Medical College Hospital, NIKDU, and Popular Diagnostic Centre Ltd.<br/><br/>
            He completed a Clinical Fellowship in Nephrology at the Temerty Faculty of Medicine, University of Toronto, enhancing his expertise in advanced kidney care. A Fellow of the American Society of Nephrology (FASN), Dr. Razzak is dedicated to improving kidney health through compassionate care and clinical excellence.
          </p>
        <div className="maboute-me-affiliation">
          <h4>Appointments & Affiliations</h4>
          <ul>
            <li>Assistant Professor, Nephrology, National Institute of Kidney Diseases and Urology,Dhaka, Bangladesh</li>
            <li>Life Member, Bangladesh Renal Association (BRA)</li>
            <li>Member, International Society of Nephrology (ISN)</li>
            <li>Member,American Society of Nephrology (ASN)</li>
            <li>Fellow,American Society of Nephrology (FASN)</li>
            <li>Memeber of American Society of Transplantation (AST)</li>
          </ul>
        </div>
        <ul className="maboute-me-publication">
          <li>
            <a href="/Publications">
              <span>Publications</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}
