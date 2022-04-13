import { PageContainer } from "../../../components/page-container";
import { PageHeading } from "../../../components/typography/page-heading.component";
import Plot from "react-plotly.js";
import { PlotType } from "plotly.js";
import { Card } from "../../../components/card";
import {
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useGetPorfolioData } from "../../common/hooks/use-get-portfolio-data.hook";
import { useEffect } from "react";
import { LoadingState } from "../../../components/loading-state";
import { useGetPorfolioWeights } from "../../common/hooks/use-get-portfolio-weights.hook";
import { walletData } from "./dashboard-data";

export const HomePage = ({currentWallet, setWallet}: any) => {
  const [fetchData, dataResult] = useGetPorfolioData(currentWallet);
  const [fetchWeights, weightsResult] = useGetPorfolioWeights(currentWallet);

  useEffect(() => {
    fetchData();
    fetchWeights();
  }, []);

  const cumulativeReturnsData = dataResult.data?.cumulative_returns.data?.[0];

  const patrimonyData = dataResult.data?.patrimony?.data?.[0];

  const weightsData = weightsResult.data?.weights?.data?.[0];

  const idealWeightsData = weightsResult.data?.ideal_weights?.data?.[0];

  const walletHistory = walletData.data;

  return (
    <PageContainer>
      <PageHeading>Bem vindo, Usuário Teste.</PageHeading>
      <div style={{ padding: "8px" }} />
      <SimpleGrid columns={[2]} spacing={8}>
        <Card>
          <LoadingState loading={dataResult.loading} data={dataResult.data}>
            <Plot
              data={[
                {
                  x: cumulativeReturnsData?.x,
                  y: cumulativeReturnsData?.y,
                  type: cumulativeReturnsData?.type as PlotType,
                },
              ]}
              layout={{
                title: "Rentabilidade da carteira",
                yaxis: {
                  tickformat: ",.0%",
                  autorange: true,
                },
              }}
              useResizeHandler
              style={{width: "100%", height: "100%"}}
            />
          </LoadingState>
        </Card>
        <Card>
          <LoadingState loading={dataResult.loading} data={dataResult.data}>
            <Plot
              data={[
                {
                  x: patrimonyData?.x,
                  y: patrimonyData?.y,
                  type: patrimonyData?.type as PlotType,
                },
              ]}
              layout={{ title: "Evolução patrimonial (R$)" }}
              useResizeHandler
              style={{width: "100%", height: "100%"}}
            />
          </LoadingState>
        </Card>
        <Card>
          <LoadingState loading={weightsResult.loading} data={weightsResult.data}>
            <Plot
              data={[
                {
                  x: weightsData?.x,
                  y: weightsData?.y,
                  type: weightsData?.type as PlotType,
                },
              ]}
              layout={{
                title: "Peso atual da carteira",
                yaxis: {
                  tickformat: ",.0%",
                  range: [0, 1],
                  autorange: true,
                },
              }}
              useResizeHandler
              style={{width: "100%", height: "100%"}}
            />
          </LoadingState>
        </Card>
        <Card>
          <LoadingState loading={weightsResult.loading} data={weightsResult.data}>
            <Plot
              data={[
                {
                  x: idealWeightsData?.x,
                  y: idealWeightsData?.y,
                  type: idealWeightsData?.type as PlotType,
                  marker: { color: "green" },
                },
              ]}
              layout={{
                title:
                  "Peso ideal da carteira otimizado com inteligência artificial",
                yaxis: {
                  tickformat: ",.0%",
                  range: [0, 1],
                  autorange: true,
                },
              }}
              useResizeHandler
              style={{width: "100%", height: "100%"}}
            />
          </LoadingState>
        </Card>
      </SimpleGrid>
      <div style={{ padding: "16px" }} />
      <Card>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Histórico de operações de compra</TableCaption>
              <Thead>
                <Tr>
                  <Th>Ativo</Th>
                  <Th>Data</Th>
                  <Th isNumeric>Valor (R$)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {walletHistory.map((item: any, index) => (
                  <Tr key={index}>
                    <Td>{item.asset_name}</Td>
                    <Td>{item.Date}</Td>
                    <Td isNumeric>{item.value}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
    </PageContainer>
  );
};