import React from "react";
import { FormControl } from "@chakra-ui/form-control";
import { Field } from "formik";
import { FieldErrorMessage } from "./field-error-message";
import { FieldHelperText } from "./field-helper-text";
import { FieldLabel } from "./field-label";

export interface FieldContainerProps {
  label?: string;
  formKey?: string;
  helperText?: string;
}

export const FieldContainer: React.FC<FieldContainerProps> = ({
  formKey,
  label,
  helperText,
  children,
}) => {
  return (
    <Field name={formKey}>
      {({ field, form }: any) => {
        return (
          <FormControl
            isInvalid={form.errors[field.name] && form.touched[field.name]}
          >
            <FieldLabel htmlFor={""}>{label}</FieldLabel>
            {typeof children === "function"
              ? children({ field, form })
              : children}
            <FieldErrorMessage fieldName={field.name} />
            <FieldHelperText>{helperText}</FieldHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
};
