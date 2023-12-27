import React, { useContext, useEffect, useState } from "react";

import TopButtonHome from "./Components/TopButtonHome";
import Box1 from "./Components/Boxes1Home";
import { BrandCarousel } from "./Components/BrandCarousel";
import { AboutUsHome } from "./Components/AboutUsHome";
import { ItemIncomingHome } from "./Components/ItemIncomingHome";
import { UpcomingCreatorHome } from "./Components/UpcomingCreatorHome";
import { Questions } from "./Components/Questions";

const Home = () => {
  return (
    <div className="flex flex-col justify-center overflow-hidden   ">
      <div className=" relative flex  flex-col items-center">
        <div className=" videoHome fixed   h-fit w-full">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            className=" relative  brightness-75 w-full h-full  z-[-1] "
            src="https://images.puma.com/video/fetch/q_auto/https://videos.puma.net/videos/fn/%7Eregional%7EEEA%7Eothers%7E23AW_SP_Fenty-Creeper_Rihanna_1440x500_15s.mp4"
          ></video>
        </div>

        <Box1 />
      </div>
      <BrandCarousel />
      <AboutUsHome />
      <ItemIncomingHome />
      <UpcomingCreatorHome />
      <Questions/>
      <TopButtonHome />
    </div>
  );
};

export default Home;
