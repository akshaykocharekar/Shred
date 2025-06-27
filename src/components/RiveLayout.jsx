import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import shred_head from "../../ShredAssests/animations/shred_head.riv";
import aboutgif from "../../ShredAssests/animations/about.gif";
import "../Styles/RiveLayout.css";

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
    <section className="rive-wrapper">
      <div id="about" className="rive-about">
        <img src={aboutgif} alt="About GIF" />
      </div>

      <div className="rive-content">
        <div className="rive-text left-text">
          A world built for the brave. Where risk isn't something you dodge —
          it's something you master. This is where Shred was born. Forged in
          market chaos, fueled by meme culture, made for those who move smart
          and bold.
        </div>

        <div className="rive-animation">
          <RiveComponent className="rive-canvas" />
        </div>

        <div className="rive-text right-text">
          He's not a mascot. Not a hero. Not your average meme. Shred is a
          signal, a vibe. A living pulse of a community that moves different.
          When the markets bleed, the weak log off — but Shred's still there.
          Tail wagging. Teeth out. A protector of the sharp, the brave, and the
          ones who turn losses into comebacks.
        </div>
      </div>
    </section>
  );
};

export default RiveLayout;
