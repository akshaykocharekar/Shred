import React from "react";
import Layout from "../components/layouts/Layout";
import CircularGallery from "../components/CircularGallery";
import bg1 from "../../ShredAssests/bg_3.png";
import memeGif from "../../ShredAssests/animations/memes.gif";
import bgv from "../../ShredAssests/animations/bg_1.webm";
import shredmain from "../../ShredAssests/shredglasses.webm";
import buyNowBtn from "../../ShredAssests/buy now button.png";
import textMainPage from "../../ShredAssests/animations/text_main_page.webp";
import ScrollVelocity from "../components/ScrollVelocity";
import shred1 from "../../ShredAssests/shred.svg";
import "../Styles/Home.css";
import AboutSection from "../components/AboutSection";
const Home = () => {
  return (
    <Layout>
      {/* 🔳 Hero Section */}
      <div
        id="home"
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          backgroundColor: "black", // Just in case video doesn't load
          overflow: "hidden",
        }}
      >
        <video
          src={bgv}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Fade to black at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100px",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-17px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ position: "relative" }}>
            <video
              src={shredmain}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "300px",
                height: "480px",

                borderRadius: "20px",
              }}
              className="shred-video"
            />
            <img
              src={buyNowBtn}
              alt="Buy Now"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "180px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>

      {/* 📃 Text image below Buy Now */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <img
          src={textMainPage}
          alt="Main Text"
          style={{ width: "475px", height: "160px" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          marginBottom: "100px",
          marginTop: "10px",
          width: "100%",
        }}
      >
        {[...Array(18)].map((_, i) => (
          <img
            key={i}
            src={shred1}
            alt="down"
            style={{
              flex: 1,
              height: "32px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      {/* 🧠 Rive Animation Section */}
      <AboutSection />
      {/* 👇 Meme + Circular Gallery Section */}
      <div
        id="memes"
        style={{
          height: "450px",
          position: "relative",
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={memeGif}
          alt="Funny meme"
          style={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "450px",
            zIndex: 3,
          }}
        />
        <div style={{ height: "500px", position: "relative", top: "28%" }}>
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
