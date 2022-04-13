import { useState, useCallback } from "react";
import { getPortfolioData } from "../../../data/http/portfolio.datasource";

type UseGetPortolioData = [() => void, { loading: boolean, data: any }];

export const useGetPorfolioData = (wallet: any): UseGetPortolioData => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const fetch = useCallback(() => {
    setLoading(true);
    getPortfolioData(wallet)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [getPortfolioData]);

  return [fetch, { loading, data }];
};
