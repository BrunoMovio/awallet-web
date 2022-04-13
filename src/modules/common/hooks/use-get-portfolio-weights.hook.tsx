import { useState, useCallback } from "react";
import { getPortfolioWeights } from "../../../data/http/portfolio.datasource";

type UseGetPortolioWeights = [() => void, { loading: boolean, data: any }];

export const useGetPorfolioWeights = (): UseGetPortolioWeights => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const fetch = useCallback(() => {
    setLoading(true);
    getPortfolioWeights()
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [getPortfolioWeights]);

  return [fetch, { loading, data }];
};
