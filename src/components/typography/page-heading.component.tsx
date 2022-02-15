import { HeadingProps } from "@chakra-ui/layout";
import React from "react";
import { Heading } from "../heading";

export const PageHeading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading size="lg" {...props}>
      {children}
    </Heading>
  );
};
