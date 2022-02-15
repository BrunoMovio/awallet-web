import { VStack } from "@chakra-ui/layout";
import React from "react";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { PageContainer } from "../../../components/page-container";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Form } from "../../../components/forms/form";
import { newPasswordForm } from "./new-password.form";
import { useToast } from "@chakra-ui/toast";
import { PageHeading } from "../../../components/typography/page-heading.component";
import { Input } from "../../../components/forms/input";

export const NewPasswordPage = () => {
  const toast = useToast();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const navigate = useNavigate();

  const code = params.get("oobCode");

  // if (!code) {
  //   return <Navigate to="/esqueci-senha" replace />
  // }

  return (
    <PageContainer>
      <Card>
        <PageHeading>Defina uma nova senha</PageHeading>
        <Form
          initialValues={newPasswordForm.initialValues}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true)
            try {
              toast({
                status: "success",
                title: "Senha alterada com sucesso",
                description: "Você já pode usar a nova senha para fazer login",
              })
              navigate("/login")
            } catch (err) {
              switch ((err as any).code) {
                case "auth/expired-action-code":
                  toast({
                    status: "error",
                    title:
                      "Código de acesso expirado. Peça um novo e-mail de atualização de senha.",
                  })
                  break
                case "auth/invalid-action-code":
                  toast({
                    status: "error",
                    title:
                      "Código de acesso inválido. Peça um e-mail de atualização de senha para obter o link correto.",
                  })
                  break
                case "auth/user-disabled":
                case "auth/user-not-found":
                  toast({
                    status: "error",
                    title: "Usuário não encontrado",
                  })
                  break
                case "auth/weak-password":
                  toast({
                    status: "error",
                    title: "Senha muito fraca",
                  })
                  break
                default:
                  toast({
                    status: "error",
                    title: "Erro desconhecido",
                  })
              }
            }

            actions.setSubmitting(false)
          }}
          validationSchema={newPasswordForm.schema}
        >
          {(props) => (
            <VStack mt="8">
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                formKey="password"
              />
              <Input
                label="Confirmação de senha"
                placeholder="Digite a mesma senha"
                type="password"
                formKey="passwordConfirmation"
              />
              <VStack alignItems="stretch" w="full" spacing="4">
                <Button
                  isLoading={props.isSubmitting}
                  colorScheme="brand"
                  mt={"5"}
                  w="full"
                  type="submit"
                >
                  Enviar
                </Button>
              </VStack>
            </VStack>
          )}
        </Form>
      </Card>
    </PageContainer>
  )
};
