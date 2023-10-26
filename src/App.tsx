import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar.tsx";

import ReactGA from "react-ga4";

const GA_TAG = import.meta.env.VITE_GA_TAG;
ReactGA.initialize(GA_TAG);

function App() {
  return (
    <Flex transition={"500ms"} direction={"column"} w={"100%"} minH={"100vh"} bgColor={"#2a2a2a"}>
      <Navbar />
      {/* <Home />
      <About />
      <Certificates />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <Contact />
      <Footer /> */}
    </Flex>
  );
}

export default App;
