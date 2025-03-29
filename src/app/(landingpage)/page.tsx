import React from "react";
import AboutUs from "../components/AboutUs";
import OurGames from "../components/OurGames";
import OurPartners from "../components/OurPartners";
import Banner from "../components/Banner";

const Page = () => {
  return (
    <div className="flex flex-col gap-32">
      <Banner />
      <AboutUs />
      <OurGames />
      <OurPartners />
    </div>
  );
};

export default Page;
