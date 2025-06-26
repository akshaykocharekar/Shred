import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../Styles/Navbar.css";
import logo from "../../../ShredAssests/logo2.png";

const sections = ["home", "about", "memes", "socials"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="navbar fantasy-navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {/* Floating Glowing Logo */}
      <motion.div className="navbar-logo-box">
        <motion.img
          src={logo}
          alt="Logo"
          className="navbar-logo"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* Nav Links */}
      <div className={`navbar-links ${menuOpen ? "mobile-active" : ""}`}>
        {sections.map((section, i) => (
          <motion.div
            key={section}
            className={`nav-item ${activeSection === section ? "active" : ""}`}
            onClick={() => scrollToSection(section)}
            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px red" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {section.toUpperCase()}
          </motion.div>
        ))}
      </div>

      {/* Hamburger */}
      <motion.div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 1.1 }}
        whileHover={{ scale: 1.2 }}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
