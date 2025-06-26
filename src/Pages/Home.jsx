import React from "react";
import Layout from "../components/layouts/Layout";
import CircularGallery from "../components/CircularGallery";
import bg1 from "../../ShredAssests/bg_3.png";
import memeGif from "../../ShredAssests/animations/memes.gif";
import bgv from "../../ShredAssests/animations/bg_1.webm";
import shredmain from "../../ShredAssests/shredglasses.webm";
import buyNowBtn from "../../ShredAssests/buy now button.png";
import textMainPage from "../../ShredAssests/animations/text_main_page.webp";
import RiveLayout from "../components/RiveLayout";
import ScrollVelocity from "../components/ScrollVelocity";
import shred1 from "../../ShredAssests/shred.svg";
const Home = () => {
  const velocity = 90.5;
  return (
    <Layout>
      {/* 🔳 Hero Section */}
      <div
        id="home"
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
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
                borderRadius: "20px",
              }}
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
      ;{/* 📃 Text image below Buy Now */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={textMainPage}
          alt="Main Text"
          style={{ width: "550px", height: "160px" }}
        />
      </div>
      <ScrollVelocity
        texts={[
          <div>
            <img src={shred1} alt="down" style={{ height: "32px" }} />
            <img src={shred1} alt="down" style={{ height: "32px" }} />
            <img src={shred1} alt="down" style={{ height: "32px" }} />
          </div>,
        ]}
        velocity={90.5}
      />
      {/* 🧠 Rive Animation Section */}
      <div style={{ marginTop: 0, paddingTop: 0 }}>
        <RiveLayout />
      </div>
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
            width: "350px",
            zIndex: 3,
          }}
        />
        <div style={{ height: "500px", position: "relative", top: "30%" }}>
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
