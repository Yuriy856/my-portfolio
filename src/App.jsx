import Portfolio from "./components/Portfolio";
import ContentSkill from "./components/ContentSkill/ContentSkill";

import { СontentSkillContext } from "./components/ContentSkillContext";
import { useEffect, useState } from "react";

function App() {
  const [idContent, setIdContent] = useState("html");

  useEffect(() => {
    console.log(idContent);
  }, [idContent]);

  return (
    <div className="app">
      <СontentSkillContext.Provider value={{ setIdContent }}>
        <Portfolio />
        <ContentSkill idContent={idContent} />
      </СontentSkillContext.Provider>
    </div>
  );
}

export default App;
