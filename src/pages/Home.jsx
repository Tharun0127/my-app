import React from "react";
import {
  NavBar,
  ThreeXThree,
  InfScroller,
  HorScroller,
  AboutScroller,
} from "../components";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-10">
        <NavBar />
      </div>
      <div className="">
        {" "}
        <HorScroller />
      </div>

      <div className="">
        <ThreeXThree />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[850px]">
        <AboutScroller />
        <InfScroller />
      </div>
    </div>
  );
};

export default Home;
