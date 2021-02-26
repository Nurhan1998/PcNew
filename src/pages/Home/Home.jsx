import React, { useContext } from "react";
import Slider from "../../components/Slider";
import NaviBar from "../../components/NaviBar";
import VideoPage from "../../components/VideoPage"
import Info1 from "../../components/Info1"
import Info2 from "../../components/Info2"
import Ps4 from "../../components/Ps4"
import Info from "../../components/Info"
import Footer from "../../components/Footer";
import InfoSpider from "../../components/InfoSpider";

const Home = () => {
  return <div>
    <NaviBar/>
    <VideoPage/>
    <Info2/>
    <Info/>
    <Ps4/>
    <Slider/>
    <Info1/>
    <Footer/>
  </div>;
};

export default Home;
