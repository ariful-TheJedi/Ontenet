"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const domain = process.env.NEXT_PUBLIC_API_URL;
const url = process.env.NEXT_PUBLIC_API_URL;


const certificates = [
  {
    title:"Clinical Fellowship in Adult General Nephrology",
    institution:"Termerty Faculty of Medicine, University Of Toronto",
    date:"June 30,2024",
    url:domain+"/wp-content/uploads/2025/10/clinical-Fellowship-cerrrificate-dr-muhammad-abdur-razzak-scaled.jpg",
    type:"image"
  },
  {
    title:"Fellowship in the American Society of Nephrology",
    institution:"American Society of Nephrology(ASN)",
    date:"January 22,2024",
    url:domain+"/wp-content/uploads/2025/10/FASN-dr-muhammad-abdur-razzak-scaled.jpg",
    type:"image"
  },
    {
    title:"Fellow Of The Americal Society Of Nephrology(FASN)",
    institution:"American Society of Nephrology(ASN)",
    date:"2023",
    url:domain+"/wp-content/uploads/2025/10/fellow-of-ASN-min-scaled.jpg",
     type:"image"
  },
   {
    title:"Certificate Of Completion Of Fellowship",
    institution:"Division of Nephrology, University of Toronto",
    date:"June 17,2024",
    url:domain+"/wp-content/uploads/2025/10/Feloowship-completion-crtificate.pdf",
     type:"pdf"
  },
    {
    title:"Clinical Fellowship",
    institution:"Postgraduate Medical Education, University of Toronto",
    date:"June 30,2024",
    url:domain+"/wp-content/uploads/2025/10/UFT-certificate-scaled.jpg",
     type:"image"
  },
    {
    title:"Certificate Of Participation",
    institution:" The American Society of Nephrology(ASN)",
    date:"June 5,2021",
    url:domain+"/wp-content/uploads/2025/10/ASN-perticipation.jpg",
     type:"image"
  },
   {
    title:"Certificate Course In Diabetes Kidney Disease Management(CCCDKDM)",
    institution:"Chellaram Diabeties Institute",
    date:"February 27,2021",
    url:domain+"/wp-content/uploads/2025/10/CMEC-ertificate-Course-in-Prevention-Managemen-of-Diabetic-Kidney-Disease_certificate.jpg",
     type:"image"
  },
  {
    title:"Clinical Fellowship In Nephrology At The University Of Totonto",
    institution:"St. Michael's Inspired Care. Inspired Science.",
    date:"July 2022 to June 2024",
    url:domain+"/wp-content/uploads/2025/10/Dr-RonWald.jpg",
     type:"image"
  },
  {
    title:"Kidney Transplantation Fellowship",
    institution:"St. Michael's Inspired Care. Inspired Science.",
    date:"May 1, 2024",
    url:domain+"/wp-content/uploads/2025/10/Dr-Prasad.pdf",
     type:"pdf"
  },
  {
    title:"Fellowship In Nephrology At The University of Toronto",
    institution:"St. Michael's Unity Health Toronto",
    date:"June 19,2024",
    url:domain+"/wp-content/uploads/2025/10/Dr-Kamel.jpg",
     type:"image"
  },
  {
    title:"Transplant Experience at St. Michael’s Hospital",
    institution:"St. Michael's Inspired Care. Inspired Science.",
    date:"May 22,2024",
    url:domain+"/wp-content/uploads/2025/10/Dr-Zaltzman.pdf",
     type:"pdf"
  },

]



  const CertificateCard = ({title,institution,date,url,type,openLightbox}) => {

    return (
          <div className="certificate-card">
            <h3>{title}</h3>
            <p>
              <strong>Institution:</strong> {institution}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <button
              className="certificate-view-btn"
              onClick={() =>
                openLightbox({
                  type: type,
                  src: url,
                })
              }
            >
              <i className="fas fa-eye"></i> View Certificate
            </button>
          </div>
    )
  }




//main component

const Certificate = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const openLightbox = (file) => {
    setSelectedFile(file);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeLightbox = () => {
    setSelectedFile(null);
    document.body.style.overflow = "auto"; // restore scroll
  };

  // useEffect(() => {
  //   console.log(url);
  //   document.querySelector(".certificate-awards-section").style.background = `url(${url}/wp-content/uploads/2025/10/award-section-background.webp) no-repeat center center/cover`;
  // }, [url]);


  return (
    <div className="certificate-container">
      {/* === Awards Timeline === */}
      <section className="certificate-awards-section">
       <div className="certificate-awards-section-background">
          <Image
          className="certificate-awards-section-background-img"
          src={url+"/wp-content/uploads/2025/10/award-section-background.webp"}
          alt="Background"
          fill // <-- fills parent
          priority
          style={{
          objectFit: "cover", // makes it act like background-size: cover
          zIndex: -1,
        }}
          />
       </div>
        {/* <h2>
          <i style={{ color: "#FFD700" }} className="fas fa-trophy"></i>
          Awards & Honors
          <i style={{ color: "#FFD700" }} className="fas fa-trophy"></i>
        </h2> */}
        <div className="certificate-timeline">
          <div className="certificate-timeline-item featured certificate-award-1">
            {/* <div className="certificate-timeline-icon">
              <i className="fas fa-medal"></i>
            </div> */}
            <div className="certificate-timeline-content certificate-award-1">
              <h3>
                Certificate of participation in ASN/AST Transplant Nephrology
                Core Curriculum (TNCC)
              </h3>
              <span className="certificate-award-date">2021</span>
              <p>American Society of Nephrology</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a5/American_Society_of_Nephrology_Logo.png"
                alt="Institution Logo"
                className="certificate-institution-logo"
              />
            </div>
          </div>
          <div className="certificate-timeline-item certificate-award-2">
            {/* <div className="certificate-timeline-icon">
              <i className="fas fa-award"></i>
            </div> */}
            <div className="certificate-timeline-content">
              <h3>Clinical Fellowship</h3>
              <span className="certificate-award-date">2024</span>
              <p>American Society of Nephrology</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a5/American_Society_of_Nephrology_Logo.png"
                alt="Institution Logo"
                className="certificate-institution-logo"
              />
            </div>
          </div>
        </div>       
           <Image
            className="award-taking-photo"
            src="https://sub.drabdurrazzak.com/wp-content/uploads/2025/10/award-taking-asn.png"
            width={500}
            height={500}
            alt="dr muhammad abdur razzak Americal-Society-of-Nephrology"
           />
      </section>

      {/* === Certificates === */}
      <section className="certificate-certificates-section">
        <h2>
          <i style={{ color: "#115DA9" }} className="fas fa-scroll"></i>
          CERTIFICATES
        </h2>

        <div className="certificate-grid">
             {certificates.map((certificate,idx)=>(
              <CertificateCard {...certificate} key={idx} openLightbox={openLightbox} />
             ))}
        </div>
      </section>

      {/* === Lightbox / Modal === */}
      {selectedFile && (
        <div
          className="certificate-lightbox"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            zIndex: 9999,
          }}
        >
          <span
            className="certificate-close-btn"
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              fontSize: "40px",
              fontWeight: "bold",
              color: "#fff",
              cursor: "pointer",
              zIndex: 10000,
            }}
            onClick={closeLightbox}
          >
            &times;
          </span>

          {selectedFile.type === "pdf" ? (
            <iframe
              src={selectedFile.src}
              width="90%"
              height="90%"
              style={{
                border: "none",
                background: "#fff",
                borderRadius: "8px",
              }}
              title="Certificate PDF Viewer"
            ></iframe>
          ) : (
            <img
              src={selectedFile.src}
              alt="Certificate Preview"
              style={{
                display: "block",
                maxWidth: "90vw",
                maxHeight: "85vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 0 20px rgba(0,0,0,0.6)",
                zIndex: 9999,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Certificate;
