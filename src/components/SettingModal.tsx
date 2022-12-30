import React from "react";
import Admin from "../administrator/Admin";

const SettingModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div className="flex flex-col justify-center items-center font-fira">
      <i
        className="fa-solid fa-xmark absolute top-5 right-5 text-xl hover:text-gray-900 cursor-default sm:cursor-pointer"
        onClick={closeModal}
      ></i>
      <div className="font-semibold pb-5">
        <h1 className="text-center mb-5 text-xl ">Taste Explore</h1>
        <p>
          This recipe search engine, Taste Explorer, is designed to help users
          find a wide range of recipes based on their preferences and dietary
          needs. This website also offers voice interactivity as a feature,
          allowing users to use it hands-free and make their search experience
          even more convenient. In addition,it provides step-by-step
          instructions to help users recreate the recipes at home, Whether
          you're a seasoned cook or just starting out in the kitchen, this
          website has something for everyone.
        </p>
      </div>
      <div className="w-full mt-3 mb-10">
        <h1 className=" font-semibold mb-3">
          I'm gonna list out some of the things you can do just by using your
          voice:
        </h1>
        <ul className="text-xs  font-semibold list-disc list-inside flex flex-col gap-4">
          <li>
            To activate the voice AI, click the mic button in the left corner.
          </li>
          <li>You can drag to replace the mic icon.</li>
          <li>You can start asking questions, or requesting something.</li>
          <li>
            As in questions, Like 'How does this website work?' 'What is this
            website?'
          </li>
          <li>
            In order to request something, try saying 'Give me Italian Recipe',
            'I want Italian Recipe'.
          </li>
          <li>You can replace Italian with Indian OR Maxican OR Vegetarian.</li>
          <li>
            If you want to search for any kind of recipe, You can request by
            saying 'Please, search pasta' 'Can you please search pasta recipe?'
            OR anything else.
          </li>
          <li>
            If you get the recipe you were looking for, you can click to see
            details on how to make.
          </li>
        </ul>
      </div>

      <Admin />
    </div>
  );
};

export default SettingModal;
