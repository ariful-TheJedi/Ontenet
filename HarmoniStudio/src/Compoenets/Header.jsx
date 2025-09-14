import React from "react";

export default function Header({setActive,currentComp}) {

  console.log(currentComp);
  return (
    <header className="header fixed-bottom">
      <div onClick={() => setActive("Home")} className="logo d-flex justify-content-between align-items-center">
          <img src="https://attestdesign.com/wp-content/themes/ktad/img/logo-icon.png"/>
        <h5 className="text-white">H-Studio</h5>
      </div>
      <nav className="nav container d-flex  bg-light">
        <a onClick={() => setActive("About")} href="#about" className="flex-fill text-decoration-none">
          About
        </a>
        <a onClick={() => setActive("Projects")} href="#projects" className="flex-fill text-decoration-none">
          Projects
        </a>
        <a onClick={() => setActive("Contact")} href="#contact" className="flex-fill text-decoration-none">
          Contact
        </a>
      </nav>
      <img className="noise-fiter-img" src="https://harmoniestudio.eu/assets/brush/harmonie_studio-brush-desktop.png"/>
    </header>
  );
}
