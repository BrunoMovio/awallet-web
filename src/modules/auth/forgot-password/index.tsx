import React from "react";
import { VStack, Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { FormikProps } from "formik";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { Form } from "../../../components/forms/form";
import { PageContainer } from "../../../components/page-container";
import { ForgotPasswordForm, forgotPasswordForm } from "./forgot-pasword.form";
import { useTimer } from "../../common/hooks/use-timer.hook";
import { Input } from "../../../components/forms/input";
import { PageHeading } from "../../../components/typography/page-heading.component";
import {Link} from "react-router-dom"

export const ForgotPasswordPage = () => {
  const toast = useToast()
  const {timer, startTimer, isTimerRunning} = useTimer()

  return (
    <PageContainer>
      <Card>
        <PageHeading>Recuperar sua senha</PageHeading>
        <Form
          initialValues={forgotPasswordForm.initialValues}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true)
            try {
              toast({
                status: "success",
                title: "E-mail enviado",
                description:
                  "Um link para a redefinição de senha foi enviado para seu e-mail cadastrado. Verifique sua caixa de Spam e Promoções. Caso não tenha recebido, você poderá reenviar em 30 segundos.",
                duration: 30000,
              })
              startTimer(30)
            } catch (err) {
              switch ((err as any).code) {
                case "auth/invalid-email":
                  toast({
                    status: "error",
                    title: "E-mail inválido",
                  })
                  break
                case "auth/user-not-found":
                  toast({
                    status: "error",
                    title: "Usuário não encontrado",
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
          validationSchema={forgotPasswordForm.schema}
          validateOnChange={false}
        >
          {(props: FormikProps<ForgotPasswordForm>) => (
            <VStack mt="8">
              <Input
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="email"
                formKey="email"
              />
              <VStack alignItems="stretch" w="full" spacing="2">
                <Button
                  isLoading={props.isSubmitting}
                  colorScheme="brand"
                  w="full"
                  type="submit"
                  isDisabled={isTimerRunning}
                >
                  {isTimerRunning ? timer : "Enviar"}
                </Button>
                <Box alignSelf="center">
                  <Link to={"../login"}>
                    <Button size="xs" variant="link">
                      Voltar
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </VStack>
          )}
        </Form>
      </Card>
    </PageContainer>
  )
}
