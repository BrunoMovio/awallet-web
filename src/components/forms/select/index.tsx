import {
  Select as CSelect,
  SelectProps as CSelectProps,
} from "@chakra-ui/react";
import React from "react";
import { FieldContainer } from "../field-container";

export interface SelectProps extends CSelectProps {
  label?: string;
  options: SelectOption[];
  formKey?: string;
  helperText?: string;
}

interface SelectOption {
  value: string;
  label?: string;
}

export const Select: React.FC<SelectProps> = ({
  formKey,
  label,
  options,
  helperText,
  ...props
}) => {
  return (
    <FieldContainer helperText={helperText} label={label} formKey={formKey}>
      {({ field, form }: any) => {
        return (
          <CSelect {...field} bg={"#E3E8EB"} fontSize={"md"} {...props}>
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label || value}
              </option>
            ))}
          </CSelect>
        );
      }}
    </FieldContainer>
  );
};
