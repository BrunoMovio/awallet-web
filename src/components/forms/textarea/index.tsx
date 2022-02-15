import React from "react";
import {
  Textarea as CTextarea,
  TextareaProps as CTextareaProps,
} from "@chakra-ui/react";
import { FieldContainer } from "../field-container";

export interface InputProps extends CTextareaProps {
  label?: string;
  formKey?: string;
  helperText?: string;
}

export const Textarea: React.FC<InputProps> = ({
  label,
  formKey,
  helperText,
  ...props
}) => {
  return (
    <FieldContainer helperText={helperText} label={label} formKey={formKey}>
      {({ field }: any) => {
        return (
          <CTextarea {...field} bg={"#E3E8EB"} fontSize={"md"} {...props} />
        );
      }}
    </FieldContainer>
  );
};
