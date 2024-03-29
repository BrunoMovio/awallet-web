import { Input as CInput, InputProps as CInputProps } from "@chakra-ui/input";
import React from "react";
import InputMask from "react-input-mask";

import { FieldContainer } from "../field-container";

export interface InputProps extends CInputProps {
  mask?: string;
  label?: string;
  formKey?: string;
  helperText?: string;
  onChangeF?: () => void
}

export const Input: React.FC<InputProps> = ({
  formKey,
  label,
  mask,
  helperText,
  onChangeF,
  ...props
}) => {
  return (
    <FieldContainer helperText={helperText} label={label} formKey={formKey}>
      {({ field }: any) => {
        return (
          <InputMask mask={mask || ""} onChange={onChangeF} {...field}>
            <CInput id={formKey} bg={"#E3E8EB"} fontSize={"md"} {...props} />
          </InputMask>
        );
      }}
    </FieldContainer>
  );
};
