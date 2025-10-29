'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';



const Logo = () => (
  <Link href="/" aria-label="Dr. Abdur Razzak">
    <div className="logo-container">
      <Image
        src="/logo.png"
        alt="dr.abdurrazzak transplant nephrologist medicine Bangladesh"
        className="logo-image"
        height={20}
        width={20}
      />
      <div className="logo-text">
        <span className="main-text">Dr. Muhammad Abdur Razzak</span>
        <span className="main-text-bold">Transplant Nephrologist</span>
      </div>
    </div>
  </Link>
);

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Avoid SSR window error
    const handleResize = () => setScreenWidth(window.innerWidth);
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{screenWidth >= 1200 ? <DeskHeader /> : <HeaderMobile />}</>;
};

export default Header;

//
// Desktop Header
//
function DeskHeader() {
  const navLinks = [
    { href: '/CV', label: 'CV' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/videos', label: 'Videos' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/awards', label: 'Awards' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <nav className="header-nav">
        <Logo />
        <ul className="nav-links">
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about">About</ActiveLink>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <ActiveLink href={link.href}>{link.label}</ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


// Mobile Header(old stable)
// function HeaderMobile() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const links = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About' },
//     { href: '/CV', label: 'CV' },
//     { href: '/blogs', label: 'Blogs' },
//     { href: '/videos', label: 'Videos' },
//     { href: '/gallery', label: 'Gallery' },
//     { href: '/awards', label: 'Awards' },
//     { href: '/contact', label: 'Contact' },
//   ];



//   return (
//     <header className="header-mobile">
//       <div className="header-container">
//         <Logo />
//         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//           <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
//         </div>
//       </div>

//       <nav className={`header-nav-mobile ${menuOpen ? 'open' : ''}`}>
//         <ul>
//           {links.map((link) => (
//             <li key={link.href} onClick={() => setMenuOpen(false)}>
//               <Link href={link.href}>{link.label}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }




 function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/CV", label: "CV" },
    { href: "/blogs", label: "Blogs" },
    { href: "/videos", label: "Videos" },
    { href: "/gallery", label: "Gallery" },
    { href: "/awards", label: "Awards" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="header-mobile">
      <div className="header-container">
        <Logo />
        <button
          className="menu-icon"
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* ALWAYS in the DOM — only class toggles */}
      <nav
        id="mobile-nav"
        className={`header-nav-mobile ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}




//
// Active Link Component for Next.js
//
import { usePathname } from "next/navigation";

function ActiveLink({ href, children }) {
  const pathname = usePathname();

  // Handle nested active states
  const isActive =
    pathname === href ||
    (href === "/blogs" && pathname.startsWith("/post/")) ||
    (href === "/gallery" && pathname.startsWith("/images/"));

  return (
    <Link href={href} className={isActive ? "active-link" : ""}>
      {children}
    </Link>
  );
}

