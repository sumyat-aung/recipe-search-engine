import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

import { ALAN_API_KEY } from "../key/key";
import Header from "../components/Header";
import Content from "../components/Content";
import { useNavigate } from "react-router-dom";

// ! ^ importing ^

const App: React.FC = () => {
  // Alan

  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: ALAN_API_KEY,
      onCommand: function (commandData: any) {
        if (commandData.command === "italian") {
          navigate("/italian");
        }
        if (commandData.command === "indian") {
          navigate("/indian");
        }
        if (commandData.command === "mexican") {
          navigate("/mexican");
        }
        if (commandData.command === "vegetarian") {
          navigate("/vegetarian");
        }
        if (commandData.command === "search") {
          navigate(`/search/${commandData.route}`);
        }
      },
    });
  }, []);

  // jsx
  return (
    <div>
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        <Content />
      </div>
    </div>
  );
};

export default App;
