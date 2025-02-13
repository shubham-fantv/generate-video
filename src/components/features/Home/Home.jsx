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
    </div>
  );
};

export default Home;
