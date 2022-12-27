import React from "react";

const SettingModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div>
      <i
        className="fa-solid fa-xmark absolute top-5 right-5 text-xl hover:text-gray-900 cursor-default sm:cursor-pointer"
        onClick={closeModal}
      ></i>
    </div>
  );
};

export default SettingModal;
