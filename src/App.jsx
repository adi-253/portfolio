import "src/global.css";
import Home from "src/Home_page";
import About from "src/About_page";
import Projects from "src/Projects";
import Contact from "src/Contact";
import Navigation from "src/Navi";

const App = () => {
  return (
  <div>
    <Navigation />
    <Home />
    <About />
    <Projects />
    <Contact />
  </div>
  )
};

export default App;
