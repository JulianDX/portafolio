import Header from "./components/Header";
import Main from "./components/Main";
import { About } from "./components/About";
import { Abilities } from "./components/Abilities";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Studies } from "./components/Studies";

function App() {

  return (
    <>
      <Header />
      <Main />
      <About />
      <Studies />
      <Abilities />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
