import "@/assets/styles/font.css";
import "@/assets/styles/global.css";

import { Hydrate, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import React, { ReactNode, useEffect } from "react";
import Layout from "@/components/layouts/Layout";
import { initQueryClient } from "@/libs/react-query";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@/themes/theme";
import { NotificationProvider } from "@/hooks/useNotification";
import { DialogProvider } from "@/hooks/useDialog";
import { initSentry } from "@/libs/sentry";
import { DebugObserver } from "@/hooks/useDebugObserver";
import { configs } from "@/configs/configs";

initSentry();

if (process.browser && configs.isDebug) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const VConsole = require("vconsole");
  new VConsole({ theme: "dark" });
}

type GetLayout = (page: ReactNode) => ReactNode;

type MyAppProps<P = unknown> = AppProps<P> & {
  Component: NextPage<P>;
};

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => <Layout>{page}</Layout>;

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? defaultGetLayout;
  const [queryClient] = React.useState(() => initQueryClient());

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <RecoilRoot>
      {configs.isDebug && <DebugObserver />}
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={createTheme(theme)}>
            <NotificationProvider>
              <DialogProvider>
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
              </DialogProvider>
            </NotificationProvider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
