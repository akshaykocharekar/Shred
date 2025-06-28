import Silk from "../Silk";

const SilkBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Silk
        speed={11.8}
        scale={0.9}
        color="#47040a"
        noiseIntensity={3.2}
        rotation={3.19}
      />
    </div>
  );
};

export default SilkBackground;
