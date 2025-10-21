import React from "react";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
<div className="footer-section footer-center">
  <div className="footer-logo">
    <img src="/footer.png" alt="dr muhammad abdur razzak"/>
  </div>
    <p className="footer-text">
    Focused as a transplant nephrologist on fighting kidney disease and giving patients new chances at life.
  </p>
</div>

{/* Company */}
<div className="footer-section footer-section-underline">
  {/* <h3 className="footer-title">Company</h3> */}
  <ul>
    <span style={{dispaly:"inline-block"}}>Help & Support</span>
    <li><a href="/contact">Contact</a></li>
      <li><a href="/publications">Publications</a></li>
      <li><a href="/privacy-policy">Privacy & Policy</a></li>
      <li><a href="/terms-conditions">Terms and Conditions</a></li>
  </ul>
</div>
<div className="footer-section footer-section-socials">
     <div className="social-links-container">
    <h4 className="footer-social-title">Connect With Me</h4>
    <ul className="social-links">
      <li><a href="https://www.facebook.com/nephrology.bd/"><i className="fa-brands fa-facebook-f"></i></a></li>
      <li><a href="https://x.com/abdurrazzak103"><i className="fa-brands fa-x-twitter"></i></a></li>
      <li><a href="https://www.youtube.com/@dr.muhammadabdurrazzak9632"><i className="fa-brands fa-youtube"></i></a></li>
      <li><a href="https://www.linkedin.com/in/muhammad-abdur-razzak-mbbs-md-fasn-60a594128/"><i className="fa-brands fa-linkedin-in"></i></a></li>
    </ul>
  </div>
</div>
</div>
      {/* Bottom Bar */}
<div className="footer-bottom">
   <span>Copyright Dr. Muhammad Abdur Razzak © 2025</span> <span>Develop & Designed by <a className="brand" href="https://ontenet.digital">Ontenet Digital Ltd.</a></span>
</div>
</footer>
  );
}
