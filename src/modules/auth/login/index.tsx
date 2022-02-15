import { Center, VStack } from "@chakra-ui/layout";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { Input } from "../../../components/forms/input";
import { PageContainer } from "../../../components/page-container";
import { Form } from "../../../components/forms/form";
import { FormikProps } from "formik";
import { useToast } from "@chakra-ui/toast";
import { PageHeading } from "../../../components/typography/page-heading.component";
import { LoginForm, loginForm } from "./login.form";

export const LoginPage = () => {
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Card>
        <PageHeading>Acesse sua conta</PageHeading>
        <Form
          initialValues={loginForm.initialValues}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            try {
              navigate("/");
            } catch (err) {
              switch ((err as any).code) {
                case "auth/user-not-found":
                  toast({
                    status: "error",
                    title: "Usuário não encontrado",
                  });
                  break;
                case "auth/wrong-password":
                  toast({
                    status: "error",
                    title: "Senha incorreta",
                  });
                  break;
                default:
                  toast({
                    status: "error",
                    title: "Erro desconhecido",
                  });
              }
            }
            actions.setSubmitting(false);
          }}
          validationSchema={loginForm.schema}
          validateOnChange={false}
        >
          {(props: FormikProps<LoginForm>) => (
            <VStack mt="8">
              <Input
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="email"
                formKey="email"
              />
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                formKey="password"
              />
              <Center>
                <Link to="../esqueci-senha">
                  <Button variant="link" size="sm">
                    Esqueci minha senha
                  </Button>
                </Link>
              </Center>
              <VStack alignItems="stretch" w="full" spacing="4">
                <Button
                  isLoading={props.isSubmitting}
                  colorScheme="brand"
                  mt={"2"}
                  w="full"
                  type="submit"
                >
                  Entrar
                </Button>
              </VStack>
            </VStack>
          )}
        </Form>
      </Card>
    </PageContainer>
  );
};
