import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";

export const Appbar = () => {
  const navigate = useNavigate();

  return (
    <Flex
      bg="white"
      h="16"
      align="center"
      px="5"
      py="2.5"
      justify="space-between"
    >
      <HStack>
        <Image src={logo} h={10} />
        <Heading>aWallet</Heading>
      </HStack>

      {location.pathname === '/' && (
        <Button
          alignSelf="flex-end"
          onClick={() => {
            navigate("/login");
          }}
        >
          Logout
        </Button>
      )}
    </Flex>
  );
};
