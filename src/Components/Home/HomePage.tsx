import React from "react";
import Layout from "../Layout/Layout";

import HeroSection01 from "./HeroSection01";
import HeroSection02 from "./HeroSection02";
import HeroSection03 from "./HeroSection03";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection01 />
      <HeroSection02 />
      <HeroSection03 />
    </Layout>
  );
};

export default HomePage;
