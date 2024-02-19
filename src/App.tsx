import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./pages/Home/Home";
import About from "./pages/About/About.tsx";
import Timeline from "./pages/Timeline/Timeline.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import TechnicalSkills from "./pages/TechnicalSkills/TechnicalSkills.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ReactGA from "react-ga4";

ReactGA.initialize("G-PLC3VZSS76");

function App() {
  return (
    <Flex transition={"500ms"} direction={"column"} w={"100%"} minH={"100vh"} bgColor={"primary"}>
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Projects />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </Flex>
  );
}

export default App;
