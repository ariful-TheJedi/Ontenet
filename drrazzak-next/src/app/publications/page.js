"use client"

import React from "react";

const PublicationCard = ({ title, link, authors, journal, pubdate }) => {
  return (
    <div className="card">
      <h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <div className="authors">{authors}</div>
      <div className="journal">{journal}</div>
      <div className="pubdate">{pubdate}</div>
    </div>
  );
};

const Publications = () => {
  return (
    <div className="pub-container">
      <div className="title">
        <i className="fa-solid fa-book-medical"></i> Publications
      </div>

      <div className="timeline">
        {/* ---------------- 2023 ---------------- */}
        <div className="year">2023</div>

        {/* Left card */}
        <div className="left">
          <PublicationCard
            title="Relationship between Renal Function and Bone Mineral Density in Postmenopausal Women"
            link="#"
            authors={<>K. Fatima, <span className="highlight">Razzak MA</span>, et al.</>}
            journal="Mymensingh Med J"
            pubdate="Jan 2023"
          />
        </div>
        <div className="center left">
          <span className="dot-left"></span>
        </div>

        {/* ---------------- 2021 ---------------- */}
        <div className="year">2021</div>

        {/* Left card */}
        <div className="right"></div>
        <div className="center right">
          <span className="dot-right"></span>
        </div>
        {/* <div className="right"></div> */}
        <div className="right">
          <PublicationCard
            title="Incidence of Infective Endocarditis among Haemodialysis Patients: Experience at a Single Centre in Bangladesh"
            link="#"
            authors={<><span className="highlight">Razzak MA</span>,Zakir H., et al.</>}
            journal="Current and Advance Medical Research — Vol.8, No.1"
            pubdate="2021"
          />
        </div>

        {/* Right card */}
        <div className="left"></div>
        <div className="left">
          <PublicationCard
            title="Aortic Valve Calcification in Ptients with End Stage Renal Disease on MaintenanceHaemodialysis"
            link="#"
            authors={<><span className="highlight">Razzak MA</span> et al.</>}
            journal="BJCTA — Volume:8, Number:1"
            pubdate="March 2021"
          />
        </div>
                <div className="center left">
          <span className="dot-left"></span>
        </div>
               {/* Right card */}
        <div className="right"></div> 
        <div className="left"></div>
        <div className="center right">
          <span className="dot-right"></span>
        </div>
        <div className="right">
          <PublicationCard
            title="Neutrophil Gelatinase-Associated Lipocalin (NGAL) and Progression of Acute Kidney Injury (AKI): A Study in a Tertiary Care Hospital"
            link="https://www.aimdrjournal.com/wp-content/uploads/2021/06/MC1_OA_International-MC-edit-1.pdf"
            authors={<>Hasan G. S.,<span className="highlight">Razzak MA</span>, et al.</>}
            journal="AIMDR"
            pubdate="2023"
          />
        </div>
        {/* ---------------- 2019 ---------------- */}
        <div className="year">2019</div>

        {/* Left card */}
        <div className="left">
          <PublicationCard
            title="Dialysis Adequacy and Quality of Life in Diabetic and Non-Diabetic Bangladeshi Patients on Maintenance Hemodialysis"
            link="https://doi.org/10.3329/birdem.v9i2.41280"
            authors={<><span className="highlight">Razzak MA</span>,Saha S. K., et al.</>}
            journal="BIRDEM Med J — Vol.9, No.2"
            pubdate="May 2019"
          />
        </div>
        <div className="center left">
          <span className="dot-left"></span>
        </div>
        <div className="right"></div>

        {/* Right card */}
        <div className="left"></div>
        <div className="center right">
          <span className="dot-right"></span>
        </div>
        <div className="right">
          <PublicationCard
            title="Frequency of Burnout Syndrome in an Intensive Care Unit of a Tertiary Care Hospital in Dhaka, Bangladesh"
            link="#"
            authors={<><span className="highlight">Razzak MA</span>,Saha D. K., et al.</>}
            journal="BIRDEM Med J — Vol.9, No.1"
            pubdate="2019"
          />
        </div>

        {/* Left card */}
        <div className="left">
          <PublicationCard
            title="Risk of Abdominal Aortic Calcifications among End Stage Renal Disease Patients under Maintenance Haemodialysis"
            link="#"
            authors={<><span className="highlight">Razzak MA</span>, et al.</>}
            journal="Mymensingh Med J — Vol.28, No.3"
            pubdate="Jul 2019"
          />
        </div>
        <div className="center left">
          <span className="dot-left"></span>
        </div>
        <div className="right"></div>

        {/* Right card */}
        <div className="left"></div>
        <div className="center right">
          <span className="dot-right"></span>
        </div>
        <div className="right">
          <PublicationCard
            title="A Study on Serum Calcium in Maintenance Haemodialysis Patients"
            link="https://doi.org/10.19080/JOJUN.2019.07.555703"
            authors={<><span className="highlight">Razzak MA</span>,Jalil M. E., et al.</>}
            journal="JOJ Urology & Nephrology"
            pubdate="2019"
          />
        </div>

        {/* ---------------- 2018 ---------------- */}
        <div className="year">2018</div>

        {/* Left card */}
        <div className="left">
          <PublicationCard
            title="NGAL (Neutrophil Gelatinase-Associated Lipocalin) Is an Early Predictor of Acute Kidney Injury after Cardiac Surgery and Variation of NGAL Values in Homogenous Study Subject"
            link="https://pubmed.ncbi.nlm.nih.gov/29459617/"
            authors={<><span className="highlight">Razzak MA</span>,Miah O. F., et al.</>}
            journal="Mymensingh Med J — Vol.27, No.1"
            pubdate="Jan 2018"
          />
        </div>
        <div className="center left">
          <span className="dot-left"></span>
        </div>
        <div className="right"></div>

        {/* Right card */}
        <div className="left"></div>
        <div className="center right">
          <span className="dot-right"></span>
        </div>
        <div className="right">
          <PublicationCard
            title="Risk Estimation of Aortic Stiffness in Patients with End Stage Renal Disease under Maintenance Haemodialysis"
            link="#"
            authors={<><span className="highlight">Razzak MA</span>,Rasul A., et al.</>}
            journal="University Heart Journal — Vol.14, No.2"
            pubdate="2018"
          />
        </div>
      </div>
    </div>
  );
};

export default Publications;
