import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import shred_head from "../../ShredAssests/animations/shred_head.riv";
import ScrambledText from "../components/ScrambledText";

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
    <div style={styles.container}>
      {/* Left Paragraph */}
      <div style={styles.textSection}>
        <ScrambledText
          className="scrambled-text-demo"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          pariatur dignissimos porro eius quam doloremque et enim velit nobis
          maxime.
        </ScrambledText>
      </div>

      {/* Center Rive Animation */}
      <div style={styles.riveSection}>
        <RiveComponent style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Right Paragraph */}
      <div style={styles.textSection}>
        <ScrambledText
          className="scrambled-text-demo"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          pariatur dignissimos porro eius quam doloremque et enim velit nobis
          maxime.
        </ScrambledText>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    color: "#ffffff",
  },
  textSection: {
    minWidth: "300px",
    maxWidth: "350px",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    textAlign: "justify",
    margin: "10px",
  },
  riveSection: {
    flex: "1.5",
    minWidth: "400px",
    maxWidth: "600px",
    height: "500px",
    margin: "10px",
  },
};

export default RiveLayout;
