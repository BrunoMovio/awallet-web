import * as Yup from "yup";

export interface LoginForm {
  email: string;
  password: string;
}

const initialValues = { email: "", password: "" };

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido")
    .required("Esse campo é obrigatório"),
  password: Yup.string().required("Esse campo é obrigatório"),
});

export const loginForm = {
  initialValues,
  schema,
};
