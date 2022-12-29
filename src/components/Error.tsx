import React from "react";

const Error: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-[300px] font-fira font-semibold">
      <i className="fa-solid fa-circle-exclamation text-red-700 text-xl mr-5"></i>
      <h1 className=" text-xl font-mono text-red-700">
        Opps ! Somthing Went Wrong!
      </h1>
    </div>
  );
};

export default Error;
