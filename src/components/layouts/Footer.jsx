import React from "react";
import Aurora from "../Aurora";
import telegramIcon from "../../../ShredAssests/icons/telegram.svg";
import twitterIcon from "../../../ShredAssests/icons/x-social.svg";
import chainIcon from "../../../ShredAssests/icons/dextools.svg";
import owlIcon from "../../../ShredAssests/icons/dex-screener.svg";
import pawVideo from "../../../ShredAssests/animations/paw.webm";

import "../../Styles/Footer.css";
import GlitchText from "../GlitchText";

const Footer = () => {
  return (
    <>
      <footer id="socials" className="footer">
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={true}
          className="custom-class"
        >
          SOCIALS
        </GlitchText>

        <div className="paw">
          <video src={pawVideo} autoPlay loop muted playsInline />
        </div>
        <div className="socials-wrapper">
          <a
            href="https://t.me/yourTelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
          >
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a
            href="https://twitter.com/yourTwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
          >
            <img src={twitterIcon} alt="X (Twitter)" />
          </a>
          <a
            href="https://www.dextools.io/app"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
          >
            <img src={chainIcon} alt="DexTools" />
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
          >
            <img src={owlIcon} alt="Dex Screener" />
          </a>
        </div>
      </footer>

      <Aurora
        colorStops={["#660000", "#FF0010", "#660000"]}
        amplitude={0.9}
        blend={0.7}
      />
    </>
  );
};

export default Footer;
