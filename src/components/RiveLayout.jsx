import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const RiveLayout = () => {
  const STATE_MACHINE_NAME = "State Machine 1"; // ✅ Change if needed
  const X_INPUT = "x";
  const Y_INPUT = "y";

  const { rive, RiveComponent } = useRive({
    src: "/ShredAssests/animations/shred_head.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const xInput = useStateMachineInput(rive, STATE_MACHINE_NAME, X_INPUT);
  const yInput = useStateMachineInput(rive, STATE_MACHINE_NAME, Y_INPUT);

  // 🖱️ Mouse-based interactivity
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
        <p>
          Welcome to our interactive zone where design meets motion. This left
          section gives insight into how intelligent visuals can amplify user
          experience and engagement. Whether you're building for fun or a brand,
          animation can emotionally connect users.
        </p>
      </div>

      {/* Center Rive Animation */}
      <div style={styles.riveSection}>
        <RiveComponent style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Right Paragraph */}
      <div style={styles.textSection}>
        <p>
          Powered by Rive’s state machine, this dynamic animation reacts to your
          cursor movement in real-time. The future of interfaces is interactive
          — and it starts right here. Explore, hover, and watch it come alive.
        </p>
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
    flex: "1",
    minWidth: "280px",
    maxWidth: "400px",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    textAlign: "justify",
  },
  riveSection: {
    flex: "1.5",
    minWidth: "400px",
    maxWidth: "600px",
    height: "500px", // 👈 Bigger animation
  },
};

export default RiveLayout;
