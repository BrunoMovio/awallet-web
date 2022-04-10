import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../../components/page-container";
import { useToast } from "@chakra-ui/toast";
import { PageHeading } from "../../../components/typography/page-heading.component";
import { dashboardData } from "./dashboard-data";
import Plot from "react-plotly.js";
import { PlotType } from "plotly.js";
import { Card } from "../../../components/card";
import { Flex } from "@chakra-ui/react";

const cumulativeReturnsData = dashboardData.cumulative_returns.data[0];
const cumulativeReturnsLayout = dashboardData.cumulative_returns.layout;

const patrimonyData = dashboardData.patrimony.data[0];
const patrimonyLayout = dashboardData.patrimony.layout;

export const HomePage = () => {
  const toast = useToast();
  const navigate = useNavigate();

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
          <Plot
            data={[
              {
                x: cumulativeReturnsData.x,
                y: cumulativeReturnsData.y,
                type: cumulativeReturnsData.type as PlotType,
              },
            ]}
            layout={{ title: "Retorno cumulativo" }}
          />
        </Card>
        <Card>
          <Plot
            data={[
              {
                x: patrimonyData.x,
                y: patrimonyData.y,
                type: patrimonyData.type as PlotType,
              },
            ]}
            layout={{ title: "Patrimônio" }}
          />
        </Card>
      </Flex>
    </PageContainer>
  );
};
