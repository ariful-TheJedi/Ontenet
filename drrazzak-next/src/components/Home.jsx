"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ✅ All media files (images, svg, etc.) are directly used from /public
import HomeLatestPosts from "@/components/LatestPost";
import { useBackgroundLoader } from "@/components/Hooks/BgWrapper";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// -------------------- Hero Section --------------------
const Hero = () => {
  const [boxHeight, setBoxHeight] = useState("700px");

  const bgurl = useBackgroundLoader(
    "https://ontenet-cdn.pages.dev/hero-bg-img.png",
    "https://ontenet-cdn.pages.dev/bg-gif-hero.gif"
  );

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      setBoxHeight(width < 500 ? "auto" : "700px");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      className="home-hero-section"
      style={{
        background: `url(${bgurl}) no-repeat center/cover, linear-gradient(135deg, rgba(17,93,169,0.95), rgba(43,146,164,0.95))`,
      }}
    >
      <div className="home-hero-inner">
        <div className="home-hero-content">
          <span className="home-hello-bedge">Hello!</span>
          <h1 className="home-hero-name">
            I'm <br />{" "}
            <span className="home-hero-name-highlight">
              Dr. Muhammad Abdur Razzak
            </span>
          </h1>
          <h2 className="home-hero-title">Transplant Nephrologist</h2>

          <p className="home-hero-tagline">
            Focused on transplant nephrology to fight kidney disease and give
            patients new chances at life.
          </p>

          <div className="home-hero-experience">
            <span className="home-hero-stars">
              <h2>★★★★★</h2>
            </span>
            <span className="home-hero-years">18 Years+ Experience</span>
          </div>
        </div>

        <div className="home-hero-image-wrap">
          <Image
            src={`${API_URL}/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-compressed.webp`}
            alt="Dr. Muhammad Abdur Razzak transplant nephrologist"
            className="home-hero-image"
            loading="lazy"
            style={{ height: boxHeight, width: "auto" }}
            unoptimized // important for remote images + static export
            width={500} // required numeric width (used for aspect ratio only)
            height={500} // required numeric height
          />
        </div>
      </div>
    </section>
  );
};

// -------------------- About Section --------------------
const About = () => {
  return (
    <section className="home-aboute-section">
      <div className="home-aboute-images">
        <img
          src={
            API_URL +
            "/wp-content/uploads/2025/10/abt-home-dr-muhammad-razzak.jpg"
          }
          alt="Profile doctor with patient dr. mohammad abdur razzak transplant nephrologist"
        />
        <img
          src={
            API_URL +
            "/wp-content/uploads/2025/10/home-abt-dr-razzak-toronto.jpg"
          }
          alt="Profile doctor with dr.muhammad abdur razzak transplant nephrologist "
        />
      </div>

      <div className="home-aboute-content">
        <div className="home-aboute-info">
          <h2>Dr. Muhammad Abdur Razzak</h2>
          <h3>MBBS (AFMC), MD (Nephrology), FASN (USA)</h3>
          <p>
            Renowned Transplant Nephrology Specialist in Bangladesh.
            <br />
            Dr. Muhammad Abdur Razzak is a distinguished kidney specialist with
            over a decade of clinical experience in Transplant nephrology. He
            possesses an MBBS degree from Armed Forces Medical College (AFMC),
            an MD in Nephrology, and Fellow of the American Society of
            Nephrology (FASN, USA). Being an Assistant Professor at the
            National Institute of Kidney Diseases and Urology, Bangladesh,
            presently, Dr. Razzak is well renowned internationally for his
            extensive experience in managing chronic kidney disease, dialysis
            therapy, and renal transplant evaluation.
            <br />
          </p>
        </div>

        <div className="home-aboute-actions">
          <a
            href={API_URL + "/wp-content/uploads/2025/10/hero-1.png"}
            download
            className="home-aboute-btn home-aboute-btn-download"
          >
            Download CV
          </a>
          <a href="/about-me" className="home-aboute-btn home-aboute-btn-learn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

// -------------------- Qualification Section --------------------
const Qualification = () => (
  <section className="hom-qualifications-section">
    <div className="hom-qualifications-edu">
      <h2>
        <i className="fa-solid fa-user-graduate"></i> Education & Career
      </h2>
      <div className="hom-qualifications-timeline">
        <div className="hom-qualifications-item">
          <div className="hom-qualifications-text">
            <h3>Assistant Professor (Nephrology)</h3>
            <p>
              Dhaka Medical College and Hospital, Dhaka <br />
              From: 01-12-2019 to 25-03-2020
            </p>
          </div>
        </div>

        <div className="hom-qualifications-item">
          <div className="hom-qualifications-text">
            <h3>Assistant Professor (Department of Nephrology)</h3>
            <p>
              Dhaka Medical College and Hospital, Dhaka <br />
              From: 22-12-2021 to 07-06-2022
            </p>
          </div>
        </div>

        <div className="hom-qualifications-item">
          <div className="hom-qualifications-text">
            <h3>Clinical Fellow (General Adult Nephrology)</h3>
            <p>
              University of Toronto, Canada <br />
              From: July 2022 to June 2024
            </p>
          </div>
        </div>

        <div className="hom-qualifications-item">
          <div className="hom-qualifications-text">
            <h3>Assistant Professor (Department of Nephrology)</h3>
            <p>
              National Institute of Kidney Diseases and Urology, Dhaka <br />
              From: 2025 to present
            </p>
          </div>
        </div>
      </div>

      <div className="hom-qualifications-btn-container">
        <Link href="/cv" className="hom-qualifications-btn">
          Learn More
        </Link>
      </div>
    </div>

    <div className="hom-qualifications-awards">
      <h2>
        <i className="fa-solid fa-award"></i> Awards
      </h2>

      <div className="hom-qualifications-award">
        <i className="fa-solid fa-certificate"></i>
        <div>
          <h3>Certificate of Participation</h3>
          <p>ASN/AST Transplant Nephrology Core Curriculum (TNCC) 2019</p>
        </div>
      </div>

      <div className="hom-qualifications-award">
        <i className="fa-solid fa-medal"></i>
        <div>
          <h3>Fellow American Society of Nephrology (FASN)</h3>
          <p>Recognition of excellence in nephrology practice</p>
        </div>
      </div>

      <div className="hom-qualifications-btn-container home-qualification-btn-award">
        <Link href="/certificate-award" className="hom-qualifications-btn">
          Learn More
        </Link>
      </div>
    </div>
  </section>
);

// -------------------- Videos Section --------------------
const HomeVideoSection = () => (
  <section className="home-video-section">
    <div className="home-video-header">
      <h2 className="home-video-title">Some of My Videos</h2>
    </div>

    <div className="home-video-grid">
      {["xNnJJWm9UaM", "IML3_aoOyBI", "x9plPCcXnzQ"].map((id) => (
        <div key={id} className="home-video-card">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>

    <div className="home-video-footer">
      <Link href="/videos" className="home-video-more-btn">
        View More
      </Link>
    </div>
  </section>
);

// -------------------- Contact Section --------------------
const HomeContact = () => {
  // State for managing form submission status
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    succeeded: false,
    error: null,
  });

  useEffect(() => {
    const element = document.querySelector(".home-contact-header");
    if (element) {
      element.style = `
        background: url(${API_URL}/wp-content/uploads/2025/10/contact-background.jpg)
        no-repeat center center / cover;
      `;
    }
  }, []);

  // Handle form submission with AJAX/Fetch
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Stop the default browser redirect
    setFormStatus({ submitting: true, succeeded: false, error: null });

    const form = event.target;
    const data = new FormData(form);
    const formAction = "https://formspree.io/f/mgvndbjk"; // <-- *** GURUTTWOPURNO: Ekhane apnar Formspree ID din ***

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json' // This tells Formspree to send a JSON response
        }
      });

      if (response.ok) {
        setFormStatus({ submitting: false, succeeded: true, error: null });
        form.reset();
        // Clear the success message after 5 seconds
        setTimeout(() => {
            setFormStatus({ submitting: false, succeeded: false, error: null });
        }, 5000);
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          throw new Error(responseData.errors.map(error => error.message).join(", "));
        } else {
          throw new Error('An error occurred while submitting the form.');
        }
      }
    } catch (error) {
      setFormStatus({ submitting: false, succeeded: false, error: error.toString() });
    }
  };

  return (
    <div className="home-contact-wrapper">
      <header className="home-contact-header">
        <div className="home-contact-header-overlay">
          <h1 className="home-contact-header-title">
            Find & Contact With Me
          </h1>
          <p className="home-contact-header-subtitle">
            Reach out for appointments and consultations
          </p>
        </div>
      </header>

      <section className="home-contact-section">
        <div className="home-contact-grid"> {/* This is the parent grid */}
          
          {/* First child: Contact Info */}
          <div className="home-contact-info home-contact-fade-in">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                Popular Diagnostic Center Limited, Dhanmondi, Dhaka, Bangladesh
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> +88 01604707090
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> sufisabih@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-clock"></i> Available: All Day, 10:00
                AM - 6:00 PM
              </li>
              <li>
                <i className="fa-brands fa-whatsapp"></i> WhatsApp QR below
              </li>
            </ul>

            <div className="home-contact-whatsapp">
              <img src="/home-qr-whatsapp.svg" alt="WhatsApp QR" />
            </div>
          </div>

          {/* Second child: Contact Form */}
          <div
            id="make-contact"
            className="home-contact-form-container wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="home-contact-form-inner">
              <h1 className="home-contact-form-title">Schedule an Appointment</h1>
              <form id="contact-form" onSubmit={handleFormSubmit}>
                <div className="home-form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input type="text" name="name" required className="home-form-control" id="fullName" placeholder="" />
                </div>
                <div className="home-form-group">
                  <label htmlFor="emailAddress">E-mail Address*</label>
                  <input type="email" name="email" required className="home-form-control" id="emailAddress" placeholder="" />
                </div>
                <div className="home-form-group-full-width">
                  <label htmlFor="subject">Subject*</label>
                  <input type="text" name="subject" required className="home-form-control" id="subject" placeholder="" />
                </div>
                <div className="home-form-group-full-width">
                  <label htmlFor="message">Message*</label>
                  <textarea name="message" required className="home-form-control home-textarea" id="message" rows="6" placeholder=""></textarea>
                </div>
                <div className="home-form-group-full-width">
                  <button type="submit" className="home-send-message-btn" disabled={formStatus.submitting}>
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
              
              {/* ✅ Status Message Area */}
              <div className="form-status-message" style={{marginTop: '10px', textAlign: 'center', minHeight: '10px', transition: 'opacity 0.5s ease'}}>
                  {formStatus.succeeded && (
                      <p style={{ color: 'white', fontWeight: 'bold' }}>
                          Thank you for your message. It has been sent.
                      </p>
                  )}
                  {formStatus.error && (
                      <p style={{ color: '#ffcccc', fontWeight: 'bold' }}>
                          {formStatus.error}
                      </p>
                  )}
              </div>

            </div>
          </div>
          {/* End of the new form */}

        </div> {/* Closes home-contact-grid */}
      </section> {/* Closes home-contact-section */}
    </div> /* Closes home-contact-wrapper */
  );
};

// -------------------- Home Page Wrapper --------------------
export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <About />
      <Qualification />
      <HomeLatestPosts />
      <HomeVideoSection />
      <HomeContact />
    </div>
  );
}

