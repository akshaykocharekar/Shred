import React from "react";
import Silk from "../Slik.jsx"; // this is your existing Silk.jsx

const SilkOverlay = ({
  speed = 11.8,
  scale = 0.9,
  color = "#47040a",
  noiseIntensity = 3.2,
  rotation = 3.19,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none", // so it doesn't block buttons/hover
      }}
    >
      <Silk
        speed={speed}
        scale={scale}
        color={color}
        noiseIntensity={noiseIntensity}
        rotation={rotation}
      />
    </div>
  );
};

export default SilkOverlay;
