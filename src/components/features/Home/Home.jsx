import React from "react";
import Button from "@mui/material/Button";
import HeaderBanner from "../HeaderBanner";
import VideoCharacterTabs from "../Section2";
import FeatureSection from "../FeatureSection";
import UseCasesGrid from "../UseCase";
import DeveloperFocused from "../DeveloperFocused";
import VideoGenFeatures from "../WhyVideoGen";

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <FeatureSection />
      <UseCasesGrid />
      <DeveloperFocused />
      <VideoGenFeatures />

      <div className="h-20 flex text-white bg-black justify-center align-center w-full">
        <a className="pt-6 justify-center align-center" href="/privacy">
          Privacy and Policy
        </a>
      </div>
    </div>
  );
};

export default Home;
