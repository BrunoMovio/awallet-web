import { Radio, RadioGroup as ChackraRadioGroup } from "@chakra-ui/radio";
import { Flex, VStack } from "@chakra-ui/layout";
import { Field, useFormikContext } from "formik";
import React from "react";
import { FieldContainer } from "../field-container";
import { BodyText } from "../../typography/body-text.component";

interface RadioGroupProps {
  options: RadioOption[];
  label?: string;
  fieldName: string;
}

interface RadioOption {
  label: string;
  value: string;
  helperElement?: JSX.Element;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  label,
  fieldName,
}) => {
  const { values } = useFormikContext<{ [key: string]: any }>();

  const value = values[fieldName];
  return (
    <FieldContainer label={label} formKey={fieldName}>
      <ChackraRadioGroup colorScheme="brand" value={value}>
        <VStack spacing={3} alignItems="flex-start" w="100%">
          {options.map((option) => (
            <Field name={fieldName}>
              {({ field, form }: any) => (
                <Flex align="center">
                  <Radio
                    {...field}
                    isInvalid={
                      form.errors[field.name] && form.touched[field.name]
                    }
                    value={option.value}
                  >
                    <BodyText>{option.label}</BodyText>
                  </Radio>
                  {option.helperElement}
                </Flex>
              )}
            </Field>
          ))}
        </VStack>
      </ChackraRadioGroup>
    </FieldContainer>
  );
};
