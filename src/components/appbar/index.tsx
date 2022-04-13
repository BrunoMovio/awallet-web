import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import { PageHeading } from "../typography/page-heading.component";

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

    <>
      
      {location.pathname !== '/login' && location.pathname !== '/esqueci-senha' && location.pathname !== '/nova-senha' && (
        <HStack>
          {location.pathname === '/' && (
            <Button px={8}  onClick={() => {
              navigate("/carteira");
            }}>Gerenciar carteira</Button>
          )}
          {location.pathname === '/carteira' && (
            <Button px={8}  onClick={() => {
              navigate("/");
            }}>Ver relatório</Button>
          )}
          <Button
            alignSelf="flex-end"
            onClick={() => {
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </HStack>
      )}
      
    </>
      
    </Flex>
  );
};
