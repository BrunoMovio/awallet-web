import { FormErrorMessage } from "@chakra-ui/form-control";
import { useFormikContext } from "formik";
import React from "react";

interface FieldErrorMessageProps {
  fieldName: string;
}

export const FieldErrorMessage = ({ fieldName }: FieldErrorMessageProps) => {
  const { errors } = useFormikContext<Record<string, any>>();
  return (
    <FormErrorMessage fontSize={"sm"}>{errors[fieldName]}</FormErrorMessage>
  );
};
