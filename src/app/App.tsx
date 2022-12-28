import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

import { ALAN_API_KEY } from "../key/key";
import Header from "../components/Header";
import Content from "../components/Content";

// ! ^ importing ^

const App: React.FC = () => {
  // Alan
  useEffect(() => {
    alanBtn({
      key: ALAN_API_KEY,
      onCommand: ({ command }: any) => {
        if (command === "go back") {
          alert("this code got excuted");
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
