import { walletData } from "../../modules/home/dashboard/dashboard-data";

const API_URL = 'https://5b0f-177-62-148-119.ngrok.io/portfolio_analytics';

export const getPortfolioData = async () => {
  return fetch(API_URL, { method: 'POST', body: JSON.stringify(walletData), headers: { 'content-type': 'application/json', 'accept': '*/*' } });
};