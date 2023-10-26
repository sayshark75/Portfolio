import { Show } from "@chakra-ui/react";
import { useContext } from "react";

import ReactGA from "react-ga4";
import { resumeDownload, resumelink } from "../../sources/Links";
import { ScrollContext } from "../../contexts/ScrollContext";
import { getNavbarButtonsData } from "../../CONSTANTS";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { NavbarButtonProps } from "../../TYPES";
// import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    return null;
  }

  const handleClick = () => {
    window.open(resumelink, "_blank");
    ReactGA.event({
      category: "Resume",
      action: "Downloaded the Resume",
    });
  };

  const NavButtonsData: NavbarButtonProps[] = getNavbarButtonsData(context, resumeDownload, handleClick);

  return (
    <>
      <Show above="769px">
        <DesktopNav buttonData={NavButtonsData} />
      </Show>
      {/* Theme Preferences */}
      {/* <ThemeChanger /> */}

      {/* Mobile Navbar */}
      <Show below="768px">
        <MobileNav buttonsData={NavButtonsData} />
      </Show>
    </>
  );
};

export default Navbar;
