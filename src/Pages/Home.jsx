import React from "react";
import Layout from "../components/layouts/Layout";
import CircularGallery from "../components/CircularGallery";
import bg1 from "../../ShredAssests/bg_2.PNG";
import memeGif from "../../ShredAssests/animations/memes.gif"; // ✅ Correct import
import bgv from "../../ShredAssests/animations/bg_1.webm";
const Home = () => {
  return (
    <Layout>
      <video
        src={bgv}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          height: "450px",

          position: "relative",
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        {/* Centered GIF */}
        <img
          src={memeGif}
          alt="Funny meme"
          style={{
            position: "absolute",
            marginBottom: "31px",
            marginTop: "30px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "250px", // ⬅️ Make it bigger here
            zIndex: 3,
          }}
        />

        {/* Circular Gallery underneath or blended */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",

            zIndex: 2,
          }}
        >
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
