import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-[300px]">
      <ClockLoader
        color="rgba(75, 85, 99, 0.607)"
        loading={true}
        // cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
