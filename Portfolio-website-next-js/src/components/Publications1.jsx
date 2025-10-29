import React from "react";

const PublicationCard = ({ title, link, authors, journal, pubdate }) => {
  return (
    <div className="card">
      <h3>
        <a href={link}>{title}</a>
      </h3>
      <div className="authors">{authors}</div>
      <div className="journal">{journal}</div>
      <div className="pubdate">{pubdate}</div>
      {/* <div className="actions">
        <a href="#">PDF</a>
        <a href="#">DOI</a>
        <a href="#">PubMed</a>
      </div> */}
    </div>
  );
};

// Main Publications component
const Publications = () => {
  return (
    <div className="pub-container">
      <div className="title">
        <i className="fa-solid fa-book-medical"></i> Publications
      </div>

      <div className="timeline">
        {/* Year 2024 */}
        <div className="year">2023</div>

        {/* Left card */}
        <div className="left">
          <PublicationCard
            title="Relationship between Renal Function and Bone Mineral Density in Postmenopausal Women"
            link="https://pubmed.ncbi.nlm.nih.gov/36594314/"
            authors={
              <>
              Fatima K, <span className="highlight">Razzak MA</span>, Latif A, Hai MA, Shahidullah M, Hasan MS, Rahman HM, Rahman MH, Dowel FA
              </>
            }
            journal="BJCTA — volume:8, Number:1"
            pubdate="Published:Jan, 2023"
          />
        </div>
        <div className="center left">
          <span className="dot-left"></span>
        </div>
        <div className="right"></div>

        {/* Right card */}
        {/* <div className="left"></div>
        <div className="center right">
          <span className="dot-right"></span>
        </div>
        <div className="right">
          <PublicationCard
            title="Interventional Techniques in AKI"
            link="#"
            authors={
              <>
                M. Chowdhury, <span className="highlight">Prof. Dr. Mustafa Zaman</span>
              </>
            }
            journal="Journal of Critical Nephrology — Vol.4"
            pubdate="Published: Feb 28, 2024"
          />
        </div> */}

        {/* Year 2023 */}
        <div className="year">2021</div>

        {/* Left card */}
        {/* <div className="left">
          <PublicationCard
            title="Effect of Treatment X on Kidney Function"
            link="#"
            authors={
              <>
                A. Smith, <span className="highlight">Prof. Dr. Mustafa Zaman</span>, J. Doe
              </>
            }
            journal="Journal of Nephrology — Vol.12"
            pubdate="Published: Mar 15, 2023"
          />
        </div>
        <div className="center left">
          <span className="dot-left"></span>
        </div>
        <div className="right"></div> */}

        {/* Right card */}
        <div className="left"></div>
        <div className="center right">
          <span className="dot-right"></span>
        </div>
        <div className="right">
          <PublicationCard
            title="Neutrophil Gelatinase-Associated Lipocalin (NGAL) and
                Progression of Acute Kidney Injury (AKI): A Study in a
                Tertiary Care Hospital"
            link="#"
            authors={
              <>
                GM. Sadik Hasan1,<span className="highlight">Prof. Dr. Mustafa Zaman</span>Md. Rasul Amin, Mostashirul Haque,Mohammad Faisal Ibn Kabir, Mohammad Shakhawat Alam, Sourov Saha
              </>              
            }
            journal="International Journal of Medicine — Vol.8"
            pubdate="Published: Jul 7, 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default Publications;
