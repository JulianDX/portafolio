import Header from "./components/Header";
import Main from "./components/Main";
import { About } from "./components/About";
import { Abilities } from "./components/Abilities";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Studies } from "./components/Studies";
import { useState } from "react";

function App() {
  const [flagEs, setFlagEs] = useState(true);

  return (
    <>
      <Header flagEs={flagEs} setFlagEs={setFlagEs} />
      <Main flagEs={flagEs} />
      <About flagEs={flagEs} />
      <Studies flagEs={flagEs} />
      <Abilities flagEs={flagEs} />
      <Projects flagEs={flagEs} />
      <Contact flagEs={flagEs} />
    </>
  );
}

export default App;
