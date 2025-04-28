"use client";
import { Box, Button, Flex, Grid, IconButton, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionFlex = motion.create(Flex);

export const MotionImage = motion.create(Image);

export const MotionBox = motion.create(Box as any);

export const MotionText = motion.create(Text);

export const MotionGrid = motion.create(Grid);

export const MotionIconButton = motion.create(IconButton);

export const MotionButton = motion.create(Button);
