import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";

dayjs.locale("pt-br");

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
