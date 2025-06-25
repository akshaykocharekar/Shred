import React from "react";
import Aurora from "../Aurora";
import telegramIcon from "../../../ShredAssests/icons/telegram.svg";
import twitterIcon from "../../../ShredAssests/icons/x-social.svg";
import chainIcon from "../../../ShredAssests/icons/dextools.svg";
import owlIcon from "../../../ShredAssests/icons/dex-screener.svg";
import pawVideo from "../../../ShredAssests/animations/paw.webm";

import "../../Styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="socials-wrapper">
          <p className="socials-text">SOCIALS</p>
          <div className="icons">
            <img src={telegramIcon} alt="Telegram" />
            <img src={twitterIcon} alt="X" />
            <img src={chainIcon} alt="DexTools" />
            <img src={owlIcon} alt="Dex Screener" />
          </div>
        </div>
        <div className="paw">
          <video src={pawVideo} autoPlay loop muted playsInline />
        </div>
      </footer>
      <Aurora
        colorStops={["#660000", "#FF0000", "#660000"]} // Dark crimson → pure red → lava pink
        amplitude={2.5} // Stronger wave distortion
        blend={1.7} // Smoother fiery blending
      />
    </>
  );
};

export default Footer;
