// AboutSection.jsx
import React from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import riveimg from "../../ShredAssests/animations/shred_head.riv";
import abtgif from "../../ShredAssests/animations/about.gif";

const AboutSection = () => {
  const STATE_MACHINE_NAME = "State Machine 1"; // Replace with your actual state machine name
  const HOVER_INPUT = "hover"; // Replace with your actual input name

  const { rive, RiveComponent } = useRive({
    src: riveimg,
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const hoverInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    HOVER_INPUT
  );

  return (
    <section
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "4rem 1rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        <img src={abtgif} alt="About GIF" style={{ maxWidth: "100%" }} />
      </h2>

      <div
        id="about"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            maxWidth: "300px",
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "monospace",
            marginRight: "-60px",
          }}
          className="about-text-left"
        >
          A world built for the brave. Where risk isn’t something you dodge —
          it’s something you master. This is where Shred was born. Forged in
          market chaos, fueled by meme culture, made for those who move smart
          and bold.
        </p>

        <div
          style={{ width: "380px", height: "380px" }}
          onMouseEnter={() => hoverInput && (hoverInput.value = true)}
          onMouseLeave={() => hoverInput && (hoverInput.value = false)}
        >
          <RiveComponent style={{ width: "100%", height: "100%" }} />
        </div>

        <p
          style={{
            maxWidth: "300px",
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "monospace",
            marginLeft: "-60px",
          }}
          className="about-text-right"
        >
          He’s not a mascot. Not a hero. Not your average meme. Shred is a
          signal. A vibe. A living pulse of a community that moves different.
          When the markets bleed, the weak log off — but Shred’s still there.
          Tail wagging. Teeth out. A protector of the sharp, the brave, and the
          ones who turn losses into comebacks.
        </p>
      </div>

      {/* Inline mobile styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .about-text-left,
            .about-text-right {
              margin: 0 !important;
              text-align: center;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
