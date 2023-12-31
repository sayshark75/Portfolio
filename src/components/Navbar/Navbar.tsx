import { Show } from "@chakra-ui/react";
import { useContext } from "react";

import { resumeDownload, resumelink } from "../../sources/Links";
import { ScrollContext } from "../../contexts/ScrollContext";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { NavbarButtonProps } from "../../TYPES";
import ThemeChanger from "./ThemeChanger";
import { getNavbarButtonsData } from "../../sources/NavbarButtonDataGen";

const Navbar = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    return null;
  }

  const handleClick = () => {
    window.open(resumelink, "_blank");
  };

  const NavButtonsData: NavbarButtonProps[] = getNavbarButtonsData(context, resumeDownload, handleClick);

  return (
    <>
      <Show above="769px">
        <DesktopNav buttonData={NavButtonsData} />
      </Show>
      {/* Theme Preferences */}
      <ThemeChanger />

      {/* Mobile Navbar */}
      <Show below="768px">
        <MobileNav buttonsData={NavButtonsData} />
      </Show>
    </>
  );
};

export default Navbar;
