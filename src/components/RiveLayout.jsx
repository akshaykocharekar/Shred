import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import shred_head from "../../ShredAssests/animations/shred_head.riv";
import ScrambledText from "../components/ScrambledText";
import GlitchText from "../components/GlitchText";
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
    <section className="rive-wrapper">
      <div id="about" className="rive-about">
        <img src={aboutgif} />
      </div>

      <div className="rive-content">
        <div className="rive-text">
          <ScrambledText
            id="about"
            className="scrambled-text-demo"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            pariatur dignissimos porro eius quam doloremque et enim velit nobis
            maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique pariatur dignissimos porro eius quam doloremque et enim
            velit nobis maxime. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique pariatur dignissimos porro eius quam
            doloremque et enim velit nobis maxime. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Similique pariatur dignissimos porro
            eius quam doloremque et enim velit nobis maxime.
          </ScrambledText>
        </div>

        <div className="rive-animation">
          <RiveComponent className="rive-canvas" />
        </div>
      </div>
    </section>
  );
};

export default RiveLayout;
