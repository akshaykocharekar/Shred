import React, { useEffect, useState } from "react";
import "../../Styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about", "memes", "socials"];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (let id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on click (mobile)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo-box">
        <img src="/ShredAssests/Logo.png" alt="Logo" className="navbar-logo" />
      </div>

      <div className={`navbar-links ${menuOpen ? "mobile-active" : ""}`}>
        {sections.map((section) => (
          <div
            key={section}
            className={`nav-item ${activeSection === section ? "active" : ""}`}
            onClick={() => scrollToSection(section)}
          >
            {section.toUpperCase()}
          </div>
        ))}
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
