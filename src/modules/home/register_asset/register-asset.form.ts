import * as Yup from "yup";

export interface RegisterAssetForm {
  name: string;
  date: string;
  value: number;
}

const initialValues = { name: "", date: "", value: 0 };

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Esse campo é obrigatório"),
  date: Yup.string().required("Esse campo é obrigatório"),
  value: Yup.number().required("Esse campo é obrigatório"),

});

export const registerAssetForm = {
  initialValues,
  schema,
};
