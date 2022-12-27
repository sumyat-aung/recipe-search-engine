import React from "react";
import banner from "../assets/banner.jpg";

const Header: React.FC = () => {
  return (
    <div className="h-[300px] w-full relative">
      <img src={banner} alt="banner" className="w-full h-full object-cover" />
      <div className="w-full h-full bg-black absolute top-0 left-0 opacity-[0.8]"></div>
      <div className="font-fira text-white absolute top-0 left-0 flex justify-center items-center w-full h-full flex-col">
        <h1 className="text-4xl mb-3 text-center">TasteExplorer</h1>
        <p className="text-center ">
          Discover Delicious Recipes from Around the World.{" "}
        </p>
        <p className="text-gray-400 text-center">
          Your Go-To Recipe Search Engine.
        </p>
      </div>
    </div>
  );
};

export default Header;
