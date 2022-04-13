
const API_URL = 'http://ec2-44-193-204-160.compute-1.amazonaws.com:5000/';

export const getPortfolioData = async (walletData: any) => {
  return fetch(API_URL + 'portfolio_analytics', { method: 'POST', body: JSON.stringify(walletData), headers: { 'content-type': 'application/json', 'accept': '*/*' } });
};

export const getPortfolioWeights = async (walletData: any) => {
  return fetch(API_URL + 'portfolio_weights', { method: 'POST', body: JSON.stringify(walletData), headers: { 'content-type': 'application/json', 'accept': '*/*' } }) 
}