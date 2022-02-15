import React from "react";
import { Box, BoxProps } from "@chakra-ui/layout";

export const Card = ({ children, ...props }: BoxProps) => {
  return (
    <Box bg="white" py="6" px="5" borderRadius={10} {...props}>
      {children}
    </Box>
  );
};
