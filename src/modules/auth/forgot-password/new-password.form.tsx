import * as Yup from "yup";

export interface NewPasswordForm {
  password: string;
  passwordConfirmation: string;
}

const initialValues: NewPasswordForm = {
  password: "",
  passwordConfirmation: "",
};

const schema = Yup.object().shape({
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Esse campo é obrigatório"),
  passwordConfirmation: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "A senha digitada não corresponde a senha digitada anteriormente"
    )
    .required("Esse campo é obrigatório"),
});

export const newPasswordForm = {
  initialValues,
  schema,
};
