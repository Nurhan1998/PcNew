import React, { useContext } from "react";
import Slider from "../../components/Slider";
import NaviBar from "../../components/NaviBar";
import VideoPage from "../../components/VideoPage";
import Info1 from "../../components/Info1";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import InfoSpider from "../../components/InfoSpider";

const Home = () => {
  return (
    <div>
      <NaviBar />
      <VideoPage />
      <Info />
      <Info1 />

      <Footer />
    </div>
  );
};

export default Home;
