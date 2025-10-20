import React, { useState,useEffect } from "react";


export default function SrollTop(){
      const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

      // Scroll event listener for back to top button
      useEffect(() => {
        const handleScroll = () => {
          setIsBackToTopVisible(window.pageYOffset > 300);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      // Scroll to top function
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
    <button 
        className={`contact-back-to-top ${isBackToTopVisible ? 'contact-active' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
      )
}