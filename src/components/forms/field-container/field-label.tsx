import { FormLabel, FormLabelProps } from "@chakra-ui/form-control";
import React from "react";

export const FieldLabel: React.FC<FormLabelProps> = ({
  children,
  ...props
}) => {
  if (!children) {
    return null;
  }

  return (
    <FormLabel mb="2" fontSize="md" fontWeight="bold" {...props}>
      {children}
    </FormLabel>
  );
};
