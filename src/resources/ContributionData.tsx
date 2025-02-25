import { MdCodeOff, MdOutlineStar } from "react-icons/md";
import { ContributionDataType } from "./TYPES";
import { CgWebsite } from "react-icons/cg";
import { IoMdGitCommit } from "react-icons/io";

export const ContributionData: ContributionDataType[] = [
  { icon: <MdOutlineStar />, value: "1980+", title: "Hours of Coding Experience", delay: "200ms" },
  { icon: <MdCodeOff />, value: "940+", title: "DSA Problems Solved", delay: "400ms" },
  { icon: <CgWebsite />, value: "8+", title: "Completed Projects", delay: "600ms" },
  { icon: <IoMdGitCommit />, value: "2400+", title: "Github Contribution", delay: "800ms" },
];
