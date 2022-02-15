import { TextProps } from "@chakra-ui/layout";
import { Text } from "../text";
import React from "react";

export const BodyText: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text fontSize="sm" {...props}>
      {children}
    </Text>
  );
};
