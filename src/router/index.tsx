import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ForgotPasswordPage } from "../modules/auth/forgot-password";
import { NewPasswordPage } from "../modules/auth/forgot-password/new-password.page";
import { LoginPage } from "../modules/auth/login";
import { HomePage } from "../modules/home/dashboard";
import { walletData } from "../modules/home/dashboard/dashboard-data";
import { WalletPage } from "../modules/home/register_asset";

export const Router = () => {
  const [wallet, setWallet] = useState(walletData)

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route path="esqueci-senha" element={<ForgotPasswordPage />} />

      <Route path="nova-senha" element={<NewPasswordPage />} />

      <Route path="/" element={<HomePage currentWallet={wallet} setWallet={setWallet}/>} />

      <Route path="/carteira" element={<WalletPage  currentWallet={wallet} setWallet={setWallet} />} />
    </Routes>
  );
};
