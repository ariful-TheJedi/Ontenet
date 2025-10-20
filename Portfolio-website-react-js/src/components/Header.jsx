import React,{useState,useEffect} from 'react';
import { Routes, Route, Link,NavLink } from "react-router-dom";
import '../App.css';
import logoImg from "../assets/logo.png"



const Logo = () => (
 <a href='/' alt="abdur razzak">
  <div className="logo-container">
    {/* Replace "path/to/your/logo.svg" with the actual path to your logo image */}
    <img src={logoImg} alt="dr.abdurrazzak transplant nephrologist medicine Bangladesh" className="logo-image" />
    <div className="logo-text">
      <span className="main-text">Dr. Muhammad Abdur Razzak</span>
      <span className="main-text-bold">Transplant Nephrologist</span>
      {/* <span className="sub-text">Research</span> */}
    </div>
  </div>
  </a> 
);


const Header = () => {

   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Function to update state on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (<>
     {screenWidth >= 1200 ? <DeskHeader/> : <HeaderMobile/>}
    </>
  );
};



///desktop header
function DeskHeader(){

  const navLinks = [
    'CV',
    'Blogs',
    'Videos',
    'Gallery',
  ];

  return (<header className="header">
      {/* <div className="header-top-border"></div> */}
      <nav className="header-nav">
        <Logo />
        <ul className="nav-links">
          <li>
              <NavLink
                to="/"
                 className={({ isActive }) => (isActive ? "active-link" : "")}
              >
               Home
              </NavLink>
          </li>
          <li>
              <NavLink
                to="about-me"
                 className={({ isActive }) => (isActive ? "active-link" : "")}
              >
               About Me
              </NavLink>
          </li>
          {navLinks.map((link) => (
            <li key={link}>
              <NavLink
                to={link}
                 className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {link}
              </NavLink>
            </li>
          ))}
            <li>
              <NavLink
                to="certificate-award"
                 className={({ isActive }) => (isActive ? "active-link" : "")}
              >
               Certificate & Award
              </NavLink>
          </li>
                      <li>
              <NavLink
                to="contact"
                 className={({ isActive }) => (isActive ? "active-link" : "")}
              >
               Contact
              </NavLink>
          </li>
        </ul>
      </nav>
    </header>)
}


//mobile header
function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-mobile">
      <div className="header-container">
        {/* Logo */}
        <Logo/>
        {/* Hamburger Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </div>
      </div>

      {/* Navigation (expands top → bottom) */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
            <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/about-me">About Me</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/CV">CV</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/publications">Publication</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/blogs">Blogs</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/Videos">Videos</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/gallery">Gallery</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/certificate-award">Certificate & Award</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}



export default Header;