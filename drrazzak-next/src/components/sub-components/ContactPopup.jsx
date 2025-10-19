"use client";
import React from "react";
import Link from "next/link";

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactInfo = {
    phone: "+88 01604707090",
    email: "sufisabih@gmail.com",
    address:
      "Popular Diagnostic Center Limited, Dhanmondi, Dhaka, Building-6, Floor-5th, Room-508, Dhaka, Bangladesh",
    whatsapp: "+88 01604707090",
    twitter: "https://x.com/abdurrazzak103",
    facebook: "https://www.facebook.com/nephrology.bd/",
    linkedin:
      "https://www.linkedin.com/in/muhammad-abdur-razzak-mbbs-md-fasn-60a594128/",
    youtube: "https://www.youtube.com/@dr.muhammadabdurrazzak9632",
  };

  return (
    <div className="contact-popup-overlay" onClick={onClose}>
      <div
        className="contact-popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="contact-popup-close" onClick={onClose}>
          <span>x</span>
        </button>

        <h2 className="contact-popup-title">Get in Touch</h2>
        <div className="contact-popup-info">
          <p><i className="fas fa-phone"></i> {contactInfo.phone}</p>
          <p><i className="fas fa-envelope"></i> {contactInfo.email}</p>
          <p><i className="fas fa-map-marker-alt"></i> {contactInfo.address}</p>
          <p><i className="fab fa-whatsapp"></i> {contactInfo.whatsapp}</p>
        </div>

        <center>
          <Link onClick={onClose} className="contact-popup-button" href="/contact">
            More Contact
          </Link>
        </center>

        <div className="contact-popup-social">
          <a href={contactInfo.twitter} target="_blank" rel="noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href={contactInfo.facebook} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={contactInfo.youtube} target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
