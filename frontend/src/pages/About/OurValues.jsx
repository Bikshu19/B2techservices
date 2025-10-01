import React from "react";
import Corevalues from "../../components/AboutComponent/corevalues";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function OurValues() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "96px" }}>
        <Corevalues />
      </div>
      <Footer />
    </div>
  );
}

export default OurValues;
