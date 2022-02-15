import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Appbar } from "../appbar";

export const PageContainer: React.FC = ({ children }) => {
  return (
    <Flex direction={"column"} minH="100vh">
      <Appbar />
      <Flex flex={1} padding={8} direction={"column"} alignItems={"center"}>
        {children}
      </Flex>
    </Flex>
  );
};
