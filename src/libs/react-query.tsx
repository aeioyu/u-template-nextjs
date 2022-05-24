import { QueryClient } from "react-query";

export const initQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  });
