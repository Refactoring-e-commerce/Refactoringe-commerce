import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Allproduct from "@/AllProduct/page";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your component or application */}
      <Allproduct />

      {/* Add DevTools for development */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};