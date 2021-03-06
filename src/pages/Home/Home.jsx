import React from "react";
import NaviBar from "../../components/NaviBar";
import VideoPage from "../../components/VideoPage";
import Mario from "../../components/Mario";
import Info2 from "../../components/Info2";
import Ps4 from "../../components/Ps4";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";

const Home = () => {
  return (
    <div>
      <NaviBar />
      <VideoPage />
      <Info2 />
      <Info />
      <Ps4 />
      <Slider />
      <Mario />
      <Footer />
    </div>
  );
};

export default Home;
