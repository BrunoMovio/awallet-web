import React from 'react'
import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/layout";

export const Heading: React.FC<HeadingProps> = ({children, ...props}) => {
  return <ChakraHeading  {...props}>{children}</ChakraHeading>
}