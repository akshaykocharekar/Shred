import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import shred_head from "../../ShredAssests/animations/shred_head.riv";
import ScrambledText from "../components/ScrambledText";
import about from "../../ShredAssests/animations/about.gif";

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
    <section style={styles.wrapper}>
      <div style={styles.about}>
        <img src={about} alt="About" style={styles.aboutImg} />
      </div>

      <div style={styles.content}>
        <div style={styles.text}>
          <ScrambledText
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

        <div style={styles.rive}>
          <RiveComponent style={styles.riveCanvas} />
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    padding: "2rem 1rem",
    backgroundColor: "#000",
    boxSizing: "border-box",
  },
  about: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-1rem",
  },
  aboutImg: {
    width: "300px",
    maxWidth: "90%",
    display: "block",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 -10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexWrap: "wrap",
    color: "#fff",
  },
  text: {
    flex: "1",
    minWidth: "600px",
    maxWidth: "700px",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    textAlign: "justify",
    padding: "0 2rem",
  },
  rive: {
    flex: "1",
    minWidth: "500px",
    maxWidth: "500px",
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  riveCanvas: {
    width: "100%",
    height: "100%",
  },
};

export default RiveLayout;
