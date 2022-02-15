import React from 'react'
import { Text as ChakraText, TextProps } from "@chakra-ui/layout";

export const Text: React.FC<TextProps> = ({children, ...props}) => {
  return <ChakraText {...props}>{children}</ChakraText>
}