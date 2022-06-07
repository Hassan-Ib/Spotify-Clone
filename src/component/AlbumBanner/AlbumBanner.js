import React from "react";
import Album_banner from "../../Assets/Images/Album-banner.jfif";
import BannerDetails from "./BannerDetails";
import Tab from "./Tab";
import "./Styles/index.css";
const AlbumBanner = () => {
  return (
    <main className="banner relative h-[370px] flex flex-col  ">
      <div className="h-full w-full absolute left-0 top-0 ">
        <img
          src={Album_banner}
          alt="bannner"
          className="banner__image w-full h-full object-cover"
        />
      </div>

      {/* data */}

      <BannerDetails />
      <Tab />
    </main>
  );
};

export default AlbumBanner;
