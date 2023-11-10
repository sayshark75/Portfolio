import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./pages/Home/Home";
import About from "./pages/About/About.tsx";
import Certificates from "./pages/Certificates/Certificates.tsx";
import Timeline from "./pages/Timeline/Timeline.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import TechnicalSkills from "./pages/TechnicalSkills/TechnicalSkills.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <Flex
      transition={"500ms"}
      direction={"column"}
      w={"100%"}
      minH={"100vh"}
      bgColor={"#2a2a2a"}
    >
      <Navbar />
      <Home />
      <About />
      <Certificates />
      <Timeline />
      <Projects />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </Flex>
  );
}

export default App;
