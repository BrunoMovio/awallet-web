import { FormHelperText } from "@chakra-ui/form-control";
import React from "react";

export const FieldHelperText: React.FC = ({ children }) => {
  return <FormHelperText fontSize={"sm"}>{children}</FormHelperText>;
};
