import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import shred_head from "../../ShredAssests/animations/shred_head.riv";

import "../Styles/RiveLayout.css"; //
import aboutgif from "../../ShredAssests/animations/about.gif";
const RiveLayout = () => {
  const STATE_MACHINE_NAME = "State Machine 1";
  const X_INPUT = "x";
  const Y_INPUT = "y";

  const { rive, RiveComponent } = useRive({
    src: shred_head,
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const xInput = useStateMachineInput(rive, STATE_MACHINE_NAME, X_INPUT);
  const yInput = useStateMachineInput(rive, STATE_MACHINE_NAME, Y_INPUT);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (xInput && yInput) {
        const normalizedX = e.clientX / window.innerWidth;
        const normalizedY = e.clientY / window.innerHeight;
        xInput.value = normalizedX;
        yInput.value = normalizedY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [xInput, yInput]);

  return (
    <section
      className="rive-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 1rem",
        backgroundColor: "#000",
        color: "#fff",
        flexWrap: "wrap", // ensures mobile responsiveness
      }}
    >
      <div id="about" className="rive-about" style={{ marginBottom: "-60px" }}>
        <img src={aboutgif} alt="About GIF" />
      </div>

      <div
        className="rive-content"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "0px", // 👈 removes space between items
          flexWrap: "wrap", // keeps it mobile-friendly
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          className="rive-text"
          style={{
            flex: "1",
            minWidth: "280px",

            padding: "10px",
          }}
        >
          <div
            style={{
              fontFamily: "",
              marginTop: "60px",
            }}
          >
            {
              "A world built for the brave. Where risk isn't something you dodge — it's something you master. This is where Shred was born. Forged in market chaos, fueled by meme culture, made for those who move smart and bold. He's not a mascot. Not a hero. Not your average meme. Shred is a signal, a vibe. A living pulse of a community that moves different."
            }
          </div>
        </div>

        <div
          className="rive-animation"
          style={{
            flex: "1",
            minWidth: "280px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-40px",
          }}
        >
          <RiveComponent className="rive-canvas" />
        </div>

        <div
          className="rive-text"
          style={{
            flex: "1",
            minWidth: "380px",
            padding: "10px",
          }}
        >
          <div
            style={{
              marginTop: "-40px",
            }}
          >
            {
              "He's not a mascot. Not a hero. Not your average meme. Shred is a signal, a vibe. A living pulse of a community that moves different. When the markets bleed, the weak log off — but Shred's still there. Tail wagging. Teeth out. A protector of the sharp,the brave, and the ones who turn losses into comebacks."
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiveLayout;
