"use client";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavButtonType } from "./DesktopNav";
import useCheckScrolling from "@/hooks/useCheckScrolling";
import { FaHamburger } from "react-icons/fa";
import { PopoverArrow, PopoverBody, PopoverContent, PopoverRoot, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import NavIcon from "./NavIcon";
import NavMenuButton from "./NavMenuButton";
import { MdMenu } from "react-icons/md";

const MobileNav = ({ buttonData }: { buttonData: NavButtonType[] }) => {
  const { isScrolling } = useCheckScrolling();
  const [open, setOpen] = useState(false);
  return (
    <Flex
      transition={"500ms"}
      pos={"fixed"}
      bottom={8}
      alignItems={"center"}
      zIndex={100}
      w={"100%"}
      transform={isScrolling ? "translateY(200%)" : "none"}
      bgColor={"transparent"}
      justifyContent={"flex-start"}
    >
      <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <PopoverTrigger asChild>
          <IconButton color={"#fff"} bgColor={"accent"} rounded={"full"} ml={6}>
            <MdMenu />
          </IconButton>
        </PopoverTrigger>
        <PopoverContent maxW={"160px"}>
          <PopoverBody p={2} rounded={"md"} bgColor={"accent"} color={"#fff"}>
            <Flex w={"100%"} direction={"column"} gap={1}>
              {buttonData.map((button, index) => {
                return button.link ? (
                  <Link key={`link-button-${index}`} href={button.link} onClick={button.refFunction}>
                    <NavMenuButton {...button} closePopover={() => setOpen(false)} />
                  </Link>
                ) : (
                  <NavMenuButton key={`button-${index}`} {...button} closePopover={() => setOpen(false)} />
                );
              })}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </Flex>
  );
};

export default MobileNav;
