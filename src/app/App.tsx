import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

import Header from "../components/Header";
import { ALAN_API_KEY } from "../key/key";

// ! ^ importing ^

const App: React.FC = () => {
  useEffect(() => {
    alanBtn({
      key: ALAN_API_KEY,
      onCommand: (commandData: any) => {
        if (commandData.command === "go back") {
          alert("this code got excuted");
        }
      },
    });
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
