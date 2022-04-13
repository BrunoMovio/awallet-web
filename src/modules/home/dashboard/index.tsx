import { PageContainer } from "../../../components/page-container";
import { PageHeading } from "../../../components/typography/page-heading.component";
import Plot from "react-plotly.js";
import { PlotType } from "plotly.js";
import { Card } from "../../../components/card";
import { Flex } from "@chakra-ui/react";
import { useGetPorfolioData } from "../../common/hooks/use-get-portfolio-data.hook";
import { useEffect } from "react";
import { LoadingState } from "../../../components/loading-state";

export const HomePage = () => {
  const [fetch, result] = useGetPorfolioData();

  useEffect(() => fetch(), []);

  const cumulativeReturnsData = result.data?.cumulative_returns.data?.[0];

  const patrimonyData = result.data?.patrimony?.data?.[0];

  return (
    <PageContainer>
      <PageHeading>Bem vindo, Usuário Teste.</PageHeading>
      <Flex
        width="100%"
        direction="row"
        margin={8}
        justifyContent="space-evenly"
      >
        <Card>
          <LoadingState loading={result.loading} data={result.data}>
            <Plot
              data={[
                {
                  x: cumulativeReturnsData?.x,
                  y: cumulativeReturnsData?.y,
                  type: cumulativeReturnsData?.type as PlotType,
                },
              ]}
              layout={{ title: "Retorno cumulativo" }}
            />
          </LoadingState>
        </Card>
        <Card>
          <LoadingState loading={result.loading} data={result.data}>
            <Plot
              data={[
                {
                  x: patrimonyData?.x,
                  y: patrimonyData?.y,
                  type: patrimonyData?.type as PlotType,
                },
              ]}
              layout={{ title: "Patrimônio" }}
            />
          </LoadingState>
        </Card>
      </Flex>
    </PageContainer>
  );
};
