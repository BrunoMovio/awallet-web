import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ForgotPasswordPage } from "../modules/auth/forgot-password";
import { NewPasswordPage } from "../modules/auth/forgot-password/new-password.page";
import { LoginPage } from "../modules/auth/login";
import { HomePage } from "../modules/home/dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route path="esqueci-senha" element={<ForgotPasswordPage />} />

      <Route path="nova-senha" element={<NewPasswordPage />} />

      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
