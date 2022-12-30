import React, { useState, useRef } from "react";
import Modal from "react-modal";

import banner from "../assets/banner.jpg";
import SettingModal from "./SettingModal";
import { useEffect } from "react";

// ! ^ importing ^

const Header: React.FC = () => {
  // Modal state handling
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const rootElement = useRef(null);

  // modal styling
  const customStyles: {
    content: React.CSSProperties;
    overlay: React.CSSProperties;
  } = {
    content: {
      backgroundColor: "#dadadd",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      zIndex: 1000,
    },
  };

  // disable the window scroll when click is true

  function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  isModalOpen && disableScroll();
  isModalOpen === false && enableScroll();

  // jsx
  return (
    <div className="h-[300px] w-full relative header">
      <img src={banner} alt="banner" className="w-full h-full object-cover" />
      <div className="w-full h-full bg-black absolute top-0 left-0 opacity-[0.9]"></div>
      <div className="font-fira text-white absolute top-0 left-0 flex justify-center items-center w-full h-full flex-col">
        <h1 className="text-4xl mb-3 text-center">TasteExplorer</h1>
        <p className="text-center ">
          Discover Delicious Recipes from Around the World.
        </p>
        <p className="text-gray-400 text-center">
          Your Go-To Recipe Search Engine.
        </p>

        <i
          className="fa-solid fa-gear absolute bottom-5 right-5 hover:text-gray-300 cursor-default sm:cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        ></i>
        <div ref={rootElement}>
          <Modal
            appElement={rootElement.current}
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Setting Information For Alan AI"
            style={customStyles}
          >
            <SettingModal closeModal={closeModal} />{" "}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
