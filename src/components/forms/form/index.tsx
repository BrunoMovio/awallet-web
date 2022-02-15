import { Formik, Form as FormikForm, FormikConfig } from "formik";
import React, { PropsWithChildren } from "react";

export const Form = <Values,>({
  children,
  ...props
}: PropsWithChildren<FormikConfig<Values>>) => {
  return (
    <Formik {...props}>
      {(formikProps) => (
        <FormikForm noValidate>
          {typeof children === "function"
            ? (children as Function)(formikProps)
            : children}
        </FormikForm>
      )}
    </Formik>
  );
};
