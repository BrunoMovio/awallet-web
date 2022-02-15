import * as Yup from "yup";

export interface ForgotPasswordForm {
  email: string;
}

const initialValues = { email: "" };

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido")
    .required("Esse campo é obrigatório"),
})

export const forgotPasswordForm = {
  initialValues,
  schema,
};
