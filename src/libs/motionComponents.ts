"use client";
import { Box, Button, Flex, Grid, IconButton, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionFlex = motion(Flex);

export const MotionImage = motion(Image);

export const MotionBox = motion(Box as any);

export const MotionText = motion(Text);

export const MotionGrid = motion(Grid);

export const MotionIconButton = motion(IconButton);

export const MotionButton = motion(Button);
