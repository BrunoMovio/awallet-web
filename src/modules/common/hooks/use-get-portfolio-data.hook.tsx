import { useState, useCallback } from "react";
import { getPortfolioData } from "../../../data/http/portfolio.datasource";
import { dashboardData } from "../../home/dashboard/dashboard-data";

type UseGetPortolioData = [() => void, { loading: boolean, data: any }];

export const useGetPorfolioData = (): UseGetPortolioData => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const fetch = useCallback(() => {
    setLoading(true);
    getPortfolioData()
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(() => setData(dashboardData as any))
      .finally(() => setLoading(false));
  }, [getPortfolioData]);

  return [fetch, { loading, data }];
};
