"use client";
import { Links } from "@/resources/CONSTANTS";

import MobileNav from "./MobileNav";
import { useScrollContext } from "@/context/ScrollContext";
import DesktopNav, { NavButtonType } from "./DesktopNav";
import { getNavbarButtonsData } from "@/resources/NavbarButtonsGenerator";

const Navbar = () => {
  const scrollPoints = useScrollContext();

  const { resumeDownload, resumelink } = Links;

  const handleClick = () => {
    window.open(resumelink, "_blank");
  };

  const NavButtonsData: NavButtonType[] = getNavbarButtonsData(scrollPoints, resumeDownload, handleClick);

  return (
    <>
      <MobileNav buttonData={NavButtonsData} />
      <DesktopNav buttonData={NavButtonsData} />
    </>
  );
};

export default Navbar;
