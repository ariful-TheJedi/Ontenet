import React from "react";

const LegalTerms = ({ title, updatedDate, sections }) => {
  return (
    <section className="legalterm-container">
      <h1 className="legalterm-title">{title}</h1>
      <p className="legalterm-updated">Last Updated: {updatedDate}</p>

      <div className="legalterm-content">
        {sections.map((section, index) => (
          <div key={index} className="legalterm-section">
            <h2 className="legalterm-heading">{section.heading}</h2>
            <p className="legalterm-text">{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalTerms;