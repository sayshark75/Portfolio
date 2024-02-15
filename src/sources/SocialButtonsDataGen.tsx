import { VscGithub } from "react-icons/vsc";
import { githubLink, linkedInLink, locationLink, phoneLink, twitterLink } from "./Links";
import { MdAlternateEmail, MdCall, MdMyLocation } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SocialBtnType } from "../TYPES";

export const socialBtnDataCreator = (onOpen: () => void): SocialBtnType[] => {
  return [
    {
      link: githubLink,
      icon: <VscGithub />,
      tooltip: "GitHub",
      label: "Visit my Link of github",
      onClick: () => {},
      delay: "200ms",
    },
    {
      link: "",
      icon: <MdAlternateEmail />,
      tooltip: "Email",
      label: "Compose an Email to Me?",
      onClick: onOpen,
      delay: "400ms",
    },
    {
      link: phoneLink,
      icon: <MdCall />,
      tooltip: "Phone",
      label: "Call on My Number",
      onClick: () => {},
      delay: "600ms",
    },
    {
      link: linkedInLink,
      icon: <FaLinkedinIn />,
      tooltip: "LinkedIn",
      label: "Visit my LinkedIn Profile",
      onClick: () => {},
      delay: "800ms",
    },
    {
      link: twitterLink,
      icon: <BsTwitterX />,
      tooltip: "Twitter",
      label: "Visit my Link of Twitter Profile",
      onClick: () => {},
      delay: "1s",
    },
    {
      link: locationLink,
      icon: <MdMyLocation />,
      tooltip: "Location",
      label: "Checkout my location on Google Maps",
      onClick: () => {},
      delay: "1.2s",
    },
  ];
};
