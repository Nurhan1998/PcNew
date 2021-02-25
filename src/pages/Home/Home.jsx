import React, { useContext } from "react";
import Slider from "../../components/Slider";
import NaviBar from "../../components/NaviBar";
import Info1 from "../../components/Info1";
import Info from "../../components/Info";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <NaviBar />
      <Slider />
      <Info1 />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
