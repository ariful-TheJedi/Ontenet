"use client"
import React, { useState } from "react";
import CVViewer from "@/components/CV-View";

// const ResumeCard = ({ title, icon, children, defaultOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);

//   return (
//     <div className="resume-card-wrapper">
//       <div
//         className={`resume-accordion-item ${isOpen ? "active" : ""}`}
//         onClick={() => setIsOpen(!isOpen)}
//         onMouseEnter={() => setIsOpen(true)}   // hover open
//         onMouseLeave={() => setIsOpen(false)} // hover close
//       >
//         <span>
//           <i className={`fa-solid ${icon}`}></i> {title}
//         </span>
//         <i
//           className={`fa-solid fa-chevron-down chevron-icon ${
//             isOpen ? "rotate" : ""
//           }`}
//         ></i>
//       </div>

//       <div
//         className="resume-accordion-content"
//         style={{
//           maxHeight: isOpen ? "500px" : "0",
//           opacity: isOpen ? "1" : "0",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// const Resume = () => {
//   return (
//     <div className="resume-container">
//       <h2 className="resume-title">
//         <i className="fa-solid fa-user-doctor"></i> Resume / CV
//       </h2>

//       <div className="resume-sections">
//         <ResumeCard title="Personal Information" icon="fa-id-card" defaultOpen={true}>
//           <p>
//             <i className="fa-solid fa-user-tie resume-icon"></i>
//             <span className="resume-label">Full Name:</span> Professor Dr. S M Mustafa Zaman
//           </p>
//           <p>
//             <i className="fa-solid fa-user resume-icon"></i>
//             <span className="resume-label">Father's Name:</span> Md. Lokman Hakim
//           </p>
//           <p>
//             <i className="fa-solid fa-user resume-icon"></i>
//             <span className="resume-label">Mother's Name:</span> Mrs. Hasina Hakim
//           </p>
//           <p>
//             <i className="fa-solid fa-hospital resume-icon"></i>
//             <span className="resume-label">Professional Address:</span> <br />
//             Professor of Interventional Cardiology, Department of Cardiology, <br />
//             Bangabandhu Sheikh Mujib Medical University, <br />
//             Shahbag, Dhaka-1000, Bangladesh.
//           </p>
//           <p>
//             <i className="fa-solid fa-envelope resume-icon"></i>
//             <span className="resume-label">Email:</span>{" "}
//             <a href="mailto:mustafazaman44@gmail.com" className="resume-email">
//               mustafazaman44@gmail.com
//             </a>
//           </p>
//         </ResumeCard>

//         <ResumeCard title="Educational Details" icon="fa-graduation-cap">
//                     <p>
//             <i className="fa-solid fa-user-tie resume-icon"></i>
//             <span className="resume-label">Full Name:</span> Professor Dr. S M Mustafa Zaman
//           </p>
//           <p>
//             <i className="fa-solid fa-user resume-icon"></i>
//             <span className="resume-label">Father's Name:</span> Md. Lokman Hakim
//           </p>
//           <p>
//             <i className="fa-solid fa-user resume-icon"></i>
//             <span className="resume-label">Mother's Name:</span> Mrs. Hasina Hakim
//           </p>
//           <p>
//             <i className="fa-solid fa-hospital resume-icon"></i>
//             <span className="resume-label">Professional Address:</span> <br />
//             Professor of Interventional Cardiology, Department of Cardiology, <br />
//             Bangabandhu Sheikh Mujib Medical University, <br />
//             Shahbag, Dhaka-1000, Bangladesh.
//           </p>
//           <p>
//             <i className="fa-solid fa-envelope resume-icon"></i>
//             <span className="resume-label">Email:</span>{" "}
//             <a href="mailto:mustafazaman44@gmail.com" className="resume-email">
//               mustafazaman44@gmail.com
//             </a>
//           </p>
//         </ResumeCard>

//         <ResumeCard title="Educational Background" icon="fa-book-medical">
//           Medical studies, specializations, certifications.
//         </ResumeCard>

//         <ResumeCard title="Post Graduate Training" icon="fa-stethoscope">
//           Residency, fellowships, interventional nephrology training.
//         </ResumeCard>

//         <ResumeCard title="Faculty Position" icon="fa-award">
//           Current faculty role, academic achievements.
//         </ResumeCard>
//       </div>
//     </div>
//   );
// };

// export default Resume;



export default function Resume({title}){


  return(
      <section className="cv-view">
         <p>Learn more about my experience, education, and professional journey.</p>
        <CVViewer />
      </section>
  )
}



