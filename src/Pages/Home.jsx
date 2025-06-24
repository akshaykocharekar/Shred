import React from "react";
import Layout from "../components/layouts/Layout";
import CircularGallery from "../components/CircularGallery";
const Home = () => {
  return (
    <>
      <Layout>
        <div style={{ height: "400px", position: "relative" }}>
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
